export const reducer = (state, action) => {
    if (action.type === 'ADD_TASK') {
        console.log(state, action);
        const updatedTaskList = [...state.taskList, action.payload];

        return {
            ...state,
            taskList: updatedTaskList,
            isModalOpen: true,
            modalContent: 'New Task Added Successfully'
        }
    }

    if(action.type === 'NO_VALUE'){
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please enter a value'
        }
    }

    if(action.type === 'CLOSE_MODAL'){
        return {
            ...state,
            isModalOpen: false,
            modalContent: ''
        }
    }

    if(action.type === 'REMOVE_TASK'){
        let updatedTaskList = state.taskList.filter((task) => task.id !== action.payload)
        return {
            ...state,
            taskList: updatedTaskList,
            isModalOpen: true,
            modalContent: 'Task Deleted Successfully'
        }
    }
    throw new Error('No matching action type');
}