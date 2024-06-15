const byteSize = (str) => {
  // write your code here
	if(str.trim()==0) return 0;
	const encoder = new TextEncoder();
const encodedData = encoder.encode(str);
const byteLength = encodedData.length;
	return byteLength;

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
