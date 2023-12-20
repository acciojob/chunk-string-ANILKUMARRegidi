function chunkString(str, size) {
  const res = [];
  if (!str || isNaN(size) || size <= 0) {
    return res; // Return an empty array if the input is invalid
  }

  size = parseInt(size);
  let chunk = "";
  for (let i = 0; i < str.length; i++) {
    chunk += str[i];
    if (chunk.length === size || i === str.length - 1) {
      res.push(chunk);
      chunk = ""; // Reset the chunk for the next iteratio
    }
  }

  return res;
}

// Example of usage
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(chunkString(str, size));
