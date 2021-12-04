//Return all the even numbers in an array
var a=[1,2,3,4];
var b=[];
function evenorodd(){
	for(let i=0;i<a.length;i++){
		if(isNaN(a[i])){}
		else{
			let x=a[i]
			if(x%2 === 0){
				//console.log(x);
				b.push(x);
			}
			else{
				
			}
		}
	}
	return b;
}
b=evenorodd(a);
console.log(b);

//Print even numbers in an array using arrow function
var a=[2,5,8,6,1].filter(nun => nun%2 === 0; });
console.log(a);