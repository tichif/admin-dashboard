import PostsTable from '@/components/posts/PostsTable';
import BackButton from '@/components/BackButton';
import PostsPagination from '@/components/posts/PostsPagination';

const PostPage = () => {
  return (
    <>
      <BackButton text='Go back' link='/' />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostPage;
