//rotate an array by k times 
var a;
function rotateRight(arr,a){
	if(a>0){
		for(i=1;i<=a;i++){
			let last = arr.pop();
			arr.unshift(last);
		}
		return arr;
	}
    return arr;
}

function rotateleft(arr,a){
	if(a>0){
		for(i=1;i<=a;i++){
			let last = arr.shift();
			arr.push(last);
		}
		return arr;
	}
    return arr;
}

var arr = [2, 4, 6, 8];
console.log(rotateRight(arr,1));
console.log(rotateleft(arr,1));