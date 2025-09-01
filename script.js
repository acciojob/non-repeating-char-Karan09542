function firstNonRepeatedChar(str) {
 // Write your code here
	if(!str.trim()) return null;
	
	let nonRepeatingChar = str[0];
	const hash = {}
	for(let i=0; i<str.length; i++){
		if(!hash[str[i]]) hash[str[i]]=0;
		hash[str[i]]++
		if(!nonRepeatingChar) {
			if(hash[str[i]] && hash[str[i]] > 1) nonRepeatingChar = null;
			else nonRepeatingChar = str[i];
		}
		while(nonRepeatingChar === str[i+1]){
			i++
			if(nonRepeatingChar) nonRepeatingChar = null
		}
	}
	return nonRepeatingChar;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));

