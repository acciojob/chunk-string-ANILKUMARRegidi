 function chunkString(str, size) {
  const res = [];
  if (!str) {
    return res; // Return an empty array if the input string is null
  }

  size = parseInt(size);
   let chunk = "";
  for (let i = 0; i < str.length; i++) {
	  chunk += str[i];
    if(chunk.length === size)
	{
    res.push(chunk);
	chunk = str[i];
	}
	  else
	{
		res.push(str[i]);
	}
  }

  return res;
}

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
alert(chunkString(str, size));
