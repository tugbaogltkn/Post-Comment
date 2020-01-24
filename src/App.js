import React, {Component} from 'react';
import Posts from './components/posts';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            posts: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((posts) => {
                this.setState({ posts: posts })
                for(let i=0; i<= posts.length; i++)
                {
                    const commentURL = 'https://jsonplaceholder.typicode.com/comments?postId='+ i;
                    fetch(commentURL)
                        .then(res => res.json())
                        .then((comments) => {
                            this.setState({ comments: comments });
                        })
                        .catch(console.log)
                }
            })
            .catch(console.log)
    }
    render() {
        return (
            <Posts posts={this.state.posts} comments={this.state.comments} />
        )
    }
}

export default App;