import React from 'react'
import Task from './Task'

const Main = () => {


  let initialArr = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []

  const [task, setTask] = React.useState(initialArr)
  const [title, setTitle] = React.useState("")
  const [ description, setDescription] = React.useState("")
    

  let addtask = (e, index) => {
      e.preventDefault();
      setTask([...task, {title, description}])
      setDescription("")
      setTitle("")
  }

  let deleteTask = (index) => {
    let filteredArr = task.filter((elem, i) => {
      return i !== index
  })
    setTask(filteredArr);
  }

  React.useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])


  return (
   <>
   <div className='container'>
        <h1>Your Daily Stuff</h1>
        <form>
            <input type="text" placeholder='Enter Task' value={title} onChange={(elem) => setTitle(elem.target.value)} />
            <input type="textarea" id='task-des' placeholder='Enter Task Description' value={description} onChange={(elem) => setDescription(elem.target.value)}  />
            <button id='task-btn' type='submit' onClick={addtask} >Add Task</button>
        </form>
        {
          task.map((element, index)=>(
            <Task key={index} title ={element.title} description={element.description} index ={index} deleteTask={deleteTask}/>
          ))
        }
     </div>
   </>
  )
}

export default Main