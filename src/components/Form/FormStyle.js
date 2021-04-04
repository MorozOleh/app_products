import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    padding: 50,
    borderRadius: 15,

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
  button: {
    display: 'flex',
    margin: '0 auto'
  }
}));
