import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails = () => {
const {id} = useParams();
const {data:blog, timer, fergurson} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
console.log(blog)

const history = useHistory();

const handleDelete = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/' + blog.id,{
    method: 'DELETE'
}).then(()=>{
    history.push('/')
})
}

    return ( 

        <div className="blog-details">
            {timer && <div>loading...</div>}
            {fergurson && <div>{fergurson}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by: {blog.author}</h3>
                    <div className='div'>
                        <p>{blog.body}</p>
                    </div>
                    <button className="delete" onClick = {handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;