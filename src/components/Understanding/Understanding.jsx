import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import './Understanding.css';



function Understanding() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const feedbackReducer = useSelector(store => store.feedbackReducer )
    const [understanding, setUnderstanding] = useState('');

    const handleNext = (event) => {
        event.preventDefault();
        console.log('handling next');
        let feedback = understanding;

        if(feedback === '') {
            swal('Please enter 1-5 before continuing')
            // history.push('/feeling');
        } else {
            history.push('/supported');
        }
        //add dispatch here to send data to reducer
        dispatch({
            type: 'UNDERSTANDING',
            payload: feedback
        });
    }//end handleNext
    
    const handlePrevious = () => {
            history.push('/');
    }//end handlePrevious

    return(
        <>
            <h2>
                Page 2 of 4 
            </h2>
            <h3>
                On a scale of 1-5, how well are you understanding the content?
            </h3>
            <Button 
                variant="contained"
                className="prev-btn"
                onClick={handlePrevious}
                >Change previous answer
            </Button>
            <br/>
            <br/>
            <input className="feedback-score"
                required
                type="number"
                min={1}
                max={5}
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}
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

export default Understanding;