import Add from './components/Add';
import Greetings from './components/Greetings';
import User from './components/User';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState(['Alex', 'John']);

  const addOne = () => {
    setFriends([...friends, 'HuXn']);
  };
  const removeOne = () => {
    setFriends(friends.filter((f) => f !== 'John'));
  };
  const updateOne = () => {
    setFriends(friends.map((f) => (f === 'Alex' ? 'Alex Smith' : f)));
  };

  return (
    <>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOne}>Add One Person</button>
      <button onClick={removeOne}>Remove One Person</button>
      <button onClick={updateOne}>Update One Person</button>
    </>
  );
}

export default App;
