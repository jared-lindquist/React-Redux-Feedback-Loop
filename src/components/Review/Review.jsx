import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import {useState} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

function Review() {

    const history = useHistory();
    const feedbackReducer = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();

    let feedback = {
        "feeling": feedbackReducer.feeling,
        "understanding": feedbackReducer.understanding,
        "supported": feedbackReducer.supported,
        "comments": feedbackReducer.comments
    }

    
    const handleSubmit = () => {
        console.log('handling submit');

        //TODO: this is where our axios.post goes adding data to DB
        axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log(response);
            //add dispatch here to clear data in reducer
            dispatch({
                type: 'SUBMIT'
            })
        })
        .catch(error => {
            console.log(error);
        })
        history.push('/thankyou')
    }

    return(
        <>
            <h1>
                Review Your Feedback
            </h1>
            <h3>
                Feeling: {feedbackReducer.feeling}
            </h3>
            <h3>
                Understanding: {feedbackReducer.understanding}
            </h3>
            <h3>
                Supported: {feedbackReducer.supported}
            </h3>
            <h3>
                Comments: {feedbackReducer.comments}
            </h3>
            <br/>
            <Button 
                variant="contained" 
                type="submit"
                onClick={handleSubmit}
                >Submit
            </Button>
        </>

    )
}

export default Review;