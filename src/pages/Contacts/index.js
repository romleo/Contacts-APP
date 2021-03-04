import { useState, useEffect } from 'recat';

const useContacts = () => {
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


export const Contacts = () => {
    const contacts = useContacts();

    if (contacts.isLoading) {
        return <div>...LOADING</div>;
    }
    if (contacts.isError) {
        return <div>...ERROR</div>;
    }
    return <div>Contacts {contacts.data[0].name.first}</div>;
};


//Pre refactoring code//

            // fetch("https://randomuser.me/api/?results=200")
            //     .then(response => response.json())
            //     .then((results) => {
            //         setContacts(results);
            //         setIsLoading(false);
            //         setIsError(false);
            //     })
            //     .catch(() => {
            //         setIsLoading(false)
            //         setIsError(true);
            //     });//refactoring code 
    