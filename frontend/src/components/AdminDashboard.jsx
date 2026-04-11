import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [wishes, setWishes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [password, setPassword] = useState("");

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

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === wishes.length && wishes.length > 0) {
      setSelectedIds([]); 
    } else {
      setSelectedIds(wishes.map(wish => wish._id)); 
    }
  };

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

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeadRow}>
                <th style={styles.thCheckbox}>
                  <input 
                    type="checkbox" 
                    onChange={toggleSelectAll} 
                    checked={selectedIds.length > 0 && selectedIds.length === wishes.length}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
                <th style={styles.thMessage}>Message</th>
                <th style={styles.thAuthor}>Author</th>
                <th style={styles.thDate}>Date</th>
              </tr>
            </thead>
            <tbody>
              {wishes.map(wish => (
                <tr key={wish._id} style={styles.tableRow}>
                  <td style={styles.tdCheckbox}>
                    <input 
                      type="checkbox" 
                      checked={selectedIds.includes(wish._id)}
                      onChange={() => toggleSelect(wish._id)} 
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td style={styles.tdMessage}>{wish.message}</td>
                  <td style={styles.tdAuthor}>{wish.author}</td>
                  <td style={styles.tdDate}>
                    {new Date(wish.createdAt).toLocaleDateString()}
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

// --- CSS-in-JS STYLES ---
const styles = {
  page: {
    position: 'fixed',    // FIX: Changed from absolute to fixed
    top: 0,
    left: 0,
    right: 0,             // FIX: Locks the right side
    bottom: 0,            // FIX: Locks the bottom so it knows exactly how tall the screen is
    backgroundColor: '#f3f4f6',
    zIndex: 99999, 
    overflowY: 'auto',    // FIX: Forces the scrollbar to appear on THIS specific container
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
    color: '#111827' 
  },
  controls: {
    display: 'flex',
    gap: '10px',
    margin: '20px 0',
    flexWrap: 'wrap' 
  },
  input: {
    flex: '1',
    minWidth: '200px',
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    color: '#000' 
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
    overflowX: 'auto', // Horizontal scroll for mobile
    width: '100%',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    backgroundColor: '#fff'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    minWidth: '600px' // Forces a minimum width so columns don't crush on phones
  },
  tableHeadRow: {
    backgroundColor: '#f9fafb',
    borderBottom: '2px solid #e5e7eb'
  },
  thCheckbox: { padding: '12px 16px', width: '40px' },
  thMessage: { padding: '12px 16px', color: '#374151', fontWeight: '600' },
  thAuthor: { padding: '12px 16px', color: '#374151', fontWeight: '600', width: '150px' },
  thDate: { padding: '12px 16px', color: '#374151', fontWeight: '600', width: '120px' },
  
  tableRow: {
    borderBottom: '1px solid #e5e7eb',
  },
  tdCheckbox: {
    padding: '12px 16px',
    verticalAlign: 'top'
  },
  tdMessage: {
    padding: '12px 16px',
    color: '#111827', 
    maxWidth: '400px', 
    wordWrap: 'break-word',
    lineHeight: '1.5'
  },
  tdAuthor: {
    padding: '12px 16px',
    color: '#4b5563',
    fontWeight: '500',
    wordWrap: 'break-word'
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