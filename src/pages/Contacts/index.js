import {useState ,useEffect} from 'recat';

export const Contacts = () =>{
    const [contacts, setContacts] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
       
    useEffect(() =>{
        setIsLoading(trye);
        fetch("https://randomuser.me/api/?results=200")
        .then(response =>response.json())
        .then((results )=>{
            setContacts(results);
            setIsLoading(false);
            setIsError(false);
        }).catch(() =>{
            setIsLoading(false)
           setIsError(true);
        })      
    }, []);

    if (isLoading) {
        return<div>...LOADING</div>;
    }
    if (isError) {
        return<div>...ERROR</div>;
    }
    return <div>Contacts {contacts[0].name.first}</div>;
}