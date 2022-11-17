import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const {Data:blogs , isError , isLoading} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="Home">
            {isLoading && <p className='loading'>Loading.....</p>}
            {isError && <p className='error'>Failed to Get the data</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!"/>}
        </div>
    );
}

export default Home;