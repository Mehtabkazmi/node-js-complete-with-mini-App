const fs = require('fs');
const mydata = {
    name:"mehtab",
    age: 25,
    description: "my name is mehtab kazmi",
}
const jsondata = JSON.stringify(mydata);
fs.writeFile("json1.json", jsondata, (err) => {
    console.log('done');
});
fs.readFile("json1.json", "UTF-8", (err, data) => {
    const objdata = JSON.parse(data);
    console.log(data);
    console.log(objdata);
});
