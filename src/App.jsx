import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [tasks, setTasks] = useState([]); // State to store all tasks

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title && data.description) {
      setTasks([...tasks, data]); // Add the new task to the tasks array
      setData({ title: "", description: "" }); // Clear the input fields
      toast.success("Task added successfully."); // Show a success toast message
    } else {
      alert("Please fill in both the title and description fields.");
    }
  };
  const deleteHandler =async (index) => {
    if(confirm("Are You Sure to delete")){
      const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
      setTasks(updatedTasks); // Update the tasks state
      toast.success("Task deleted successfully."); // Show a success toast message
    }
    
    // Filter out the task at the given index
  
    // Show a success toast message
  };

  return (
    <div className='flex w-[50%] md:flex flex-col'>
      <h1 className='text-zinc-600 font-semibold ml-12 mt-4'>Add Task</h1>
      <input
        type="text"
        name="title"
        value={data.title}
        className='sm:h-10 md:w-50 md:h-10 md:w-80 ml-12 border-zinc-700'
        placeholder='Enter Task Title'
        onChange={handleChange}
      />
      <h1 className='text-zinc-600 font-semibold ml-12 mt-4'>Add Description</h1>
      <textarea
        type="text"
        name="description"
        value={data.description}
        className='sm:h-20 sm:w-50 md:h-20 md:w-80 ml-12 border-zinc-700'
        placeholder='Enter Task Description'
        onChange={handleChange}
      />
      <br />
      <button
        onClick={handleSubmit}
        className='md:w-[15%] bg-blue-600 hover:bg-blue-700 hover:text-xl text-white font-bold py-2 px-4 rounded ml-12 mt-4'
      >
        Add Task
      </button>
      <ToastContainer />

      <div className='w-[80%] sm:h-50 sm:w-[88vw]'>
      <h1 className='text-red-500 font-semibold ml-12 mt-4 hover:text-5xl hover:text-red-600'>Your Tasks:</h1>
        {tasks.length > 0 ? (
          
          <ul className='ml-10 mt-4  '>
            {tasks.map((task, index) => (
              <li key={index} className=' border p-2 mb-2 rounded hover:bg-zinc-200 font-semibold hover:text-xl flex flex-col md:flex-row justify-between'>
              <div >
              <h2 className='font-bold'>{task.title}</h2>
              <p className='sm:w-50 md:w-80 '>{task.description}</p>
              </div>
               <div>
               <button onClick={()=>deleteHandler(index)}> <MdDelete className='text-red-500'/></button>
               <ToastContainer/>
               </div>

              </li>
            ))}
          </ul>
        ) : (
          <p className='ml-12'>No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
