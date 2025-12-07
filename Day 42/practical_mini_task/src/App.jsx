import Task1 from "./Task1"
import Task2 from "./Task2"
import Task3 from "./Task3"
import Task4 from "./Task4"
import Task5 from "./Task5"

function App(){
    return (
        <>
            <Task1 name="Pooja">
            <img src="vite.svg" alt="" />
            <h2>Skills</h2>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ol>
        </Task1>
    
        <Task1 name="Praveen">
            <img src="vite.svg" alt="img" />
            <h2>Skills</h2>
            <ol>
                <li>MongodB</li>
                <li>SQL</li>

            </ol>
        </Task1>
        <hr />
        <Task2 name="Varun"/>
        <hr />
        <Task3 title="Python course" price={500}/>
        <hr />
        <Task4/>
        <hr />
         <Task5/>
        </>
    )
 }

 export default App;