import React, { useEffect, useMemo, useState } from "react";
import { useParams } from 'react-router-dom'

function Page() {
    const params = useParams()
    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])
    const para = useMemo(() => {
        return params.post
    }, [params]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${para}`)
            .then(response => response.json())
            .then(comments => setComments(comments))
        console.log(comments)

    }, [para])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${para}`)
            .then(response => response.json())
            .then(post => setPost(post))
        console.log(post)
    }, [para])

    return (
        <>
            {
                post.map(post => {
                    return (
                        <div className="card text-white bg-dark mb-3 card-style mb-5 mt-5" key={post.id}>
                            <div className="card-body">
                                <h5 className="card-title mb-4">  {post.title}   </h5>
                                <p className="card-text"> {post.body} </p>
                            </div>
                        </div>
                    )
                })
            }
            {
                comments.map(comment => {
                    return (
                        <div className="card card-style mt-5" key={comment.id}>
                            <div className="card-header">
                                {comment.name}
                            </div>
                            <div className="card-body ">
                                <blockquote className="blockquote mb-0">
                                    <p>{comment.body}</p>
                                    <footer className="blockquote-footer pt-4">{comment.email} </footer>
                                </blockquote>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Page