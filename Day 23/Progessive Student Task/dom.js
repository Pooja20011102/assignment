document.addEventListener('DOMContentLoaded', function() {
    // 1️⃣ Add descriptions to list
    const a = document.querySelectorAll('.description');
    const b = document.getElementById('display');
    b.innerHTML = "";

    a.forEach(ele => {
        const c = document.createElement('li');
        c.textContent = ele.textContent;
        b.appendChild(c);
    });

    // 2️⃣ Change background color on button click
    const d = document.getElementById('change');
    d.addEventListener('click', function() {
        document.body.style.backgroundColor = 'red';
    });
});
