import { useAppSelector } from "../store/hooks";
import { Post } from './Post';

export const Posts = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const loading = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  return (
    <>
      <div>{loading}</div>
      <div>{error}</div>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};
