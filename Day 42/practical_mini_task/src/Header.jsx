function Header({name,email,phone}){
    return(
        <header>
            <h1>My Page</h1>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </header>
    )
}

export default Header;