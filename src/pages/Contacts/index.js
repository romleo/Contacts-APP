import { useState, useEffect } from 'recat';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles} from '@material-ui/core/styles';


const useStyle = makeStyles((theme) =>createStyles ({
    root:{
        backgroundColor: theme.color.red,
    },
}));
makeStyles ({
    root:{
        marginTop: "24px",
    },
});

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
    const classes = useStyles();
    const contacts = useContacts();

    if (contacts.isLoading) {
        return <div>...LOADING</div>;
    }
    if (contacts.isError) {
        return <div>...ERROR</div>
    }
    return (
      <Container className={classes.root}>
        <Grid container>
            <Grid item xs={12}>
                <div>Contacts {contacts.data[0].name.first}</div>
            </Grid>
        </Grid>
        </Container>
    );
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
