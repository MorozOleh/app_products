import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: 345,
    margin: '20px auto',
    backgroundImage: 'linear-gradient(to right top, #337ae5, #00a7ff, #00c9dc, #00e188, #a8eb12)'
  },
  media: {
    height: 140,
  },
  btn: {
    display: 'flex',
    justifyContent: "center",
    marginTop: 20,
    gap: 20
  },
});
