import React, {Component} from 'react';
import Contacts from './components/posts';

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
            .then((data1) => {
                this.setState({ posts: data1 })
                for(let i=0; i<= data1.length;i++)
                {
                    const commentURL = 'https://jsonplaceholder.typicode.com/comments?postId='+ i;
                    fetch(commentURL)
                        .then(res => res.json())
                        .then((data2) => {
                            this.setState({ comments: data2 });
                        })
                        .catch(console.log)
                }
            })
            .catch(console.log)
    }
    render() {
        return (
            <Contacts posts={this.state.posts} comments={this.state.comments} />
        )
    }
}

export default App;