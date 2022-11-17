import { useState , useEffect } from 'react';

const useFetch = (url)=>{
    const [Data,setData] = useState(null);
    const [isError,setError] = useState(false);
    const[isLoading,setisLoading] = useState(true);

    useEffect(()=>{
        const AbortCont = new AbortController();
        fetch(url , { signal: AbortCont.signal})
            .then(res =>
                {
                    if(!res.ok)
                    {
                        throw Error('could not fetch the data from that resource :(')
                    }
                    return res.json();
                })
            .then(data =>{
                setData(data);
                setisLoading(false);
                setError(null);
            })
            .catch(err=>{
                if(err.name === 'AbortError')
                {
                    console.log('Fetch aborted');
                }
                else{
                setError(err.message);
                setisLoading(false);
                }
            })
        return ()=>AbortCont.abort();
    },[url]);

    return {Data,isError,isLoading}
}

export default useFetch;