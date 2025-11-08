const a = document.getElementById("name");
const b = document.getElementById("email");
const c = document.getElementById('password');

const res = document.getElementById('res');
res.innerText = ""

const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    try{
        let errors = []
        if (a.value.trim() === ""){
            errors.push("Name cannot be empty");
        }
        if (b.value.trim() === ""){
            errors.push("Email filed cannot be empty");
        }
        else if (b.value.indexOf('@') === -1){
            errors.push("Email should have '@' symbol")
        }

        if (c.value.trim() === ''){
            errors.push("Password Field cant be left empty")
        }
        else if (c.value.length < 8){
            errors.push("Password too short")
        }


        if (errors.length>0){
            throw new Error(errors.join("\n"))
        }
        res.innerText = "Form Filled Correctly"
    }
    catch(error){
        res.innerText =`Error got : ${error.message}`;
        res.classList.add("style")
    }
    finally{
     res.innerText += "\nForm Validation Completed"
    }
})