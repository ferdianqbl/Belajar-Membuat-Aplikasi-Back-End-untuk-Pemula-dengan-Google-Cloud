const { EventEmitter } = require("events");

const myEvent = new EventEmitter();

const makeCoffee = ({ name }) => {
  console.log(`${name} is making coffee`);
};

myEvent.on("coff", makeCoffee);

myEvent.emit("coff", { name: "Budi" });
