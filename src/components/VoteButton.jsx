import React from 'react';
import PropTypes from 'prop-types';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function VoteButton({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const UpVoteClick = () => {
    upVote(id);
  };

  const DownVoteClick = () => {
    downVote(id);
  };

  const NeutralizeVoteClick = () => {
    neturalizeVote(id);
  };

  return (
    <>
      {isUpVoted ? (
        <ThumbUpAltIcon onClick={NeutralizeVoteClick} />
      ) : (
        <ThumbUpOffAltIcon onClick={UpVoteClick} />
      )}

      <p className="vote-text">{upVotesBy.length}</p>
      {isDownVoted ? (
        <ThumbDownAltIcon
          onClick={NeutralizeVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      ) : (
        <ThumbDownOffAltIcon
          onClick={DownVoteClick}
          sx={{ cursor: 'pointer' }}
        />
      )}
      <p className="vote-text">{downVotesBy.length}</p>
    </>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};
