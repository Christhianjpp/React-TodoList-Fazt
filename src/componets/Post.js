import React, { Component } from 'react'


class Post extends Component {

    state = {
        posts: []
    }


    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.cypress.io/todos')
        const data = await res.json()
        this.setState({ posts: data })

    }

    render() {
        return (
            this.state.posts.map(post => <p key={post.id}>{post.userId} - {post.title}</p>)
        )
    }
}
export default Post