import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import  {Provider} from 'react-redux'
import {todos} from './reducer/index'
import TodoList from './todolist'
const store = createStore(todos)



let ReTodolist = (<Provider store={store}>
    <TodoList />
</Provider>)

ReactDOM.render(ReTodolist, document.getElementById('root'))