import React, { useState, useEffect } from 'react';

const MemberApplication = props => {

  const [member, setMember] = useState({
    fname: "",
    lname: ""
  })

  const handleChanges = e => {
    setMember({...member, [e.target.name]: e.target.value});
    console.log(e.target.name);
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ fname: "", lname: "" });
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fname">First Name</label>
      <input
        id="fname"
        type="text"
        placeholder="First Name"
        onChange={handleChanges}
        name="fname"
        value={member.fname}
      />
      <label htmlFor="lname">Last Name</label>
      <input
        id="lname"
        type="text"
        placeholder="Last Name"
        name="lname"
        onChange={handleChanges}
        value={member.lname}
      />
      <button type="submit">Submit Application</button>
    </form>
  );

}

export default MemberApplication;