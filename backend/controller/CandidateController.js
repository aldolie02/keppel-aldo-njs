import Candidate from "../model/CandidateModel.js";
import bcrypt from "bcrypt";

export const getCandidates = async(req, res) => {
    try {
        const response = await Candidate.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getCandidateById = async(req, res) => {
    try {
        const response = await Candidate.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createCandidate = async(req, res) => {
    try {
        await Candidate.create(req.body);
        res.status(201).json({
            message: "Candidate Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCandidate = async(req, res) => {
    try {
        await Candidate.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({
            message: "Candidate Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCandidate = async(req, res) => {
    try {
        await Candidate.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({
            message: "Candidate Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}


export const loginCandidate = async(req, res) => {
  let response = null;
  try {
      response = await Candidate.findOne({
          where:{
              username: req.params.username
          }
      });
  } catch (error) {
      console.log(error.message);
  }

  if (response === null) {
    return res.status(404).json({ msg: "User not found" })
  } else {
    bcrypt.compare(req.params.password, response.password, (err, data) => {
              //if both match than you can do anything
              if (data) {
                console.log("Login Success");
                  return res.status(200).json({ msg: "Login success" })
              } else {
                console.log("Login Failed");
                return res.status(401).json({ msg: "Password invalid" })
              }
    })
  }
}
