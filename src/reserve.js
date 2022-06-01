import React, { useState, useEffect} from "react";

export default function reserve() {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([])
    const [id, setId] = useState(null);

    const handlePostClick = (id) => {
        async function loadComments() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts${id}/comments`
            );
            const loadedComments= await response.json();
            console.log(loadedComments);
            setComments(loadedComments);
        }
        loadComments()
    }
    useEffect(() => {
        handlePostClick(id)
    }, [id])


useEffect(() => {
    async function loadPosts() {
        const response = await fetch(
            "htttps://jsonplaceholder.typicode.com/posts"
        );
        const loadedPosts = await response.json();
        setPosts(loadedPosts);
    }
    loadPosts()
}, [])

return (
    <div>
        {posts.map((post, index) => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p className="post-body" onClick={() => setId(post.id)}>
                        {post.body}
                    </p>
                    {comments.map((comment) => 
                      post.id === comment.postId && (<li key={comment.id}>
                          {comment.name}
                      </li>
                      )
                    )}
                </div>
            )
        })}
    </div>
  )
}