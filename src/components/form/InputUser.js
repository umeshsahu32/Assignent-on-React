import React, { Fragment, useState } from "react";
import "./InputUser.css";

const UserItem = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const [nameIsValid, setNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);
  const [genderIsValid, setGenderIsValid] = useState(true);
  const [dobIsValid, setDobIsValid] = useState(true);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    if (age.trim() === "") {
      setAgeIsValid(false);
      return;
    }

    if (gender.trim() === "") {
      setGenderIsValid(false);
      return;
    }

    if (dob.trim() === "") {
      setDobIsValid(false);
      return;
    }

    const userData = {
      name,
      age,
      dob: new Date(dob),
      gender,
    };

    props.onAddUser(userData);

    console.log(userData);
    setAge("");
    setName("");
    setDob("");
    setGender("");
  };

  return (
    <Fragment>
      <header className="header">
        <h2>Assingment</h2>
      </header>

      <form onSubmit={submitFormHandler} className="box">
        <h2>User Data</h2>
        <div className="inputfield">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {!nameIsValid && <p className="error-text">Please Enter Your Name</p>}

        <div className="inputfield">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        {!ageIsValid && <p className="error-text">Please Enter Your Age</p>}

        <div className="inputfield">
          <label htmlFor="gender">Gender</label>

          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {!genderIsValid && (
          <p className="error-text">Please Select Your Gender</p>
        )}

        <div className="inputfield">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        {!dobIsValid && (
          <p className="error-text">Please Enter Your Date of Birth</p>
        )}
        <div className="action">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default UserItem;
