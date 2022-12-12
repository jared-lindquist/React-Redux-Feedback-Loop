import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Admin.css';

function Admin ({getFeedback}) {

    useEffect(() => {
        getFeedback();
    }, []);


    const feedbackList = useSelector(store => store.adminReducer);

        return (
            <div>
                <table id="feedback-list">
                    <tbody>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Supported</th>
                        <th>Comments</th>
                        <th>Date</th>
                    </tr>

                    {feedbackList.map((feedback) => {
                        return (
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.supported}</td>
                                <td>{feedback.comments}</td>
                                <td>{feedback.date}</td>
                            </tr>
                        )
                    })}  
                    </tbody>

                </table>

                
            </div>
        )
}

export default Admin;