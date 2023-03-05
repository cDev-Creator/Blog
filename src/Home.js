import {useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState(null)

/*     ([{ title: 'How to use PHP like a pro', body: 'lorem ipsum...', author: 'John Mark', id: 1 },
        { title: 'Why your approach to web development is wrong!', body: 'lorem ipsum...', author: 'Steven Odes', id: 2 },
        { title: 'My favorite react tips and tricks', body: 'lorem ipsum...', author: 'Mellisa Scott', id: 3}, 
        { title:  'Get started with MySQL', body: 'lorem ipsum...', author: 'John Mark', id: 4 } ])
 */

        
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, [])

    return(
        <div className = 'home'>
        {/* will run into error of js trying to get blogs before it has been initialied when the pade loads,
            the null value from useState will be passed in as blogs

            using conditional templating (blogs &&) if blogs is null it will not execute the statemnt to the right
            of the &&, there must be a value assigned to blogs which eliminates the error */}
            
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'John Mark')} title="Blogs by John Mark"/>}
        </div>
    )
}

export default Home;