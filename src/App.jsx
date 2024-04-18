import { useEffect, useState } from "react";
import "./App.css";
import PostPage from "./pages/postPage/PostPage";
function App() {
  const [posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchPosts=async()=>{
    try {
      const postsdata= await fetch("http://localhost:4000/posts").then(res=>res.json())
    console.log(postsdata)
    setPosts(postsdata)
    setLoading(false)
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    fetchPosts();
  },[])

if(Loading){
  return <h1>Loading....</h1>
}else{

  return (
    <div>
      <PostPage posts={posts} />
    </div>
  );
}

}

export default App;
