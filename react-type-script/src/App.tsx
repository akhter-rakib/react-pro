import './App.css';
import Greet from './component/props/Greet';
import Heading from './component/Heading';
import Input from './component/Input';
import Oscar from './component/Oscar';
import Person from './component/props/Person';
import PersonList from './component/props/PersonList';
import LoggedIn from './component/state/LoggedIn';
import User from './component/state/User';
import Status from './component/props/Status';
import Button from './component/props/event/Button';
import Container from './component/props/Container';
import UserTypeAssertionExmpl from './component/state/UserTypeAssertionExmpl';

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
      <UserTypeAssertionExmpl/>
    </div>
  );
}

export default App;
