//write 

const fs=require('fs');
fs.writeFileSync('secastudent.txt','This is the experiment no 2 in FSD workshop sem 3','utf8');
console.log('file is written successfully');


//read

const data=fs.readFileSync("secastudent.txt",'utf8');
console.log('file content is given as :',data);

//append
fs.appendFileSync('secastudent.txt','\nthis is the new line added');
console.log('file is appended ');

//delete

/*
fs.unlinkSync('secastudent1.txt');
console.log('file is deleted successfully');
*/

//folder creation
/*
fs.mkdirSync('sample_folder');
console.log('new folder is creted');
*/

//folder deleted
/*
fs.rmdirSync('sample_folder');
console.log('new folder is deleted');
*/

if (fs.existsSync('secastudent.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}
