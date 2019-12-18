import React, { useState, useEffect } from 'react';
import MemberApplication from './Components/Form'
import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname
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
            <h2>{member.fname} {member.lname}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
