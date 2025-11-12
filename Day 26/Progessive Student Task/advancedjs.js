
async function getdata() {
  const res = document.getElementById('res');
  res.innerText = ""; // clear any previous message

  const customer_name = document.getElementById("name").value.trim();
  const product = document.getElementById("product").value.trim();

  // Create base object
  const obj = {
    customer: customer_name,
    product: product
  };

  // Example of spreading (copying) data + adding timestamp
  const userData = { ...obj, time: new Date().toLocaleTimeString() };

  // Destructure for clean access
  const { customer, product: Product, time } = userData;

  return new Promise((resolve, reject) => {
    if (customer && Product) {
      setTimeout(() => {
        res.innerText = `Customer: ${customer}, Product: ${Product} (Submitted at: ${time})`;
        resolve("Data fetched successfully!");
      }, 1000);
    } else {
      res.innerText = "Please fill out both fields!";
      reject("Please fill out both fields!");
    }
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))
  .finally(() => console.log("Process completed"));
}


