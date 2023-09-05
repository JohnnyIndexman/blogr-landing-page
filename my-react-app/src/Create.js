import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('Nnamdi');
const [timer, setTimer] = useState(false)
const history = useHistory()

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    setTimer(true)
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'} ,
    body: JSON.stringify(blog)
})
.then(()=>{
    setTimer(false)
    console.log('blog added')
    history.push('/')
})
} 


    return ( 
        <div className="create">
            <h2 style = {{color:'gray', fontFamily:'sans-serif', fontSize:'30px'}}>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <label>Blog Body:</label>
                <textarea 
                required
                value={body} 
                onChange = {(e)=> setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option 
                    value="Nnamdi">Nnamdi</option>
                   <option 
                   value="IndexMan">IndexMan</option>
                </select>
                {!timer && <input type="submit" />}
                {timer && <input disabled type="sending..." />}
            </form>

        </div>
     );
}
 
export default Create;