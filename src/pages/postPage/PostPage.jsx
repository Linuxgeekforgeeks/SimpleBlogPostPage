import { useState } from "react";
import Post from "../../components/post/Post";
import "./PostPage.css";

function PostPage({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (posts) {
    return (
      <div className="container">
        <header>
          <h1>My Blog</h1>
          {/* Category Filter */}
          <div className="select">
            <h2>Select Category:</h2>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="All">All Categories</option>
              {/* Extract unique categories from posts */}
              {[...new Set(posts.map((post) => post.category))].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>
          </div>
        </header>
        <main id="post-list">
          {filteredPosts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              content={post.content}
              category={post.category}
            />
          ))}
        </main>
      </div>
    );
  } else {
    return (
      <>
        <h3>No post Found.</h3>
      </>
    );
  }
}

export default PostPage;
