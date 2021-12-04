//Return sum of all numbers from array
var a=[1,2,3];
var b=0;
function evenorodd(){
	for(let i=0;i<a.length;i++){
		if(isNaN(a[i])){}
		else{
			b=b+a[i];
		}
	}
	return b;
}
b=evenorodd(a);
console.log(b);

//Print sum of all numbers from array using arrow function
var a=[2,5,8,6,1].reduce((a,b) => a+b );
console.log(a);