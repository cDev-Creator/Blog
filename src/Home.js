import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return(
        <div className = 'home'>
        {/* will run into error of js trying to get blogs before it has been initialied when the pade loads,
            the null value from useState will be passed in as blogs

            using conditional templating (blogs &&) if blogs is null it will not execute the statemnt to the right
            of the &&, there must be a value assigned to blogs which eliminates the error */}
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'John Mark')} title="Blogs by John Mark"/>}
        </div>
    )
}

export default Home;