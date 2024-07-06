import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const CandidateList = () => {
const [candidates, setCandidate] = useState([]);

useEffect(()=>{
    getCandidates();
},[]);

const getCandidates = async () =>{
    const response = await axios.get('http://localhost:5000/candidates');
    setCandidate(response.data);
}

const deleteCandidate = async (id) =>{
    try {
        await axios.delete(`http://localhost:5000/candidates/${id}`);
        getCandidates();
    } catch (error) {
        alert(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-four-fifths">
        <h1 className="is-centered is-size-1 has-text-centered has-text-weight-light pb-5">Candidate{' >'}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate, index) => (
                            <tr key={candidate.id}>
                            <td id="idno">{candidate.id}</td>
                            <td>{candidate.username}</td>
                            <td>{candidate.name}</td>
                            <td>{candidate.gender}</td>
                            <td>{candidate.phone}</td>
                            <td className="has-text-right">
                                <Link onClick={()=> deleteCandidate(candidate.id)} className="button is-small ml-2 is-danger">Hapus</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="column">
                <Link to={`../panel/teams`} className="button is-info is-pulled-right">Teams ❯</Link>
            </div>
            </div>
            </div>
  )
}

export default CandidateList
