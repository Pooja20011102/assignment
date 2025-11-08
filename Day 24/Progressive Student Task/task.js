const a = document.getElementById("name");
const b = document.getElementById("email");
const c = document.getElementById('password');
const radio1 = document.getElementById("male");
const radio2 = document.getElementById("female");
const check1 = document.getElementById("reading");
const check2 = document.getElementById("music");
const check3 = document.getElementById('travel');
const age  = document.getElementById("age");
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
            errors.push("Email cannot be empty");
        }
        else if (b.value.indexOf('@') === -1){
            errors.push("Email should have '@' symbol")
        }

        if (c.value.trim() === ''){
            errors.push("Password cannot be negative")
        }
        else if (c.value.length < 8){
            errors.push("Password must be more than 8")
        }

        if (!radio1.checked && !radio2.checked){
            errors.push("Choose the gender")
        }

        if (!check1.checked && !check2.checked && !check3.checked){
            errors.push("Chosse atleast one hobby")
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