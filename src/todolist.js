import React, { Component } from 'react'
import { todoActionCreate } from './actions/index'
import './css/list.css'

import { connect } from 'react-redux'



class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inpVal:''
        }
    }
    render() {
        let { todos, add, del, turn } = this.props
        let {inpVal} = this.state
        return <div className="container">
            <div className="list-container">
                <h3 className="title">To do list</h3>
                <div className="input-container">
                    <input className="inp" value={inpVal} onChange={(e)=>{this.setState({inpVal:e.target.value})} } placeholder="add your plan" />
                    <div className="add" onClick={()=>{add(inpVal);this.setState({inpVal:''})}}>add</div>
                </div>
                <div className="list">
                    {todos.map((todo) => {
                        return (
                            <div className="list-item" key={todo.id}>
                                <div onClick={()=>{turn(todo.id)}}
                                className={todo.done?"item-content done":"item-content"} >{todo.content}</div>
                                <div className="del" onClick={()=>{del(todo.id)}}>del</div>
                            </div>
                        )
                    })}


                </div>
            </div>


        </div>
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (inpVal) => {
            let data = {content:inpVal,id:+new Date(),done:false}
            dispatch(todoActionCreate('add', data))
        },
        del: (id) => {
            dispatch(todoActionCreate('del', id))
        },
        turn: (id) => {
            dispatch(todoActionCreate('turn', id))
        }
    }
}
const mapStateToProps = (state) => {
    return { todos: state }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


