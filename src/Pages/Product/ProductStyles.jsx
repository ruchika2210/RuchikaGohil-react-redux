import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    boxShadow: "10px 10px 5px -6px rgba(0,0,0,0.75)",
    padding: "20px",
    maxWidth: "500px",
  },

  media: {
    height: "100%",
    objectFit: "contain",
  },
});

export default useStyles;
