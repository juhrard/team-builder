import React, { useState, useEffect } from 'react';

const MemberApplication = props => {

  const [member, setMember] = useState({
    fname: "",
    email: "",
    role: ""
  })

  const handleChanges = e => {
    setMember({...member, [e.target.name]: e.target.value});
    console.log(e.target.name);
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ fname: "", email: "", role: "" });
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fname">First Name: </label>
      <input
        id="fname"
        type="text"
        placeholder="First Name"
        onChange={handleChanges}
        name="fname"
        value={member.fname}
      />
      <label htmlFor="email"> Email: </label>
      <input
        id="email"
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role"> Role: </label>
      <input
        id="role"
        type="text"
        placeholder="Role"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />
      <button type="submit">Submit Application</button>
    </form>
  );

}

export default MemberApplication;