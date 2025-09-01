function firstNonRepeatedChar(str) {
 // Write your code here
	let nonRepeatingChar = str[0];
	for(let i=0; i<str.length; i++){
		if(!nonRepeatingChar) nonRepeatingChar = str[i]
		while(nonRepeatingChar === str[i+1]){
			i++
			if(nonRepeatingChar) nonRepeatingChar = null
		}
	}
	return nonRepeatingChar;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
