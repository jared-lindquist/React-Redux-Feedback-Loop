import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import './Feeling.css';


function Feeling() {

    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const feedbackReducer = useSelector(store => store.feedbackReducer )

    const handleNext = (event) => {
        event.preventDefault();
        console.log('handling next');
        let feedback = feeling;

        if(feedback === '') {
            swal('Please enter 1-5 before continuing')
            // history.push('/feeling');
        } else {
            history.push('/understanding');
        }
        //add dispatch here to send data to reducer
        dispatch({
            type: 'FEELING',
            payload: feedback
        });
    }

    return(
        <>
            <h2>
                Page 1 of 4 
            </h2>
            <h3>
                On a scale of 1 - 5, how are you feeling today?
            </h3>
            <input className="feedback-score"
                required
                type="number"
                min={1}
                max={5}
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
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

export default Feeling;