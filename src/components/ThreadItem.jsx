import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import CommentIcon from '@mui/icons-material/Comment';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <div className="thread-item__container">
      <div className="thread-topside">
        <h2 className="thread-item__category"># {category}</h2>
        <h4 className="thread-item__title">{title}</h4>
        <p className="thread-item__desc">{parse(body)}</p>
      </div>
      <div className="thread-bottomside">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <CommentIcon onClick={onThreadClick} />
        <p>{totalComments}</p>
        <p className="text-create text-create-left">
          dibuat oleh {threadOwner.name}
        </p>
        <p className="text-create ">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };
