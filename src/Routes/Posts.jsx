import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList'

function Posts() {

  return (
    <>
      <Outlet />

      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const res = await fetch('http://localhost:3000/posts');
  const resData = await res.json();
  return resData.posts;
}