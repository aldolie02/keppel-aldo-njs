import Team from "../model/TeamModel.js";

export const getTeam = async(req, res) => {
    try {
        const response = await News.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTeamById = async(req, res) => {
    try {
        const response = await Team.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTeam = async(req, res) => {
    try {
        await Team.create(req.body);
        res.status(201).json({
            message: "Team Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTeam = async(req, res) => {
    try {
        await Team.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({
            message: "Team Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTeam = async(req, res) => {
    try {
        await Team.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({
            message: "Team Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
