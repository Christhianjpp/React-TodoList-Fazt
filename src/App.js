import React, { Component } from 'react'

import tasks from './sample/tasks.json'
import Tasks from './componets/Tasks.js'



class App extends Component {
    state = {
        tasks: tasks
    }

    render() {
        return (
            <div>
                <Tasks tasks={this.state.tasks} />
            </div>
        )
    }
}

export default App