import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
