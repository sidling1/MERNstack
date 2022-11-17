import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
const { id } = useParams();
const {Data:blog,isError,isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);

const history = useHistory();
const handleDelete = ()=>{
    fetch(`http://localhost:8000/blogs/${blog.id}`,{
        method: 'DELETE'
    }).then(()=>{
        history.push('/');
    })
}

return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {isError && <div>Could not Load the resources - Error:{isError.message}</div>}
            {blog && (
                <article>
                    <h2 className="title">{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div className="body">{blog.body}</div>
                    <button onClick = {()=>handleDelete(blog.id)}>Delete Blog</button>
                </article>
            )} 
        </div>
    );
}

export default BlogDetails;