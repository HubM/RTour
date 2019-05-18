const logger = require("../../services/logger");
const ObjectId = require("mongojs").ObjectID;

module.exports.registerUser = (req, res) => {
  const { user } = req.body;

  global.dbRtour.collection('users').insert({
    ...user
  }, (errorRegisterUser, registerUser) => {
    if (errorRegisterUser) {
      logger.error("ERROR on POST user", errorRegisterUser);
      res.status(404).send('ERROR width POST user request')
    } else {
      res.status(200).send(registerUser);
    }
  })
}

module.exports.getUserById = (req, res) => {
  const { id } = req.query;
  global.dbRtour.collection("users").findOne({ _id: ObjectId(id) }, (errorUser, user) => {
    if (errorUser) {
      logger.error("Error on GET user", errorUser);
      res.status(404).send("Error with GET user request");
    } else {
      res.status(200).send(user);
    }
  });
};

module.exports.getUserByUsernameOrEmail = (req, res) => {
  const { usernameOrEmail } = req.body;

  global.dbRtour.collection("users").findOne(
    {
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    },
    (errorUser, user) => {
      if (errorUser) {
        logger.error("Error on POST get user by username or email", errorUser);
        res.status(404).send("Error on POST get user by username or email", errorUser);
      } else {
        if (user) {
          res.status(200).send({
            type: "success",
            message: `Hello back ${user.firstname}`,
            user
          });
        } else {
          res.status(200).send({
            type: "error",
            message: `Patient ${usernameOrEmail} not found`
          });
        }
      }
    }
  );
};
