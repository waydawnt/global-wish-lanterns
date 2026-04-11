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
      const res = await axios.get('http://localhost:5000/api/wishes');
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
    if (selectedIds.length === wishes.length) {
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
      const res = await axios.delete('http://localhost:5000/api/wishes/bulk', {
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
    <div style={{ padding: '30px', fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>🧹 Spam Cleanup Dashboard</h2>
        
        {/* Controls Section */}
        <div style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button 
            onClick={handleDelete} 
            style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Delete Selected ({selectedIds.length})
          </button>
        </div>

        {/* Data Table */}
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th style={{ padding: '10px' }}>
                <input 
                  type="checkbox" 
                  onChange={toggleSelectAll} 
                  checked={selectedIds.length > 0 && selectedIds.length === wishes.length}
                />
              </th>
              <th style={{ padding: '10px' }}>Message</th>
              <th style={{ padding: '10px' }}>Author</th>
              <th style={{ padding: '10px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {wishes.map(wish => (
              <tr key={wish._id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>
                  <input 
                    type="checkbox" 
                    checked={selectedIds.includes(wish._id)}
                    onChange={() => toggleSelect(wish._id)} 
                  />
                </td>
                <td style={{ padding: '10px', maxWidth: '300px', wordWrap: 'break-word' }}>{wish.message}</td>
                <td style={{ padding: '10px' }}>{wish.author}</td>
                <td style={{ padding: '10px', color: '#888', fontSize: '0.9em' }}>
                  {new Date(wish.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {wishes.length === 0 && <p style={{ textAlign: 'center', marginTop: '20px' }}>No messages found. The database is clean!</p>}
      </div>
    </div>
  );
}