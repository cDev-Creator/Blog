import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How to use PHP like a pro', body: 'lorem ipsum...', author: 'John Marks', id: 1 },
        { title: 'Why your approach to web development is wrong!', body: 'lorem ipsum...', author: 'Steven Odes', id: 2 },
        { title: 'My favorite react tips and tricks', body: 'lorem ipsum...', author: 'Mellisa Scott', id: 3}, 
        {title:  'Get started with MySQL', body: 'lorem ipsum...', author: 'John Marks', id: 4 }
      ])

    return(
        <div className = 'home'>
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'John Marks')} title="Blogs by John Marks"/>
        </div>
    )
}


export default Home;