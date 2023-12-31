import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRating, putRating } from '../../store/ratings';

const ReviewForm = ({ author_id, songsheet_id, editComment, editRating, onCancel, ratingId}) => {
    const [comment, setComment] = useState(editComment || '');
    const [rating, setRating] = useState(editRating || 0);
    const [errors, setErrors] = useState('')

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleRatingHover = (value) => {
        setRating(value);
    };

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment.length < 5) {
            setErrors('Comment should have more than 5 characters')
            return
        }
        const review = {
            comment,
            rating,
            author_id,
            songsheet_id
        }

        dispatch(postRating(review))
        setRating(1)
        setErrors('')
        setComment('')
    };
    const handleUpdate = (event) => {
        event.preventDefault();
        if (comment.length < 5) {
            setErrors('Comment should have more than 5 characters')
            return
        }
        const review = {
            comment,
            rating,
            author_id,
            songsheet_id,
            id : ratingId
        }

        dispatch(putRating(review))
        setRating(1)
        setErrors('')
        setComment('')
        onCancel()
    };

    console.log(author_id,
        songsheet_id);
    return (
        <form onSubmit={editComment ? handleUpdate :  handleSubmit}>
            <p className='errors'>{errors}</p>
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
                <label>
                    Comment:
                    <input type="text" value={comment} onChange={handleCommentChange} />
                </label>
            </div>
            <div>
                {editComment ? <button type="submit">Update</button> : <button type="submit">Submit</button>}
                {editComment  && <button onClick={onCancel}>Cancel</button>}
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
