import { Fragment } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useProductStyle } from "./product.style";
import history from '../../../routes/history';

const Product = (props) => {
  const classes = useProductStyle();
  const { element } = props
  const navigate = (element) => {
    history.push({
      pathname: '/itemDetails',
      state: element
    })

  };
  const productImg = element.avatar
    ? element.avatar
    : ""
  return (
    <Fragment>
      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.elementRoot}>
          <CardActionArea>
            <CardMedia
              image={`${productImg} `}
              className={classes.media}
              onClick={() => { navigate(props.element) }}
            ></CardMedia>
            <CardContent className={classes.cardContent}>
              <div className={classes.textWrapper}>
                <Typography
                  className={classes.typoFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {element.first_name}
                </Typography>
                <div class={classes.icon}>
                  <MoreVertIcon />
                </div>
              </div>
              <Typography
                className={classes.timePublished}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {element.last_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Fragment>
  );
}
export default Product;