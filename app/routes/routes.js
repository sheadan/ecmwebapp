// app/routes.js

// load the CV Experiment model
var cvExp = require('../models/cvExp');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // get all cv experiments
    app.get('/api/experiments', function(req, res) {

        // use mongoose to get all CV experiments in the database
        cvExp.find(function(err, cvExps) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(cvExps); // return all CV experiments in JSON format
        });
    });

// create CV experiments and send back all  CV experiments after creation
    app.post('/api/experiments', function(req, res) {

    // create a  CV experiment, information comes from AJAX $http service POST request from Angular
        cvExp.create({
            name : req.body.dataName,
            params: {
              startV : req.body.params.startV,
              maxV : req.body.params.maxV,
              minV : req.body.params.minV,
              sweepRate : req.body.params.sweepRate,
              cycles : req.body.params.cycles,
              sampleRate : req.body.params.sampleRate
            },
            done : false
        }, function(err, experiments) {
            if (err)
                res.send(err);

            // get and return all the  CV experiments after you create another
            cvExp.find(function(err, experiments) {
                if (err)
                    res.send(err)
                res.json(experiments);
            });
        });

    });

    // delete a  CV experiments
    app.delete('/api/experiments/:experiment_id', function(req, res) {
         cvExp.remove({
            _id : req.params.experiment_id
        }, function(err, experiment) {
            if (err)
                res.send(err);

            // get and return all the CV experiments after you create another
            cvExp.find(function(err, experiments) {
                if (err)
                    res.send(err)
                res.json(experiments);
            });
        });
    });


    //serve up initial index.html page
    app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
  }
