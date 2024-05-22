import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json({limit: "16kb"}));

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));  


app.use(express.urlencoded({extended: true , limit: "16kb"}));

app.use(express.static("public"));

app.use(cookieParser());


//Router
import userRouter from "./routes/user.route.js"
import videoRouter from "./routes/video.route.js"
import subcriptionRouter from "./routes/subscription.route.js"
import commentRouter from "./routes/comment.route.js"
import likeRouter from "./routes/like.route.js"
import healthCheckRouter from "./routes/healthcheck.route.js"
import tweetRouter from "./routes/tweet.route.js"
import playlistRouter from "./routes/playlist.route.js"
import dashboardRouter from "./routes/dashboard.route.js"


app.use("/api/v1/user",userRouter);
app.use("/api/v1/video",videoRouter);
app.use("/api/v1/subcription",subcriptionRouter);
app.use("/api/v1/comment",commentRouter);
app.use("/api/v1/like",likeRouter);
app.use("/api/v1/health",healthCheckRouter);
app.use("/api/v1/tweet",tweetRouter);
app.use("/api/v1/playlist",playlistRouter);
app.use("/api/v1/dashboard",dashboardRouter);



export {app};