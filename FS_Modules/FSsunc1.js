//write 

const fs=require('fs');
fs.writeFileSync('secastudent1.txt','This is the experiment no 2 in FSD workshop sem 3','utf8');
console.log('file is written successfully');


//read

const data=fs.readFileSync("secastudent1.txt",'utf8');
console.log('file content is given as :',data);

//append
fs.appendFileSync('secastudent1.txt','\nthis is the new line added');
console.log('file is appended ');

fs.unlinkSync('secastudent1.txt');
console.log('file is deleted successfully');