import { useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { GET_BLOGPOSTS } from "../graphql/queries";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  spacing: {
    margin: "15px 0",
  },
});


const TweetPost = ({ body, id, onDelete }) => {
    const classes = useStyles();

  return (
    <Card className={classes.spacing}>
        <CardContent>
          <Typography>
            {body}
          </Typography>
        </CardContent>

      <CardActions>
        <Button onClick={() => onDelete(id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

const BlogPosts = ( {onDelete} ) => {
    const {data, loading, error} = useQuery(GET_BLOGPOSTS);
    if (loading) {
        return <h2>Loading Data...</h2>
    };
    if (error) {
        console.error(error);
        return (
            <h2>Sorry, there&apos;s been an error...</h2>
        );
    };
    console.log(data);
    return data.posts.map((postData) => (
    <TweetPost onDelete={onDelete} {...postData} key={postData.id} />
    ));
};



export default BlogPosts;