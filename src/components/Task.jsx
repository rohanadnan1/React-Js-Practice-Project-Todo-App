import React from 'react'

const Task = ({title, description, deleteTask, index}) => {

  return (
 <div className='task-div'>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    <button id='minus-task' onClick={() => deleteTask(index)}>-</button>
 </div>
  )
}

export default Task