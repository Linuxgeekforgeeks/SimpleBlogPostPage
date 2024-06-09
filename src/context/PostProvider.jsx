import React, { createContext } from "react";
const PostContext = createContext();
function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);

  return (
    <PostContext.Provider
      value={{ posts, totalPages, isLoading, currentPage, setCurrentPage }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
