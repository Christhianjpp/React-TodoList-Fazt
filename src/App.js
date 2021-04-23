import React, { Component } from 'react'

import tasks from './sample/tasks.json'
import Tasks from './componets/Tasks.js'

import TaskForm from './componets/taskForm.js'
import Posts from './componets/Post.js'

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

    addTask = (title, description) => {
        const newTask = {
            title,
            description,
            id: this.state.tasks.length

        }
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }
    render() {
        return (
            <div>
                <TaskForm addTask={this.addTask} />
                <Tasks tasks={this.state.tasks}
                    checkDone={this.checkDone}
                    deleteTask={this.deleteTask}
                />
                <Posts />
            </div>
        )
    }
}

export default App