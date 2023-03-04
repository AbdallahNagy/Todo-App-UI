import { useLoaderData } from 'react-router-dom'
import classes from "./PostsList.module.css";
import Post from "./Post";

const PostsList = () => {
    const posts = useLoaderData(); // will get me the return of the load function

    return (
        <>
            {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map(post => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
            </ul>)}
            {posts.length == 0 && (
                <h3 style={{ textAlign: "center" }}>there are no posts yet</h3>
            )}
        </>
    );
};

export default PostsList;