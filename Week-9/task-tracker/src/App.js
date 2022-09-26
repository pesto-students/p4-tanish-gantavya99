import { useState } from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from './AddTask';
function App() {
  const [showAddTask,setShowAddTask]=useState(false); 
 const [tasks, setTasks]=useState([
  {
    id:1,
    text:`Thanks for using this Task Tracker!`,
    day:`(This is a demo task!)`,
    reminder:true,
},

 ])
 const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1;
  const newTask={id, ...task}
  setTasks([...tasks,newTask])
 }
      const deleteTask=(id)=>{
        console.log('Task Deleted')
        setTasks(tasks.filter((task)=>task.id!==id))
      }
      // const toggleReminder=(id)=>{
      //   console.log(id);
      // }
      const toggleReminder=(id)=>{
        setTasks(tasks.map((task)=>
        task.id===id?
        {...task,reminder:!task.reminder}:task))
        console.log(`${id} is the ID`);
      }
  return (
    <div className="App">
    
     <Header onAdd={()=>setShowAddTask(!showAddTask)} 
     showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length>0?<Tasks tasks ={tasks} 
     onDelete={deleteTask} onToggle={toggleReminder}/>:'No tasks Added'}
     
    </div>
  );
}

export default App