import { useState, useEffect } from 'recat';

const useContacts = () =>{
    
}


export const Contacts = () => {
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
                setContacts(results);
                setIsError(false);
            } catch (e) {
                setIsError(true);
            }
            finally {
                setIsLoading(false);
            }

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
        };
        getContacts()
    }, []);

    if (isLoading) {
        return <div>...LOADING</div>;
    }
    if (isError) {
        return <div>...ERROR</div>;
    }
    return <div>Contacts {contacts[0].name.first}</div>;
}