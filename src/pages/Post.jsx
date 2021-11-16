import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Post() {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => setPost(post))
    },[])




    return (
        <>
            <h2 className='text-center mt-3 mb-3'> Hello Post Page </h2>

            {
                post.map(post => {
                    return (
                        <div className="card text-white bg-dark mb-3 card-style" key={post.id}>
                            <div className="card-body">
                                <h5 className="card-title mb-4">{post.title}</h5>
                                <p className="card-text">{post.body.substring(0, 80) + '...'}<Link to={`/PostPage/${post.id}`}>More</Link></p>
                            </div>
                        </div>
                    )
                })
            }

            

        </>

    )
}

export default Post