
import BlogList from './bloglist';
import useFetch from './useFetch';
// import Data from './data/db.json'


const Home = () => {
 const {data:posts, timer,fergurson} = useFetch('https://jsonplaceholder.typicode.com/posts');
 console.log(posts)



  
  
    return (
        <div className="home">
          {fergurson &&<div>{fergurson}</div>}
          {timer &&<div>Loading...</div>}
         
           {posts && <BlogList posts = {posts} title='My React Blogs!' />} 
           {/*<BlogList blogs = {blogs.filter(blog => blog.author === 'Nnamdi')} title="Nnamdi's Blogs!"/>*/} 
        </div>
     );
    }

 
export default Home; 