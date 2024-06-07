import { useEffect,useState } from "react";


function usePosts(url) {
    const [posts, setPosts] = useState([])
    const [isLoading, setisLoading] = useState(true);
    const fetchPosts=async()=>{
        const posts=await fetch(url).then(res=>res.json())
        setPosts(posts)
        setisLoading(false)
    }
    useEffect(()=>{
        fetchPosts();
    },[])

  return {isLoading,posts}
}

export default usePosts