// Run-Length Encoding (RLE).
// Add simple compression RLE algorithm

function rleCompress(data) {
  let compressedData = "";
  let count = 1;

  for (let i = 1; i <= data.length; i++) {
    if (i === data.length || data[i] !== data[i - 1]) {
      // Found a new character or end of input
      compressedData += data[i - 1] + count;
      count = 1;
    } else {
      // Found a repeated character
      count++;
    }
  }

  return compressedData;
}

function rleUncompress(compressedData) {
  let decompressedData = "";

  for (let i = 0; i < compressedData.length; i += 2) {
    const char = compressedData[i];
    const count = parseInt(compressedData[i + 1]);

    // Repeat the character based on the count
    decompressedData += char.repeat(count);
  }

  return decompressedData;
}

// Usage example:
const data = "AAAABBBCCDAA";
console.log("Original data:", data);

const compressedData = rleCompress(data);
console.log("Compressed data:", compressedData);

const decompressedData = rleUncompress(compressedData);
console.log("Decompressed data:", decompressedData);
