import express from "express";
import cors from "cors";
import CandidateRoute from "./route/CandidateRoute.js";
import TeamRoute from "./route/TeamRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CandidateRoute, TeamRoute);

app.listen(5000, ()=> console.log('Server started successfully'));
