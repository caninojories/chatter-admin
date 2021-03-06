(function() {
  'use strict';

  var app = io.express();

  app.route('/create/room')
    .post(function(req, res, next) {
      let User_Rooms   = new io.User_Rooms(req, res, next);

      User_Rooms
        .createRoom()
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.status(406).send({error: err});
        });
    });

  app.route('/room')
    .get(function(req, res, next) {
      let User_Rooms = new io.User_Rooms(req, res, next);

      User_Rooms
        .getRoom()
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.status(406).send({error: err});
        })
    })

  module.exports = app;
}());
