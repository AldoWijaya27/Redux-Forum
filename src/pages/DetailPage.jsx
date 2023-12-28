import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentsList';
import NotFoundPage from './NotFoundPage';

export default function DetailPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeturalizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onNeturalizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (threadDetail === null) {
    return <NotFoundPage />;
  }

  return (
    <div className="detail-page__container">
      <div className="detail-page">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <p className="total-comment">
          Semua komentar({threadDetail.comments.length})
        </p>
        <CommentsList
          comments={threadDetail.comments}
          authUser={authUser.id}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neturalizeVoteComment={onNeturalizeVoteComment}
        />
      </div>
    </div>
  );
}
