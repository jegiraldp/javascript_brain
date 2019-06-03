const brain = require('brain.js');
var colors = require('colors');

// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [2],     // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    learningRate: 0.3,
    iterations: 20000, // the maximum times to iterate the training data
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

const salida = net.run([1, 0]);  // [0.987]
output=parseFloat(salida);
if(output>0.8){
  output=1;
}
if(output<0.1){
  output=0;
}
console.log("Resultado ".green+" "+output);
