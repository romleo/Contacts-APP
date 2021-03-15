import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import {useContacts} from './useContacts';

const useStyle = makeStyles((theme) =>createStyles ({
    root:{
        marginTop: theme.spacing(3),
        backgroundColor: theme.color.red,
    },
}));




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
