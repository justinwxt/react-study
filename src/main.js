import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/a.css'
import './css/b.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="container">
            hello react
        </div>
    }
}

ReactDOM.render(<TodoList />, document.getElementById('root'))