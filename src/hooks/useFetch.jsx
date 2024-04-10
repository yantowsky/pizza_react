import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getDate = async () => {
            try {
                setIsLoading(true);
                setError("");
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        getDate();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;