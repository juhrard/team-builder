import React, { useState, useEffect } from 'react';
import MemberApplication from './Components/Form'
import './App.css';

function App() {

  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();
  console.log(members);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Highly Sought After Team Application</h1>
      <MemberApplication addNewMember={addNewMember}/>
      <div>
        {members.map(member => (
          <div className="member" key={member.id}>
            <h2>{member.fname}</h2>
            <p>{member.email}</p>
            <h3>{member.role}</h3>
            <button onClick={() => setMemberToEdit(member)}>Edit</button>            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
