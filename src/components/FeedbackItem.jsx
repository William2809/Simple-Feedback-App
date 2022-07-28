import Card from "./shared/card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="edit" >
                <FaEdit color='purple' onClick={() => editFeedback(item)}></FaEdit>
            </button>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='purple'></FaTimes>
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

//continue to eps 15