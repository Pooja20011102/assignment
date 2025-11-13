// Fetch data from https://jsonplaceholder.typicode.com/posts and display the first 5 titles.

async function fetchdata(){
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    res = await res.json();

    for (let i = 0;i< 5 ;i++ ){
        console.log(res[i].title);
    }
}

fetchdata()