import React from 'react'

const Posts = ({ posts,  comments }) => {
    return (
        <div>
            <center><h1>Post List</h1></center>
            {posts.map((post) => (
                <div class="card bg-light">
                    <div className="card-header">
                        <h5 className="card-title">{post.title}</h5>
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{post.body}</h6>
                        {comments.map((comment) => (
                            <div className="card">
                                <h6 class="card-text">Name: {comment.name}</h6>
                                <p class="card-text">Comment: {comment.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Posts