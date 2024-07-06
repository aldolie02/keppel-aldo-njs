import express from "express";
import {getCandidates, getCandidateById, createCandidate, updateCandidate, deleteCandidate, loginCandidate} from "../controller/CandidateController.js";

const router = express.Router();

router.get('/candidates', getCandidates);
router.get('/candidates/:id', getCandidateById);
router.post('/candidates/create', createCandidate);
router.put('/candidates/:id', updateCandidate);
router.delete('/candidates/:id', deleteCandidate);

router.post('/auth/login/:username/:password', loginCandidate);

export default router;
