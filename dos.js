const brain = require('brain.js');

const config = {
  iterations: 2500,
  log: true,
  logPeriod: 50,
  layers: [10],
  //errorThresh: 0.009
};

const data = [
  { input: "Argon", output: "a" },
  { input: "Argentina", output: "a" },
  { input: "Aron", output: "a" },
  { input: "August", output: "a" },
  { input: "Australia", output: "a" },
  { input: "America", output: "a" },
  { input: "Allison", output: "a" },
  { input: "Alex", output: "a" },
  { input: "Arthur", output: "a" },
  { input: "Also", output: "a" },

  { input: "Barcelona", output: "b" },
  { input: "Baseball", output: "b" },
  { input: "Bayern", output: "b" },
  { input: "Batch", output: "b" },
  { input: "Brasillia", output: "b" },
  { input: "Brass", output: "b" },
  { input: "Bateman", output: "b" },
  { input: "Bose", output: "b" },
  { input: "Biscuit", output: "b" },
  { input: "Bhutan", output: "b" },

  { input: "China", output: "c" },
  { input: "Chile", output: "c" },
  { input: "Cheat", output: "c" },
  { input: "Caught", output: "c" },
  { input: "Colombia", output: "c" },
  { input: "Colorado", output: "c" },
  { input: "Cult", output: "c" },
  { input: "Cristiano", output: "c" },
  { input: "Choke", output: "c" },
  { input: "Cut", output: "c" }
];

// create a simple feed forward neural network with backpropagation
const net = new brain.recurrent.LSTM();
net.train(data,config);
// texto a probar
const test = "bogota";
const salida = net.run(test);
console.log(salida);
