import { useState } from "react";
import "./App.css"
import PostPage from "./pages/postPage/PostPage"
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', category: 'Technology' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', category: 'Travel' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post.', category: 'Science' },
    {id:4,title:"Firth Post",content:"This is the fourth posts.",category:"Travel"},
    {id:5,title:"Sixth Post",content:"This is the six posts.",category:"Science"},
    {id:6,title:"Fourth Post",content:"This is the fourth posts.",category:"Travel"}
]);

  return (
    <div>
      <PostPage posts={posts}/>
    </div>
  )
}

export default App