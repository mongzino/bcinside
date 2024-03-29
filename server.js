const express = require("express");
const MethodOverride = require("method-override");
const cookieParser = require("cookie-parser");
// const session = require("express-session");
const mongoStore = require("connect-mongo");
const dbConnect = require("./config/dbConnect");
const postRouter = require("./routers/postRouter");
const rootRouter = require("./routers/rootRouter");
const isLoggedIn = require("./middlewares/isLoggedIn");

const app = express();
const port = 3000;
const dayTime = 1000 * 3600 * 24;
dbConnect();

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/views");

app.use(express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(MethodOverride("_method"));
app.use(cookieParser());

app.use(isLoggedIn);
app.use("/users", require("./routers/userRouter"));
app.use("/", rootRouter);
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중 🚀`);
});
