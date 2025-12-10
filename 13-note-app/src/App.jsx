import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setdetails("");
  };

  const deleteNote = (idx)=>{
    const copyTask = [...task]
    
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  // };
  return (
    <div className="h-screen lg:flex  overflow-auto bg-amber-100 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col  items-start gap-4 lg:w-1/2 w-full  p-10"
      >
        <h1 className="text-gray-800 text-4xl font-bold">Add Notes</h1>
        <input
          name="title"
          type="text"
          className="px-5 py-2 w-full border-2 font-medium bg-green-200 outline-none rounded"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          className="px-5 w-full h-32 py-2 font-medium bg-green-200 outline-none border-2 rounded"
          placeholder="Enter Details here"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
        <button className="bg-blue-200 w-full active:scale-95 font-medium outline-none px-5 py-2 border-2 rounded cursor-pointer hover:shadow-[4px_4px_2px_black] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
          Add Notes
        </button>
      </form>

      <div className="bg-gray-800 h-full lg:w-1/2 p-5 overflow-hidden">
        <h1 className="text-amber-100 text-4xl mb-5 font-bold text-center">
          Recent Notes
        </h1>
        <div
          id="NoteDiv"
          className="flex flex-wrap gap-5 pt-5 pb-20 justify-center h-full overflow-y-scroll"
        >
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40  bg-cover rounded-2xl  py-8 px-4  text-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s')]"
              >
                <div>
                  <h3 className="font-bold text-lg mt-1 leading-tight">
                    {elem.title}
                  </h3>
                  <p className="leading-tight text-xs mt-4 font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
