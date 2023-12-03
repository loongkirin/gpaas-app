import { useEffect, useState } from 'react';
import axios from '@/lib/axios';

const useAxiosFetchData = (url : string, timeOut: number = 0) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchData(url, timeOut);        
    }, [])

    const fetchData = async (url: string, timeOut: number) => {
        try {
            setIsLoading(true)
            setErrorMessage("");
            const res = await axios.get(url)
            const result = res.data;
            console.log(result);
            if (result.code !== 200) {
                setErrorMessage(result.message);
                return;
            }            
            setData(result.data);    
        } catch (err) {
            console.log(err);
            setErrorMessage("fetch captcha failure, refresh and try again");
        } finally {
            setIsLoading(false);
        }
    }
    return {isLoading, data, errorMessage};
}

export default useAxiosFetchData;