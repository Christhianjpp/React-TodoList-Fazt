import React, { Component } from 'react'

class Task extends Component {

    style() {
        return {
            background: 'red',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { task } = this.props
        return (
            <div>
                <p style={this.style()}>
                    {task.title} -
                    {task.description} -
                    {task.id} --
                    <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
                    <button style={btnX} onClick={this.props.deleteTask.bind(this, task.id)} >x</button>
                </p>
            </div>
        )
    }
}

const btnX = {
    background: 'red',
    fontSize: '20px',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '20%',
    border: 'none'

}
export default Task