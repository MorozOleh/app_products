import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to right top, #337ae5, #00a7ff, #00c9dc, #00e188, #a8eb12)',
    padding: 15,
    borderRadius: 15,

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
  btn: {
    display: 'flex',
    justifyContent: "center",
    marginTop: 20,
    gap: 20
  },
}));
