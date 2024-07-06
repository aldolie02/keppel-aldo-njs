import React, {useState} from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const AddCandidate = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Man");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [valUsername, setValUsername] = useState("");
  const [valName, setValName] = useState("");
  const [valGender, setValGender] = useState("");
  const [valPhone, setValPhone] = useState("");
  const [valPassword, setValPassword] = useState("");
  const [valKonfirmasiPassword, setValKonfirmasiPassword] = useState("");
  const navigate = useNavigate();

  const saveCandidate = async () => {
    try {
        await axios.post('http://localhost:5000/candidates/create', {
            username,
            name,
            gender,
            phone,
            password
        });
    } catch (error) {
        alert(error);
    }
  }

  const checkPasswordAndSave = async (e) => {
    e.preventDefault();
    var errCount = 0;
    setValUsername(""); setValName(""); setValGender(""); setValGender(""); setValPhone(""); setValPassword(""); setValKonfirmasiPassword("");

    if (username.length < 6 || username.length > 15) {
      setValUsername("Username requires a minimum of 6 characters and maximum 15 characters!");
      errCount += 1;
    }
    if (name.length < 1 || name.length > 100) {
      setValName("Name can only consists of maximum 100 characters!");
      errCount += 1;
    }
    if (gender !== "Man" && gender !== "Woman") {
      setValGender("Gender can't be anything but 'Man' or 'Woman'!");
      errCount += 1;
    }
    if (phone.length < 7 || phone.length > 14) {
      setValPhone("Phone Number requires a minimum of 7 digits and maximum 14 digits!");
      errCount += 1;
    }
    if (password.length < 8 || password.length > 16) {
      setValPassword("Password requires a minimum of 8 characters and maximum 16 characters!");
      errCount += 1;
    }
    if (password !== konfirmasiPassword || konfirmasiPassword == "") {
      setValKonfirmasiPassword("Password Confirmation doesn't match!");
      errCount += 1;
    }

    if (errCount != 0) {
      return;
    }

    saveCandidate();
    navigate("/register-success");
  }

  return (
    <div className="columns is-clipped">
      <div className="column is-left is-one-quarter mt-5 ml-5 mr-3 is-clipped">
        <h1 className="is-centered is-size-1 has-text-centered has-text-weight-light pb-5">Register{' >'}</h1>
        <form onSubmit={checkPasswordAndSave} className="mt-0">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input type="text" className="input" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username" />
            </div>
              <label className="label has-text-danger">{valUsername}</label>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" />
            </div>
              <label className="label has-text-danger">{valName}</label>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
            <div className="select is-fullwidth">
              <select type="text" value={gender} onChange={(e)=> setGender(e.target.value)} placeholder="Gender">
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              </select>
            </div>
            </div>
              <label className="label has-text-danger">{valGender}</label>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <input type="text" className="input" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Phone" />
            </div>
              <label className="label has-text-danger">{valPhone}</label>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>
            <label className="label has-text-danger">{valPassword}</label>
          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input type="password" className="input" value={konfirmasiPassword} onChange={(e)=> setKonfirmasiPassword(e.target.value)} placeholder="Password Confirmation" />
            </div>
          </div>
            <label className="label has-text-danger">{valKonfirmasiPassword}</label>
          <div className="field mt-5">
            <Link to={`../login`} className="button is-danger ml-1 is-pulled-left">Login</Link>
            <button type="submit" className="button is-success is-pulled-right">Register</button>
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
