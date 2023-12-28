import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

export default function ThreadsList({
  threads,
  upVote,
  downVote,
  neturalizeVote,
}) {
  return (
    <div className="thread-list__container">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};
