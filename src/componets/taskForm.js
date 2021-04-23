import React, { Component } from 'react'

class taskForm extends Component {
    state = {
        title: "",
        description: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.title, this.state.description)
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Write a Task"
                        onChange={this.onChange}
                        name="title"
                    />
                    <br />
                    <br />
                    <textarea placeholder="Write a Description"
                        onChange={this.onChange}
                        name="description"
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default taskForm