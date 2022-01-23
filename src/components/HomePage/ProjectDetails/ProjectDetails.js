import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();
  return (
    <div>
      hellow {projectId}
    </div>
  )
}

export default ProjectDetails
