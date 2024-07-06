import React, {useState} from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const AddCandidate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valUsername, setValUsername] = useState("");
  const [valPassword, setValPassword] = useState("");
  const [candidate, setCandidate] = useState("");
  const navigate = useNavigate();

  const checkPasswordAndSave = async (e) => {
    e.preventDefault();
    var errCount = 0;
    setValUsername(""); setValPassword("");

    if (username.length < 1) {
      setValUsername("Username can't be empty or blank!");
      errCount += 1;
    }

    if (password.length < 1) {
      setValPassword("Password can't be empty or blank!");
      errCount += 1;
    }

    if (errCount != 0) {
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/auth/login/${username}/${password}`);
    } catch (error) {
      setValPassword("User doesn't exist or Invalid Password!");
      errCount += 1;
    }

    if (errCount != 0) {
      return;
    }
    navigate("/submit-team");
  }

  return (
    <div className="columns is-clipped">
      <div className="column is-left is-one-quarter mt-5 ml-5 mr-3 is-clipped">
        <h1 className="is-centered is-size-1 has-text-centered has-text-weight-light pb-5">Login{' >'}</h1>
        <form onSubmit={checkPasswordAndSave} className="mt-0">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input type="text" className="input" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username" />
            </div>
              <label className="label has-text-danger">{valUsername}</label>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>
            <label className="label has-text-danger">{valPassword}</label>
          <div className="field mt-5">
            <Link to={`../register`} className="button is-danger ml-1 is-pulled-left">Register</Link>
            <button type="submit" className="button is-success is-pulled-right">Login</button>
          </div>
        </form>
      </div>
      <figure class="image is-fullwidth is-clipped">
        <img src="https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/5QWA32KCBWBHGIOPOVD5C6WMBY.jpg" className=" is-clipped"/>
      </figure>
    </div>
  )
}

export default AddCandidate
