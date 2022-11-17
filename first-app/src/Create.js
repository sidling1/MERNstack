import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Sid');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body , author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange = {(e)=>setTitle(e.target.value)}
                ></input>
                <label>Blog Body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value = {author}
                    onChange = {(e)=> setAuthor(e.target.value)}
                >
                    <option value="Siddhant">Siddhant</option>
                    <option value="Sidling">Sidling</option>
                    <option value="Sid">Sid</option>
                </select>
                {!isPending && <button>Add blog :{')'}</button>}
                {isPending && <button disabled>Adding ...</button>}
            </form>
        </div>
    );
}

export default Create;