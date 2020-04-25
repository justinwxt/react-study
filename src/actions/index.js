//type  'add'  'del'  'turn'
export function todoActionCreate(type, value) {
    return {
        type,
        data: value
    }
}

export function asyncAdd(content) {
    return (dispatch, getState) => {
        dispatch({ type: 'async' })
        console.log('getState',getState())
        setTimeout(() => {
            dispatch(todoActionCreate('add',{content,id:+new Date(),done:false}))
        }, 5 * 1000)
    }

}