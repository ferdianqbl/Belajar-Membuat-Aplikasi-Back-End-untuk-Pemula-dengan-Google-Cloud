const fs = require("fs");

// fs.readFile("note.txt", "UTF-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// const readStream = fs.createReadStream("./article.txt", {
//   highWaterMark: 10,
// });

// readStream.on("readable", () => {
//   try {
//     process.stdout.write(`[${readStream.read()}]`);
//   } catch (error) {}
// });

// readStream.on("end", () => {
//   console.log("end");
// });

// const writeStream = fs.createWriteStream("outpu.txt");

// writeStream.write("hello\n");
// writeStream.write("world\n");
// writeStream.end("END");
