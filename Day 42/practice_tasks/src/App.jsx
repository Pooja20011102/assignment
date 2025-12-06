import Task1 from "./Task1";
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';

function App() {


  return (
    <>
     <Task1/>
     <Task2 name="Pooja" age="22"/>
     <Task2 name="John" age="30"/>
     <Task3/>
      <Task4 name="Delli" course="python"/>
      <Task5>
        <p>This is card one</p>
        <p>Learn the course</p>
      </Task5>
       <Task5>
        <p>This is card two</p>
        <p>Practice regularly</p>
      </Task5>
    </>
  )
}

export default App
