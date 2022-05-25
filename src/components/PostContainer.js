import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setPosts, setLoading, setError, fetchPost } from "../redux/posts/postAction"

const PostContainer = () => {
    const { posts, loading, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchPost());
    },[dispatch]);

    return (
        <>
            <h2>Posts:</h2>
            {loading && <h3>Loading ....</h3>}
            {error && <h3>{error}</h3>}
            {posts && posts.map(post => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </>
    )
}

export default PostContainer;
