async function outer() {
    let counter = 1;

    return function inner() {
        return new Promise((resolve, reject) => {
            setTimeout(() => { // simulate async
                console.log("Counter: " + counter);
                counter++;
                resolve("Counter updated");
            }, 1000);
        });
    };
}

outer().then(async (func) => {
    await func().then((msg) => console.log(msg));
    await func().then((msg) => console.log(msg));
    await func().then((msg) => console.log(msg));
}).catch((err) => console.log(err));
