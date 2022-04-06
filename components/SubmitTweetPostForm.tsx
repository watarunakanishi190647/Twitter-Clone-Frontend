import TextField  from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const SubmitTweetPostForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
        <TextField 
        fullWidth
        variant="filled"
        color="primary"
        multiline
        rows={3}
        margin="normal"
        name="body"
        />
        <Button variant="contained" color="primary" type="submit">
          Tweet
        </Button>
        </form>

    )
}

export default SubmitTweetPostForm;