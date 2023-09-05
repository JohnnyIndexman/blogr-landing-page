import { Link } from "react-router-dom"

const BlogList = (props) => {
    const posts = props.posts;
    console.log(posts)
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {posts.map((post) =>(
             <div className="blogPrev" key={post.id}>
                <Link to= {`/blogs/${post.id}`}>
                <h3>{post.title}</h3>
                <p>written by: {post.author}</p>
                </Link>
             </div>
            ))}
        </div>
    );
}
 
export default BlogList;