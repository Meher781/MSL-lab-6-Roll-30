import { useState } from "react"

export default function Todolist() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    // console.log(task);






    const addTask = () => {

        if(task.trim()==="") return;
        console.log("added");

        const updatedTasks = [...tasks, {
            id:Date.now(),
            text: task,
            completed: false

        }];
        console.log(updatedTasks);
        setTasks(updatedTasks);
        setTask("");

    };
    const toggleTask = (id)=>{
        setTasks(
        tasks.map((item)=> item.id===id? {...item, completed: !item.completed} : item)
        );

    };
    // console.log(tasks);

    const deleteTask = (id)=>{
        setTasks(tasks.filter((item)=> item.id!==id))

    }


    return (
        <>
            <div className="min-h-screen bg-gray-100 mb-2 flex justify-center items-center p-4">
                <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"><div>
                    <h1 className="text-2xl font-bold text-gray-700 mb-2">My Todo List</h1>
                    <p className="text-gray-500 mb-6">Keep Track Your Daily Tasks </p>
                </div>
                    <div className="flex gap-2 mb-5">
                        <input type="text" name="" id="" value={task} placeholder="Enter a new Task.."
                            onChange={(e) => { setTask(e.target.value) }}
                            className="border border-gray-300 rounded-full px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
                        <button onClick={addTask} className="bg-slate-600 text-white px-6 py-2 rounded-full hover:bg-slate-800">Add</button>
                    </div>
                      <hr className="my-3 text-gray-300"></hr>
                <ul>
                    {
                        tasks.map((item) => (
                            <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg" key={item.id}>
                                <input type="checkbox" name="" id="" checked={item.completed} onChange={()=>toggleTask(item.id)} className="h-4 w-4 accent-blue-600" />
                                <span className={`flex-1  ${item.completed?"line-through text-gray-400" : "text-gray-700"}`} >{item.text}</span>
                                <button onClick={()=>deleteTask(item.id)} className="text-red-500">Delete</button>

                            </li>


                        ))
                    }

                </ul>
                </div>
              

            </div>




        </>
    )

}