import express from "express";
import {getTeam, getTeamById, createTeam, updateTeam, deleteTeam} from "../controller/TeamController.js";

const router = express.Router();

router.get('/teams', getTeam);
router.get('/teams/:id', getTeamById);
router.post('/teams/create', createTeam);
router.put('/teams/:id', updateTeam);
router.delete('/teams/:id', deleteTeam);

export default router;
