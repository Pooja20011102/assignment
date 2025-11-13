// Use async/await to fetch the same data with error handling

fetch('https://api.github.com/users').then((res) => {
     if(!res.ok){throw new Error("Error: " + res.status )}
     return res.json();
})
.then((data) => console.log(data))
.catch((error) => console.log("Failed to fetch " + error))
