const fs = require("fs");
const { data } = require("jquery");
const path = require("path");

//fs.mkdir(path.join(__dirname,'temlates'),err => {
//   if(err) throw new Error()

//     console.log('folder was created successfuly');

//})

// fs.mkdir(path.join(__dirname,'notes'),err => {
//    if(err) throw new Error()

//      console.log('folder was created successfuly');

// })

fs.writeFile(
  path.join(__dirname, "notes", "december.txt"),
  "create new course NodeJs",
  (err) => {
    if (err) throw new Error();

    console.log("folder was created successsfuly");
  }
);

fs.appendFile(
  path.join(__dirname, "notes", "december.txt"),
  " and microservervice",
  (err) => {
    if (err) throw new Error();

    console.log("successfully");

    fs.readFile(path.join(__dirname, 'notes','december.txt'),'utf-8', (err, data) => {
        if(err) throw new Error()
    
            console.log(data);
            
    })
    
}
  
);

