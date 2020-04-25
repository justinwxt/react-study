export  function todos(state = [],action) {
    switch (action.type){
        case 'add':
            return state.concat(action.data)
        case 'del':
           let index = state.findIndex((todo)=>todo.id === action.data)
           let newState = [...state]
            newState.splice(index,1)
            return newState
        case 'turn':
            return state.map((todo)=>{
                if(todo.id === action.data){
                    todo.done = !todo.done
                }
                return todo
            })
        case 'async':
            console.log('waiting seconds')
            return state
        default:
            return state
    }
}