require("./db/mongoose"); // insure mongoose run in backend

const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// a setup of maintanance middleware
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down, checl back soon!");
// });

app.use(express.json()); // to receive json data
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server up on port ${port}`));
