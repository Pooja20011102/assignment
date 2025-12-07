
function Footer(){
     const currentDate = new Date();
    return (
        <>
            <p>This is the footer page</p>
            <p>&copy; {currentDate.getFullYear()}</p>
        </>
       
    )
}

export default Footer