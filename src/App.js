import React,{ useState } from 'react';
import './App.css'
function App(){
  //if we want to update "task" when we need to call "setTask"
  ///ex - setTask(abcd)
const [task,setTask]=useState("")
const [alltasks,setAllTasks]=useState([])
  return (
    <center>
    <div id='container'>


      {/* Taking Input --> onchange is called every time when the input box value changes */}
      <input id='inputbox' type="text" placeholder='Enter Your Task' onChange={(element)=>{
        setTask(element.target.value)
      }}/>

    {/* onclik calls a function to add the todo into the all tasks array */}
    <button id='add' onClick={()=>{
      // if task length greater than zero 
      if(task.length>0){
      // spreading the all taska array and adding the task to the all tasks array
      setAllTasks([...alltasks,task])
      }
    }}>Add ToDo</button>
  {/* mapping the data */}
    {
      // item is the element of allTasks , index=0
      alltasks.map((item,index)=>{
    
        return(
          <div>
            <h3>{item}</h3>
            {/* delete button */}
            <button id='delete' onClick={()=>{
              // alltasks = [a,b,c,d]
              //storeData = [...alltasks] =[a,b,c,d]
              let storeData=[...alltasks]
              //deletng the element by using index
              storeData.splice(index,1); 
              //storeData=[a,c,d]
              setAllTasks(storeData)
              //setAlltasks([a,c,d])
            }}>Delete</button>
             
            {/* button for editing the particular todo */}
            <button id='edit' onClick={()=>{
              // newArr=[a,b,d]
              let newArr=[...alltasks];
              //prompt for taking input and storing it in editvalue--ex i will enter C
              let editvalue = prompt("enter the edited todo")
              //newArr[2]=c //previously it was d
              
              newArr[index]=editvalue
              //newArr=[a,b,c]
              //updating all tasks using set all tasks
              setAllTasks(newArr)

            }}>EDIT</button>
          </div>
        )
      })
    }
    </div>
    </center>
  )
}

export default App
