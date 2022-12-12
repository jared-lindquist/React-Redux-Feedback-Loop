import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import swal from 'sweetalert';
import { Button } from '@material-ui/core';
import './Supported.css';



function Supported() {

    const [supported, setSupported] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const feedbackReducer = useSelector(store => store.feedbackReducer)

    const handleNext = (event) => {
        event.preventDefault();
        console.log('handling next');
        let feedback = supported;

        if(feedback === '') {
            swal('Please enter 1-5 before continuing')
            // history.push('/feeling');
        } else {
            history.push('/comments');
        }
        //add dispatch here to send data to reducer
        dispatch({
            type: 'SUPPORTED',
            payload: feedback
        });
    }//end handleNext

    const handlePrevious = () => {
        history.push('/understanding');
}//end handlePrevious

    return(
        <>
            <h2>
                Page 3 of 4 
            </h2>
            <h3>
                On a scale of 1-5, how well are you being supported?
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
                value={supported}
                onChange={(event) => setSupported(event.target.value)}
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

export default Supported;