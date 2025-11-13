// Try fetching a non-existing user to test the catch block.

fetch('https://api.github.com/users')
.then((res) => {if (!res.ok) {throw new Error("Network Error " + error)}
    return res.json();
})
.then((data) => {
    const username = data.find(u => u.login === "nonexistinguser12345")
    if (!username) {
       throw new Error("User not found");
    }
    else{
       console.log(username);
    }

 })
 .catch((error) => {console.log("Failed to fetch " + error)})
 
