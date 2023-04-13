import './App.css';
import Greet from './component/Greet';
import Heading from './component/Heading';
import Input from './component/Input';
import Oscar from './component/Oscar';
import Person from './component/Person';
import PersonList from './component/PersonList';
import LoggedIn from './component/state/LoggedIn';
import User from './component/state/User';
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
      <PersonList names={nameLists} />
      <Status status='Loading' />
      <Heading>Place Holder....</Heading>
      <Oscar>
        <Heading>Oscar Goes to Rakib ! </Heading>
      </Oscar>
      <Greet name='Hamid' isLoggedIn={true}></Greet>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked....', event, id)
        alert('test' + id)
      }} />
      <Input value='' handleChange={event => console.log(event)} />
      <Container style={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn/>
      <User/>
    </div>
  );
}

export default App;
