import { useState } from "react";
import Post from "../../components/post/Post";
import "./PostsPage.css";

function PostsPage({ posts ,currentPage,setCurrentPage,totalPages}) {
  const [selectedCat, setSelectedCat] = useState("All");

  const handlePrev=()=>{
   if(currentPage>1){
    setCurrentPage(currentPage-1)
   }
  }
  const handleNext=()=>{
   if(currentPage<totalPages){
    setCurrentPage(currentPage+1)
   }
  }

  const filteredCat = [...new Set(posts.map((post) => post.category))];

  const handleCategory = (category) => {
    setSelectedCat(category);
  };
  let filteredPosts =
    selectedCat === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCat);

  return (
    <div className="postspage">
      <header>
        <h1>Blog Page</h1>
        <div className="selection">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            onChange={(e) => handleCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {filteredCat.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main>
        {filteredPosts.length>0 && filteredPosts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            category={post.category}
          />
        ))}
        <div className="pegination">
          <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage===totalPages}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default PostsPage;
