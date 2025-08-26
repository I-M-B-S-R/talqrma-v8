import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

function LawDetailPage() {
  // Get the 'lawId' from the URL
  const { lawId } = useParams(); 
  const [law, setLaw] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaw = async () => {
      setLoading(true);
      // Create a reference to the specific document in the 'laws' collection
      const docRef = doc(db, 'laws', lawId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLaw(docSnap.data());
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };

    // Fetch the law when the component loads
    fetchLaw();
  }, [lawId]); // Re-run this code if the lawId in the URL changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!law) {
    return <div>Law not found.</div>;
  }

  return (
    <div>
      <Link to="/">&larr; Back to List</Link>
      <h1>{law.title}</h1>
      <p><strong>Statute ID:</strong> {law.statute_id}</p>
      <hr />
      {/* Using <pre> helps preserve formatting like line breaks in the text */}
      <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
        {law.full_text}
      </pre>
    </div>
  );
}

export default LawDetailPage;