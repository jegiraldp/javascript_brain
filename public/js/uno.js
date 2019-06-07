const brain = require('./brain.js');
//var colors = require('colors');

module.exports.calcular=function(nume1,nume2,ite,capas){
  const n1 = parseInt(nume1);
  const n2 = parseInt(nume2);
  const itera=parseInt(ite);
  const cap=parseInt(capas);

  // provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [cap],     // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    learningRate: 0.3,
    iterations: itera, // the maximum times to iterate the training data
    //errorThresh: 0.005, // the acceptable error percentage from training data
    log:true,
    logPeriod:2,
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);
//brain.recurrent.RNN
//brain.recurrent.LSTM();

net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);

const salida = net.run([n1,n2]);  // [0.987]
//console.log(salida)
output=parseFloat(salida);
module.exports.salida = output;
if(output>0.8){
  output=1;
}
if(output<0.2){
  output=0;
}
//console.log("Resultado "+output);
return output;
};
