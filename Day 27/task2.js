// Modify the code to show your login and public_repos in HTML

async function getdata() {
    let res = await fetch('https://api.github.com/users');

    let data = await res.json();

    console.log("Login details");
    
    let login = data.map((u)=> console.log(u.login));
    
    console.log("Public_repos details");
    
    let public_repos = data.map((u) => console.log(u.repos_url));

    console.log(public_repos);
    
    
}

getdata()
