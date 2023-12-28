import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userShape } from './ThreadItem';
import VoteButton from './VoteButton';
import postedAt from '../utils';

export default function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <div className="thread-detail__container">
      <div className="thread-detail__top thread-topside">
        <h3 className="thread-detail__category"># {category}</h3>
        <h2>{title}</h2>
        <p>{parse(body)}</p>
      </div>
      <div className="thread-detail__bottom thread-bottomside">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neturalizeVote={neturalizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <p className="text-create text-create-left">dibuat oleh {owner.name}</p>
        <p className="text-create ">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};
