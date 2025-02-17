import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project W' },
    { id: 2, name: 'Project E' },
    { id: 3, name: 'Project S' },
    { id: 4, name: 'Project A' },
  ]);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortOrder = queryParams.get('sort') || 'asc'; 
  useEffect(() => {
    const sortedProjects = [...projects].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setProjects(sortedProjects);
  }, [sortOrder]);

  return (
    <div>
      <h2>My Projects</h2>
      <div>
        <Link to="/projects?sort=asc">Sort Ascending</Link> | 
        <Link to="/projects?sort=desc">Sort Descending</Link>
      </div>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
