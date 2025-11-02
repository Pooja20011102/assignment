// Build a 2D array of names and marks — print each student's data.

let data = [["Abi","Bob","Charlie","Dhanush"],
[78,80,97,87]];

for(let i = 0;i<data.length;i++){
    for (let j = 0;j<data[i].length;j++){
        console.log(data[i][j]);
    }
}
