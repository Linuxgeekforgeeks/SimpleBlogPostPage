import { useEffect, useState } from "react";

function usePosts() {
    const [isLoading, setIsLoading] = useState(true);
    const [postData,setPostData]=useState([])
    const fetchPosts=async()=>{
        try {
          const postsdata= await fetch("http://localhost:4000/posts").then(res=>res.json())
        setIsLoading(false)
        setPostData(postsdata);
        } catch (error) {
          console.log(error)
        }
        
      }
    useEffect(()=>{
        fetchPosts();
    },[])
  return {postData,isLoading};
}

export default usePosts