import './ThankYou.css';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';


function ThankYou() {
    
    const history = useHistory();

const resetSurvey = () => {
    history.push('/')
}

    return(
        <>
            <h1>
                Thank you for your feedback!
            </h1>

        <Button 
            variant="contained"
            onClick={resetSurvey}
            >
            Leave new Feedback
        </Button>
        </>

    )
}

export default ThankYou;