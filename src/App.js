import React, { Component } from 'react'

import tasks from './sample/tasks.json'
import Tasks from './componets/Tasks.js'



class App extends Component {
    state = {
        tasks: tasks
    }


    checkDone = (id) => {
        const newTask = this.state.tasks.map(tasks => {
            if (tasks.id === id) {
                tasks.done = !tasks.done
            }
            return tasks
        })
        this.setState({ tasks: newTask })
    }

    deleteTask = (id) => {
        const newTask = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks: newTask })
    }


    render() {
        return (
            <div>
                <Tasks tasks={this.state.tasks}
                    checkDone={this.checkDone}
                    deleteTask={this.deleteTask}
                />
            </div>
        )
    }
}

export default App