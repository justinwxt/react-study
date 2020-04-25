import React from 'react'
import ReactDOM from 'react-dom'

import {createStore,applyMiddleware} from 'redux'
import  {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {todos} from './reducer/index'
import TodoList from './todolist'
const store = createStore(todos,applyMiddleware(thunk))



let ReTodolist = (<Provider store={store}>
    <TodoList />
</Provider>)

ReactDOM.render(ReTodolist, document.getElementById('root'))