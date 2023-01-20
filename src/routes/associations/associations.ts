import React, {useCallback, useState} from 'react';

const Associations: React.FC = () => {
  
  const [word, setWord] = useState('software');
  const [associations, setAssociations] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getAssociations = useCallback(async () => {

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/associations' + word);
      const data = await response.json();
      setAssociations(data);
      setError('')
    } catch (err) { //is this the right TS 
      setError(err.message);
      setAssociations({});
    } finally {
      setLoading(false);
    }
  }, [word, setAssociations, setError, setLoading])

  return (
    
  )
  
}

export default Associations;
