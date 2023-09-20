import { useState, useReducer } from 'react';
import Modal from '../modal';
import { reducer } from '../Reducer/Reducer';

const defaultState = {
    taskList: [],
    isModalOpen: false,
    modalContent: ''
}

const TaskManager = () => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setdueDate] = useState('');
    // const [taskList, setTaskList] = useState([]);
    const [state, dispatch] = useReducer(reducer, defaultState);
    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskName, dueDate) {
            let newTask = { id: new Date().getTime().toString(), taskName, dueDate };
            dispatch({ type: 'ADD_TASK', payload: newTask })
            setTaskName('')
            setdueDate('')
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }

    //<i class="fa-solid fa-trash-can fa-shake"></i>

    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
            <main className='flex justify-center items-center min-h-[100vh] p-4 font-roboto'>
                <div className="w-[600px] shadow-3xl rounded border-2 p-2 border-black">
                    <div className='mb-4'>
                        <h1 className='text-4xl text-center'>Task Manager</h1>
                    </div>
                    <form action="" className='py-4' onSubmit={handleSubmit}>
                        <div className='w-full mb-2'>
                            <input
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                placeholder='Enter task name here' className='w-full p-3 rounded outline-none placeholder:text-black bg-form ' />
                        </div>

                        <div className='w-full mb-2'>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setdueDate(e.target.value)}
                                placeholder='Enter Task due date' className='w-full p-3 rounded bg-form outline-none' />
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-blue-700 transition duration-100 hover:bg-blue-800 px-4 py-2 rounded-md text-white'>Add Task</button>
                        </div>
                    </form>

                    <hr className='opacity-100 bg-form h-[2px]' />


                    {state.taskList.length === 0 ? <p className='text-red-600 font-semibold text-xl py-1'>No tasks found !!!</p> : <div className='py-4'>
                        {state.taskList && state.taskList.map((task) => (
                            <div key={task.id} className='py-2'>
                                <div className='task'>
                                    <div>
                                        <h2 className='text-2xl font-semibold'>{task.taskName.toUpperCase()}</h2>
                                        <p><i className="fa-regular fa-clock fa-beat-fade me-1 text-red-600"></i> Due : {task.dueDate}</p>
                                    </div>

                                    <i className="fa-solid fa-trash-can text-2xl text-red-600 cursor-pointer" onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}></i>

                                </div>
                                <hr className='opacity-100 bg-form h-[2px]' />
                            </div>

                        ))}
                    </div>
                    }

                </div>
            </main>
        </>
    )
}
export default TaskManager