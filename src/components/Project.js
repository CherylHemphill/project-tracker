import React, { useState } from 'react';
import ProjectForm from './ProjectForm';

function Project(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.project);

  const submitUpdate = (value) => {
    props.editProjectItem(edit.id, value);
    setEdit({ id: null, value: '', eagerness: '' });
  };

  if (edit.id) {
    return <ProjectForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.project.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `project-row complete ${item.eagerness}`
          : `project-row ${item.eagerness}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeProjectItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        <p onClick={() => props.removeProjectItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Project;
