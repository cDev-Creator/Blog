import {useState, useEffect} from 'react';

/* custom hooks must start with use */
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null); 
    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
           /*  catches any network error, can't connect to server */
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, [url])

    return {data, isLoading, error}
}

export default useFetch;