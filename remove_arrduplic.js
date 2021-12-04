//Remove duplicates from an array
var a = {};
var b = ["a","b","c","d","e","a","c","b","fd","gh","h","e"];
for(let i=0;i<b.length;i++){
	console.log(b[i]);
	a[b[i]]="1";
}
console.log(Object.keys(a));