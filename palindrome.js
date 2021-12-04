//Return all the palindromes in an array
var checkstr;
function palindromecheck(checkstr){
	checkstr = checkstr.toLowerCase();
	var reversestr = checkstr.split('').reverse().join('');
	if(checkstr === reversestr){
		return true;
	}	
}

var c = ['MalayalaM','ModeM','redivider','Hello'];
var b=[];
for(let i=0;i<c.length;i++){
	var b_resp=palindromecheck(c[i]);
	if(b_resp === true){
        b.push(c[i]);
    }
}
console.log(b);


//Return all the palindromes in an array using arrow function
var checkstr;
function palindromecheck(checkstr){
	checkstr = checkstr.toLowerCase();
	var reversestr = checkstr.split('').reverse().join('');
	if(checkstr === reversestr){
		return true;
	}	
}

var c = ['MalayalaM','ModeM','redivider','Hello'].filter(numb => palindromecheck(numb));
console.log(c);
