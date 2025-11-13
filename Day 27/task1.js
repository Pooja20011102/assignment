// Fetch your GitHub profile data using fetch("https://api.github.com/users/<your-username>") and display it in the console.

async function getdata() {
    let res = await fetch('https://api.github.com/users');

    let data = await res.json();

    console.log(data);
}

getdata()

