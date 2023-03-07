import './App.css';
import Greet from './component/Greet';
import Heading from './component/Heading';
import Oscar from './component/Oscar';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Status from './component/Status';

function App() {
  const personName = {
    firstName: 'Mohammad',
    lastName: 'Rakib'
  }

  const nameLists = [
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
      <PersonList nameList={nameLists} />
      <Status status='Loading' />
      <Heading>Place Holder....</Heading>
      <Oscar>
        <Heading>Oscar Goes to Rakib ! </Heading>
      </Oscar>
    </div>
  );
}

export default App;
