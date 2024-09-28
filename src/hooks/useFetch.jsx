import { useEffect, useState } from "react";

const useFetch = (fetchData, query = {}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);  // Previous error cleanup
            try {
                const queryString = new URLSearchParams(query).toString();
                const result = await fetchData(queryString);
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [fetchData, query]);

    return { data, loading, error };
};

export default useFetch;
