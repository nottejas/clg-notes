import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchedProject = { id, name: `Project ${id}`, description: `Details of project ${id}.` };
    setProject(fetchedProject);
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
