import React, { useState } from 'react';

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
    } else {
      alert("Please fill in both the title and description.");
    }
  };

  return (
    <div className='md:flex flex-col'>
      <h1 className='text-zinc-600 font-semibold ml-12 mt-4'>Add Task</h1>
      <input
        type="text"
        name="title"
        value={data.title}
        className='h-10 w-80 ml-12 border-zinc-700'
        placeholder='Enter Task Title'
        onChange={handleChange}
      />
      <h1 className='text-zinc-600 font-semibold ml-12 mt-4'>Add Description</h1>
      <textarea
        type="text"
        name="description"
        value={data.description}
        className='h-20 w-80 ml-12 border-zinc-700'
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

      <div className='w-[80%]'>
      <h1 className='text-red-500 font-semibold ml-12 mt-4 hover:text-5xl hover:text-red-600'>Your Tasks:</h1>
        {tasks.length > 0 ? (
          
          <ul className='ml-10 mt-4  '>
            {tasks.map((task, index) => (
              <li key={index} className='border p-2 mb-2 rounded hover:bg-zinc-200 font-semibold hover:text-xl flex flex-col justify-between'>
              <div >
              <h2 className='font-bold'>{task.title}</h2>
              <p className='w-80'>{task.description}</p>
              </div>
               <div> <button>delete</button></div>

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
