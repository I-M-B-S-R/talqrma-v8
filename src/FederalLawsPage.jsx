import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './App.css';

function FederalLawsPage() {
  const [laws, setLaws] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaws = async () => {
      setLoading(true);
      const q = query(collection(db, 'federal_laws'), orderBy('statute_id'));
      const lawSnapshot = await getDocs(q);
      const lawList = lawSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLaws(lawList);
      setLoading(false);
    };
    fetchLaws();
  }, []);

  const filteredLaws = laws.filter(law =>
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Link to="/">&larr; Back to Arizona Laws</Link>
      <h1>United States Code (Federal Laws)</h1>

      <input
        type="text"
        placeholder="Search by title..."
        onChange={event => setSearchTerm(event.target.value)}
      />

      {loading ? (
        <p>Loading federal laws...</p>
      ) : (
        <ul>
          {filteredLaws.map(law => (
            <li key={law.id}>
              {law.title} ({law.statute_id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FederalLawsPage;