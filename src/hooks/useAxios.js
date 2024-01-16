import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAxios = (url) => {
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(url);
            setData((prevData) => [...prevData, response.data]);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [data, fetchData];
};

export default useAxios;
