import Header from "./Header"
import Footer from "./Footer"

function Task5(){
    return(
        <>
            <h1>This is a simple header,footer layout</h1>
            <Header name="Pooja" phone={123456789} email="pooja@123"/>
            <main>
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>React</li>
                </ul>
            </main>
            <Footer/>
        </>
    )
}

export default Task5