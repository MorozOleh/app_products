import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    background: 'blue'
  },
  media: {
    height: 140,
  },
  btn: {
    display: 'flex',
    justifyContent: "center",
    padding: 20
  },
  comments: {
    margin: "0 auto"
  },
  wrapper: {
    border: '1px solid orange',
    borderRadius: 5,
    padding: 10
  }

});
