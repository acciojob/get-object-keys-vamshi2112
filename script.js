//your JS code here. If required.
const student={
	name:"john",
	age:20,
	city:"delhi"
}
function getKeys(student){
	let result=Object.keys(student);
	return result;
} console.log(getKeys(student));