import Add from './components/Add';
import Greetings from './components/Greetings';
import User from './components/User';

function App() {
  return (
    <>
      <User
        img="https://avatars.githubusercontent.com/u/81853373?v=4"
        name="Bohdan"
        age={18}
        hobbies={['Coding', 'Reading', 'Swimming']}
        realData={{ name: 'Alex', location: 'Ukraine' }}>
        <p>It`s a children component</p>
      </User>
    </>
  );
}

export default App;
