/*
  Skenario pengujian untuk threadDetailReducer
 
  - threadDetailReducer adalah sebuah function
   - Sebaiknya mengembalikan initial state saat diberikan action uknown
   - Sebaiknya mengembalikan detail thread saat diberikan action RECEIVE_THREAD_DETAIL
   - Sebaiknya mengembalikan detail thread dengan toggled UpVote saat diberikan oleh UP_VOTE_THREAD_DETAIL action
   - Sebaiknya mengembalikan detail thread dengan toggled DownVote saat diberikan oleh DOWN_VOTE_THREAD_DETAIL action
   - Sebaiknya mengembalikan detail thread tanpa toggled UpVote and DownVote saat diberikan oleh NEUTRALIZE_VOTE_THREAD_DETAIL action
   - Sebaiknya mengembalikan detail thread dengan menambahkan komentar baru saat diberikan oleh CREATE_COMMENT action
   - Sebaiknya mengembalikan detail thread dengan toggled UpVote comment saat diberikan oleh UP_VOTE_COMMENT action
   - Sebaiknya mengembalikan detail thread dengan toggled DownVote comment saat diberikan oleh DOWN_VOTE_COMMENT action
   - Sebaiknya mengembalikan detail thread tanpa toggled UpVote and DownVote comment saat diberikan oleh NEUTRALIZE_VOTE_COMMENT action
 
 */

import threadDetailReducer from './reducer';

describe('fungsi threadDetailReducers', () => {
  it('Sebaiknya mengembalikan initial state saat diberikan action uknown', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('Sebaiknya mengembalikan detail thread saat diberikan action RECEIVE_THREAD_DETAIL', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread ke-1',
          title: 'Thread baru',
          body: 'Ini adalah Thread baru',
          category: 'Umum',
          createdAt: '2023-12-09T12:12:12.000Z',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
          created: '2024-01-29T13:09:21.000Z',
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('Sebaiknya mengembalikan detail thread dengan toggled UpVote saat diberikan oleh UP_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });
  });

  it('Sebaiknya mengembalikan detail thread dengan toggled DownVote saat diberikan oleh DOWN_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });
  });

  it('Sebaiknya mengembalikan detail thread tanpa toggled UpVote and DownVote saat diberikan oleh NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'user1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('Sebaiknya mengembalikan detail thread dengan menambahkan komentar baru saat diberikan oleh CREATE_COMMENT action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment1',
          body: 'Ini adalah comment pertama',
          owner: {},
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-29T13:09:21.000Z',
        },
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it('Sebaiknya mengembalikan detail thread dengan toggled UpVote comment saat diberikan oleh UP_VOTE_COMMENT action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-29T13:09:21.000Z',
        },
      ],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        commentId: 'comment1',
        userId: 'user1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        },
      ],
    });
  });

  it('Sebaiknya mengembalikan detail thread dengan toggled DownVote comment saat diberikan oleh DOWN_VOTE_COMMENT action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-29T13:09:21.000Z',
        },
      ],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        commentId: 'comment1',
        userId: 'user1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('Sebaiknya mengembalikan detail thread tanpa toggled UpVote and DownVote comment saat diberikan oleh NEUTRALIZE_VOTE_COMMENT action', () => {
    const initialState = {
      id: 'thread ke-1',
      title: 'Thread baru',
      body: 'Ini adalah Thread baru',
      category: 'Umum',
      createdAt: '2023-12-09T12:12:12.000Z',
      owner: {},
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment1',
          body: 'Ini adalah comment pertama',
          owner: { id: 'users-1', name: 'John Doe', email: 'john@example.com' },
          upVotesBy: [],
          downVotesBy: [],
          created: '2024-01-29T13:09:21.000Z',
        },
      ],
      created: '2024-01-29T13:09:21.000Z',
    };
    const action = {
      type: 'NEUTRALIZE_VOTE_COMMENT',
      payload: {
        commentId: 'comment1',
        userId: 'user1',
      },
    };

    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    });
  });
});
