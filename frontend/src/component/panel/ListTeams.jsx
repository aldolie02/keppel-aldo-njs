import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const TeamsList = () => {
const [teams, setTeams] = useState([]);

useEffect(()=>{
    getTeams();
},[]);

const getTeams = async () =>{
    const response = await axios.get('http://localhost:5000/teams');
    setTeams(response.data);
}

const deleteTeams = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/teams/${id}`);
        getTeams();
    } catch (error) {
        alert(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-four-fifths">
        <h1 className="is-centered is-size-1 has-text-centered has-text-weight-light pb-5">Teams{' >'}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Team Name</th>
                        <th>Captain</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Member</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((teams, index) => (
                            <tr key={teams.id}>
                            <td id="idno">{teams.id}</td>
                            <td>{teams.teamName}</td>
                            <td>{teams.captainName}</td>
                            <td>{teams.captainGender}</td>
                            <td>{teams.captainPhone}</td>
                            <td>{teams.memberName}</td>
                            <td>{teams.memberGender}</td>
                            <td>{teams.memberPhone}</td>
                            <td className="has-text-right">
                                <Link onClick={()=> deleteTeams(teams.id)} className="button is-small ml-2 is-danger">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="column">
                <Link to={`../panel/candidates`} className="button is-info is-pulled-left">❮ Candidates</Link>
            </div>
    </div>
</div>
  )
}

export default TeamsList
