

 async function display(){   
    
            try {
            let res = await fetch("https://api.github.com/users");
            if (!res.ok) throw new Error("Failed to fetch users");

            let data = await res.json();
            document.getElementById("para").innerHTML = 
             data.map((u) => `<p id="ele"><img src="${u.avatar_url}" alt="avatar image" width="50" height="50"> ${u.login}   ${u.url}</p>`).join('');
            }
            catch(error){
                document.getElementById("para").innerHTML = "Error " + error.message;
            }

         
        }
        
        display();