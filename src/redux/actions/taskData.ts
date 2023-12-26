import dispatchType from '../constants';

export const storeTaskLists = data => dispatch => {
    dispatch({
        type: dispatchType.storeTaskLists,
        payload: data
    })
}

export const updateTaskLists = data => dispatch => {
    dispatch({
        type: dispatchType.updateTaskLists,
        payload: data
    })
}



