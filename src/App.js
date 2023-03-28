import { useState } from "react";


function App() {

  const [todoList, setTodoList] = useState([]);
  
  const [task, setTask] = useState("");


  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: task,
      completed: false,
    };
    setTodoList([...todoList, newTask]);
    console.log('todoList', todoList)

  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  };

  const isChecked = (event,task) => {

    setTodoList(todoList.map((x)=>{
      if (x.id === task.id){
        if ( event.target.checked ) {
          
          return {...x,completed: true}

        } else {
          return {...x,completed: false}
        }
      }
      else
        return {...x}
    }))
    console.log('todoList', todoList)
  }

  const clearAll = () => {
    setTodoList([]);
  }
  
  return (
    <div className="w-[400px] h-[866px] sm:w-full sm:h-screen bg-task sm:bg-cover flex justify-center items-center">
      <div className="bg-black hidden sm:flex sm:w-full h-screen opacity-70 absolute"></div>
      <div className="absolute w-[370px] sm:w-[600px] h-[700px] bg-gray-300 bg-opacity-70 rounded-[30px] flex flex-col items-center ">
        <h1 className=" text-[50px] font-bold font-todo top-0 ">ToDo App</h1>
        <div className="mt-[20px] flex items-center gap-2 sm:gap-5">
          <input onChange={handleChange} type="text" placeholder='Enter your task...' className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-[20px] shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 w-[270px] sm:w-[400px] h-[40px]"/>
          <button className="bg-cyan-500 bg-opacity-50 w-[70px] h-[40px] text-[20px] p-1 rounded-lg font-bold hover:scale-110 hover:bg-red-400" onClick={addTask}>ADD</button>
        </div>
        <hr class=" w-[300px] sm:w-[400px] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-600" />
        {todoList.map((task) => {
          return( 
            <div className="flex justify-center items-center gap-3">
                <h1 className={`font-semibold text-[20px] sm:text-[27px] my-2 ${task.completed? "bg-green-400" : "bg-slate-300"} rounded-md w-[280px] sm:w-[400px] pl-3 py-1 italic flex items-center`}>
                  <input key={task.id} type="checkbox" onClick={(e)=>{isChecked(e,task)}} className="w-[20px] h-[20px] mr-3" />
                  {task.taskName}
                </h1>
              <button className="bg-gray-700 text-white sm:text-[20px]  font-semibold w-[30px] h-[30px] sm:w-[50px] sm:h-[40px] rounded-full hover:bg-red-600" onClick={() => deleteTask(task.id)}> X </button>
            </div>
          )
        })}
        <button className="bg-slate-700 bg-opacity-50 w-auto h-auto rounded-md font-semibold text-[20px] mt-5 hover:scale-110 hover:bg-red-800 py-1 px-3 text-white" onClick={clearAll}>Clear All</button>
      </div>
      
    </div>
  );
}

export default App;
