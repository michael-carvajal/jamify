import React, { useState } from 'react';

const ReviewForm = () => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingHover = (value) => {
        setRating(value);
    };

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // e.g., send comment and rating to a server or update state in parent component
        console.log('Submitted comment:', comment);
        console.log('Submitted rating:', rating);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Comment:
                    <input type="text" value={comment} onChange={handleCommentChange} />
                </label>
            </div>
            <div>
                <label>Rating:</label>
                {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                        key={value}
                        value={value}
                        filled={value <= rating}
                        handleRatingHover={handleRatingHover}
                        handleRatingClick={handleRatingClick}
                    />
                ))}
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

const Star = ({ value, filled, handleRatingHover, handleRatingClick }) => {
    const handleMouseEnter = () => {
        handleRatingHover(value);
    };

    const handleMouseLeave = () => {
        handleRatingHover(value);
    };

    const handleClick = () => {
        handleRatingClick(value);
    };

    return (
        <span
            className={`star ${filled ? 'filled' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            {filled ? '★' : '☆'}
        </span>
    );
};

export default ReviewForm;
