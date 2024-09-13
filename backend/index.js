import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Playlist from "./models/playlist.js";
import User from "./models/user.js";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
import userValidators from "./validators/userValidators.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: ["https://record-shop-frontend.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));



dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useCreatIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection", err));

//Route
// await User.deleteMany({});
// await Playlist.deleteMany({});


app.get("/", (req,res)=>{
  res.json("HELLO")
})
app.post("/mainlogin", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});
let user;

app.post("/mainsignup", userValidators, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.errors });
    return;
  }
  console.log(errors);
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user1) => {
    if (user1) {
      res.send({ message: "User already registered" });
    } else {
      user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});

app.delete("/main/:productId", (req, res) => {
  Playlist.deleteOne({ _id: req.params.productId })
    .then((result) => {
      console.log(result);
      res.send({ message: "All very good" });
    })
    .catch((error) => {
      console.log("Error when deleting", error);
      res.status(400);
      res.send({ message: "All very bad" });
    });
});

app.post("/main", async (req, res) => {
  // console.log(user);

  const {
    id,
    title,
    artist,
    format,
    genre,
    img_src,
    src,
    type,
    price,
    userId,
  } = req.body;
  const count = await Playlist.count({ id: id });
  const playlist = await Playlist.create({
    _id: new mongoose.Types.ObjectId(),
    id,
    title,
    artist,
    format,
    genre,
    img_src,
    src,
    type,
    price,
    count: count,
    user: userId,
  });
  const user = await User.findById(userId);
  user.playlists.push(playlist);

  await user.save(async (err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(user);
      console.log(await User.findOne({}).populate("playlists"));

      console.log("Total count :", count);
      // res.send({ message: "Total count :", count });
    }
  });
});

app.get("/main", async (req, res) => {
  console.log("request main: ", req.query);
  // console.log("request userId: ", item);

  Playlist.find({}).exec((err, playlists) => {
    res.status(200).send(playlists);

    console.log("request main: ", `new ObjectId("${req.query.answer}")`);
  });
});

app.use((err, req, res, next) => {
  if (err.client) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(500).send({ error: err });
  }
});

app.listen(process.env.PORT, () => {
  console.info(`App listening on http://localhost:${process.env.PORT}`);
});
