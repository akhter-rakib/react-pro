import './App.css';
import Greet from './component/props/Greet';
import Heading from './component/Heading';
import Oscar from './component/Oscar';
import Person from './component/props/Person';
import PersonList from './component/props/PersonList';
import Status from './component/props/Status';

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
      <Greet name='Hamid' isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
