import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';

function App() {
  const personName = {
    firstName: 'Mohammad',
    lastName: 'Rakib'
  }

  const nameList = [
    {
      firstName: 'rakib',
      lastName: 'hasan'
    },
    {
      firstName: 'Jasim',
      lastName: 'hasan'
    },
    {
      firstName: 'Kobiraj',
      lastName: 'hasan'
    }
  ]
  return (
    <div className="App">
      <Greet name='Rakib' messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={nameList}/>
    </div>
  );
}

export default App;
