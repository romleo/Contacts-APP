import { useState, useEffect } from 'recat';
 export const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getContacts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://randomuser.me/api/?results=200");
                const { results, error } = await response.json();
                if (error) {
                    throw new Error(error);
                }
                setData(results);
                setIsError(false);
            } catch (e) {
                setIsError(true);
            }
            finally {
                setIsLoading(false);
            }
        };
        getContacts()
    }, []);
    return {
        data,
        isLoading,
        isError,
    }
}
