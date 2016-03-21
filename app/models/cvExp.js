var mongoose = require('mongoose');

machineValues = {
  maxV : 2.0,
  minV : -2.0,
  maxSweep : 0.1,
  minSweep : 10,
  maxCycles : 5,
  minCycles : 1,
  maxRate : 1000,
  minRate : 0.1
}

var cvExpSchema = new mongoose.Schema({

  name : String,

  params: {
     startV : Number,
     maxV : Number,
     minV : Number,
     sweepRate : Number,
     cycles : Number,
     sampleRate: Number
   }
});

// if want to add methods, do so here: cvExpSchema.methods.<name> = function ()}{}

module.exports = mongoose.model('CyclicVoltammogram', cvExpSchema);

/*
var cvExp = new mongoose.Schema({

  name : Starting

   startV : {
     name : "Starting Potential",
     type : Number,
     value : 0,
     required : true,
     min : machineValues.minV,
     max : machineValues.maxV
   },

   maxV : {
     name : "Maximum Potential",
     type : Number,
     value : 0.5,
     required : true,
     min : machineValues.minV,
     max : machineValues.maxV
   },

   minV : {
     name : "Minimum Potential",
     type : Number,
     value : -0.5,
     required : true,
     min : machineValues.minV,
     max : machineValues.maxV
   },


   sweepRate : {
     name : "Sweep Rate",
     type : Number,
     value : 0.1,
     required : true,
     min : machineValues.minSweep,
     max : machineValues.maxSweep
   },


   cycles : {
     name : "Number of Cycles",
     type : Number,
     value : 1,
     required : true,
     min : machineValues.minCycles,
     max : machineValues.maxCycles
   },


   sampleRate: {
     name : "Sample Rate",
     type : Number,
     value : 1,
     required : true,
     min : machineValues.minRate,
     max : machineValues.maxRate
   }


});
*/
