import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput('');
  const onCommentSubmit = () => {
    addComment(comment);
    setComment('');
  };
  return (
    <div className="comment-input__container">
      <p>Beri Komentar</p>
      <textarea
        className="comment-input__textarea"
        value={comment}
        onChange={onCommentChange}
      />
      <button
        className="comment-input__button"
        onClick={onCommentSubmit}
        type="submit"
      >
        Kirim
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
