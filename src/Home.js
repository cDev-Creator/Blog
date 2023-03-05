import {useState} from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How to use PHP like a pro', body: 'lorem ipsum...', author: 'John Marks', id: 1 },
        { title: 'Why your approach to web development is wrong!', body: 'lorem ipsum...', author: 'Steven Odes', id: 2 },
        { title: 'My favorite react tips and tricks', body: 'lorem ipsum...', author: 'Mellisa Scott', id: 3 }
      ])
    return(
        <div className = 'home'>
            {blogs.map((blog) =>
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            
            </div>
            )}
        </div>
    )
}

export default Home;