const a = document.getElementById('name');
const b = document.getElementById('age');
const c = document.getElementById('email');

const btn = document.getElementById("btn");

btn.addEventListener('click',function(event){
    event.preventDefault();
    const res = document.getElementById('res');
    res.innerText = '';
    let errors = []
    try{
        if (a.value.trim() === ''){
            errors.push("Name cannot be empty");
        }
        if (b.value < 0 || b.value === ''){
            errors.push("Your Age can't be negative");
        }
        if (c.value === ''){
            errors.push("Email cannot be empty")
        }
        else if(c.value.indexOf('@')===-1){
            errors.push("Your mail should have @ symbol");
        }
        if (errors.length > 0){
            throw new Error(errors.join("\n"));
        }        
        res.innerText = "Form Filled Correctly";
        res.classList.remove('style')
    }
    catch(error){
        res.innerText =`Error got : ${error.message}`;
        res.classList.add("style")
    }
    finally{
     res.innerText += "\nForm Validation Completed"
    }
})