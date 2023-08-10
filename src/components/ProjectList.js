import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import Project from './Project';

function ProjectList() {
  const [project, setProject] = useState([]);

  
  const addProjectItem = (item) => {
    console.log(
      '🚀 ~ file: ProjectList.js ~ line 10 ~ addProjectItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new Project list item to the existing array of objects
    const newProject = [item, ...project];
    console.log(newProject);

    // Call setProject to update state with our new set of Project list items
    setProject(newProject);
  };

  // Function to mark Project list item as complete
  const completeProjectItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedProject = project.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedProject);
    setProject(updatedProject);
  };

  // Function to remove Project list item and update state
  const removeProjectItem = (id) => {
    const updatedProject = [...project].filter((item) => item.id !== id);

    setProject(updatedProject);
  };

  // Function to edit the Project list item
  const editProjectItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

  
    setProject((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your project list?</h1>
      <ProjectForm onSubmit={addProjectItem} />
      <Project
        project={project}
        completeProjectItem={completeProjectItem}
        removeProjectItem={removeProjectItem}
        editProjectItem={editProjectItem}
      ></Project>
    </div>
  );
}

export default ProjectList;
