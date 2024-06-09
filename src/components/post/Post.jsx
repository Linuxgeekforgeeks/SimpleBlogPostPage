import { useNavigate } from "react-router-dom"
import "./Post.css"

function Post({title,content,category}) {
  const navigate=useNavigate()
  return (
    <div className="post" onClick={()=>navigate('/singlePost')}>
        <h2>{title}</h2>
        <p>category: <span>{category}</span></p>
        <p>{content}</p>
    </div>
  )
}

export default Post