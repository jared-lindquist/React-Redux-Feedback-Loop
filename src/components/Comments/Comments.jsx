
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { Button } from '@material-ui/core';
import './Comments.css';


function Comments() {

    const history = useHistory();
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const feedbackReducer = useSelector(store => store.feedbackReducer);

    const handleNext = (event) => {
        event.preventDefault();
        console.log('handling next');
        let feedback = comments;
        history.push('/review');

        //add dispatch here to send data to reducer
        dispatch({
            type: 'COMMENTS',
            payload: feedback
        });
    }//end handleNext

    const handlePrevious = () => {
        history.push('/supported');
    }//end handlePrevious

    return(
        <>
            <h2>
                Page 4 of 4 
            </h2>
            <h3>
                Would you like to leave any additional comments?
            </h3>
            <Button 
                variant="contained"
                className="prev-btn"
                onClick={handlePrevious}
                >Change previous answer
            </Button>
            <br/>
            <br/>
            <input className="comments"
                required
                placeholder="Leave comments here (100 char max)"
                type="text"
                maxLength={100}
                value={comments}
                onChange={(event) => setComments(event.target.value)}
            />
            <br/>
            <br/>
            <Button 
                variant="contained"
                type="submit"
                className="next-btn"
                onClick={handleNext}
                >Next
            </Button>
        </>

    )
}

export default Comments;