import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [wishes, setWishes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [password, setPassword] = useState("");

  // Fetch all wishes when the page loads
  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    try {
      const res = await axios.get('https://global-wish-lanterns-api.onrender.com/api/wishes');
      setWishes(res.data);
    } catch (err) {
      console.error("Failed to load wishes", err);
    }
  };

  // Toggle a single checkbox
  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Select or Deselect all checkboxes
  const toggleSelectAll = () => {
    if (selectedIds.length === wishes.length && wishes.length > 0) {
      setSelectedIds([]); // Deselect all
    } else {
      setSelectedIds(wishes.map(wish => wish._id)); // Select all
    }
  };

  // Trigger the Bulk Delete
  const handleDelete = async () => {
    if (!password) return alert("Please enter the Admin Password.");
    if (selectedIds.length === 0) return alert("Please select at least one message to delete.");

    const confirmDelete = window.confirm(`Are you sure you want to delete ${selectedIds.length} messages?`);
    if (!confirmDelete) return;

    try {
      const res = await axios.delete('https://global-wish-lanterns-api.onrender.com/api/wishes/bulk', {
        data: { ids: selectedIds, adminPassword: password }
      });
      
      alert(res.data.message);
      
      // Update the UI by removing the deleted items
      setWishes(wishes.filter(wish => !selectedIds.includes(wish._id)));
      setSelectedIds([]); 
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.header}>🧹 Spam Cleanup Dashboard</h2>
        
        {/* Controls Section */}
        <div style={styles.controls}>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleDelete} style={styles.deleteBtn}>
            Delete Selected ({selectedIds.length})
          </button>
        </div>

        {/* Data Table Wrapper (Allows horizontal scroll on mobile) */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeadRow}>
                <th style={styles.th}>
                  <input 
                    type="checkbox" 
                    onChange={toggleSelectAll} 
                    checked={selectedIds.length > 0 && selectedIds.length === wishes.length}
                  />
                </th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Author</th>
                <th style={styles.th}>Date</th>
              </tr>
            </thead>
            <tbody>
              {wishes.map(wish => (
                <tr key={wish._id} style={styles.tableRow}>
                  <td style={styles.td}>
                    <input 
                      type="checkbox" 
                      checked={selectedIds.includes(wish._id)}
                      onChange={() => toggleSelect(wish._id)} 
                    />
                  </td>
                  <td style={styles.tdMessage}>{wish.message}</td>
                  <td style={styles.tdAuthor}>{wish.author}</td>
                  <td style={styles.tdDate}>
                    {new Date(wish.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {wishes.length === 0 && <p style={styles.emptyText}>No messages found. The database is clean!</p>}
      </div>
    </div>
  );
}

// --- CSS-in-JS STYLES TO OVERRIDE THE 3D WORLD ---
const styles = {
  page: {
    position: 'absolute', // Forces it to sit on top
    top: 0,
    left: 0,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    zIndex: 99999, // Hides the 3D canvas behind it
    overflowY: 'auto', // Allows you to scroll up and down
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    marginTop: 0,
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: '15px',
    color: '#111827' // Force dark text
  },
  controls: {
    display: 'flex',
    gap: '10px',
    margin: '20px 0',
    flexWrap: 'wrap' // Wraps to next line on small phone screens
  },
  input: {
    flex: '1',
    minWidth: '200px',
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    color: '#000' // Ensures password isn't invisible
  },
  deleteBtn: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    whiteSpace: 'nowrap'
  },
  tableWrapper: {
    overflowX: 'auto', // If on a small phone, table will scroll left/right inside the box
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '6px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    minWidth: '600px' // Prevents table from crushing together on phones
  },
  tableHeadRow: {
    backgroundColor: '#f9fafb',
    borderBottom: '2px solid #e5e7eb'
  },
  th: {
    padding: '12px 16px',
    fontWeight: '600',
    color: '#374151'
  },
  tableRow: {
    borderBottom: '1px solid #e5e7eb',
  },
  td: {
    padding: '12px 16px',
    verticalAlign: 'top'
  },
  tdMessage: {
    padding: '12px 16px',
    color: '#111827', // Dark text
    maxWidth: '400px', // Stops super long spam from breaking the screen
    wordWrap: 'break-word',
    lineHeight: '1.5'
  },
  tdAuthor: {
    padding: '12px 16px',
    color: '#4b5563',
    fontWeight: '500',
    whiteSpace: 'nowrap'
  },
  tdDate: {
    padding: '12px 16px',
    color: '#6b7280',
    fontSize: '0.875rem',
    whiteSpace: 'nowrap'
  },
  emptyText: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#6b7280',
    fontStyle: 'italic'
  }
};