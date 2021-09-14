import { makeStyles } from "@material-ui/styles";

const useNotFoundStyles = makeStyles((theme) => ({
  container: {
    height: "100%"
  },
  svgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 800,
    height: 800
  }
}));

export default useNotFoundStyles;
