import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = ({blogs}) => {
    const { blogId } = useParams()
    const { data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+ blogId);
    
    return (  

        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && 
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            }
        </div>
    );
}
export default BlogDetails;