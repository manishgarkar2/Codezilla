import dispatchTypes from '../constants';
let initialState = {
    taskList: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case dispatchTypes.storeTaskLists:
            return { ...state, taskList: action.payload };
        case dispatchTypes.updateTaskLists:
            return { ...state, taskList:state.taskList.map((task) =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            )};
        default:
            return state;
    }
}

