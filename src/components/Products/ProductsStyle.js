import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px 0',
    gap: 20,
  },
  card: {
    width: 345,
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
