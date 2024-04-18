import { useEffect, useState } from "react";
import "./App.css";
import usePosts from "./hooks/usePosts";
import PostPage from "./pages/postPage/PostPage";
function App() {
  // const [posts, setPosts] = useState([]);
 const {postData,isLoading}=usePosts();

if(isLoading){
  return <h1>Loading....</h1>
}else{

  return (
    <div>
      <PostPage posts={postData} />
    </div>
  );
}

}

export default App;
