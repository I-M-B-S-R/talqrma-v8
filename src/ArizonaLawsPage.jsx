import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './App.css';

function App() {
  const [laws, setLaws] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // NEW: A state to track which accordion item is open
  const [openLawId, setOpenLawId] = useState(null);

  useEffect(() => {
    const fetchLaws = async () => {
      const q = query(collection(db, 'laws'), orderBy('statute_id'));
      const lawSnapshot = await getDocs(q);
      const lawList = lawSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLaws(lawList);
    };
    fetchLaws();
  }, []);

  const filteredLaws = laws.filter(law =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // NEW: Function to handle clicking on a law title
  const handleToggle = (lawId) => {
    // If the clicked law is already open, close it. Otherwise, open it.
    setOpenLawId(openLawId === lawId ? null : lawId);
  };

  return (
    <div>
      <h1>Arizona Laws (TALQRMA V8)</h1>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={event => setSearchTerm(event.target.value)}
      />
      <ul className="accordion-list">
        {filteredLaws.map(law => (
          <li key={law.id} className="accordion-item">
            <div className="accordion-header" onClick={() => handleToggle(law.id)}>
              <span>{law.title} ({law.statute_id})</span>
              <span>{openLawId === law.id ? '▲' : '▼'}</span>
            </div>
            {/* NEW: Conditionally show the details only if this law is open */}
            {openLawId === law.id && (
              <div className="accordion-content">
                <pre>{law.full_text}</pre>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;