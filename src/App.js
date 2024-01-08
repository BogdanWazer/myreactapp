import Add from './components/Add';
import Greetings from './components/Greetings';
import User from './components/User';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You typed ${username}`);
    setUsername('');
  };

  return (
    <>
      <h1>Form demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submin</button>
      </form>
    </>
  );
}

export default App;
