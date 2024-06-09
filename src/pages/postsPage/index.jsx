import { useEffect, useState } from "react";
import PostsPage from "./PostsPage";
import Loader from "../../components/loader/Loader"
import "../../App.css"
function PostMain() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const fetchPosts = async () => {
    setisLoading(true);
    const posts = await fetch(
      `http://localhost:5500/api/posts?page=${currentPage}&limit=3`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
    setPosts(posts.posts);
    setTotalPages(posts.totalPages)
    setisLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="container">
        <PostsPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          posts={posts}
        />
      </div>
    );
  }
}

export default PostMain;
