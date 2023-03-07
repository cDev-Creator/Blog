import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('Rat Baby');
    return ( 
       <div className="create">
        <h2>Add New Blog</h2>
        <form>
            <label>Blog title:</label>
            <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <label>Blog Author:</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}> 
                <option value="Rat Baby">Rat Baby</option>
                <option value="Rat King">Rat King </option>
            </select>

            <label>Blog Body:</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}> </textarea>

            <button>Add Blog</button>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>

        </form>
       </div> 
    );
}
 
export default Create;