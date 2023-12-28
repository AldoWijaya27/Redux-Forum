import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <div className="comment-item__container">
      <div>
        <div className="comment-item__header">
          <Avatar
            alt="Avatar Icon"
            src={owner.avatar}
            sx={{ width: 20, height: 20 }}
          />
          <p>{owner.name}</p>
          <p className="comment-item__createdAt">{postedAt(createdAt)}</p>
        </div>

        <p>{parse(content)}</p>
      </div>
      <div className="comment-item__vote">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>

      <hr />
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};
export { commentShape };
