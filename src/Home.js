import {useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How to use PHP like a pro', body: 'lorem ipsum...', author: 'John Mark', id: 1 },
        { title: 'Why your approach to web development is wrong!', body: 'lorem ipsum...', author: 'Steven Odes', id: 2 },
        { title: 'My favorite react tips and tricks', body: 'lorem ipsum...', author: 'Mellisa Scott', id: 3}, 
        { title:  'Get started with MySQL', body: 'lorem ipsum...', author: 'John Mark', id: 4 }
      ])

      const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

      }
      useEffect(() => {
        console.log(blogs);
      });

    return(
        <div className = 'home'>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'John Mark')} title="Blogs by John Mark"/>
        </div>
    )
}

export default Home;