const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");
const readStream = fs.createReadStream("input.txt", {
  highWaterMark: 15,
});

readStream.on("readable", () => {
  try {
    writeStream.write(`${readStream.read()}\n`);
  } catch (error) {}
});
