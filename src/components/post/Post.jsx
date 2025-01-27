import "./Post.css"

function Post({title,content,category}) {
  return (
    <div className="post">
        <h2>{title}</h2>
        <p>category: <span>{category}</span></p>
        <p>{content}</p>
    </div>
  )
}

export default Post