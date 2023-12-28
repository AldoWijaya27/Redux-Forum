/*
  Skenario pengujian untuk threadReducer
 
  - threadReducer function
   - sebaiknya mengembalikan inisial state saat diberikan action yang tidak diketahui
   - sebaiknya mengembalikan thread saat diberikan RECEIVE_THREADS action
   - sebaiknya mengembalikan thread baru saat diberikan oleh CREATE_THREAD action
   - sebaiknya mengembalikan thread dengan toggled upVote saat diberikan oleh UP_VOTE_THREAD action
   - sebaiknya mengembalikan thread dengan toggled downVote saat diberikan oleh DOWN_VOTE_THREAD action
   - sebaiknya mengembalikan thread tanpa toggle upVote dan downVote saat diberikan oleh NEUTRALIZE_VOTE_THREAD action
 */

import threadReducer from './reducer';

describe('threadReducers function', () => {
  it('sebaiknya mengembalikan inisial state saat diberikan action yang tidak diketahui', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('sebaiknya mengembalikan thread saat diberikan RECEIVE_THREADS action', () => {
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread ke-1',
            title: 'Thread baru',
            body: 'Ini adalah Thread baru',
            category: 'Umum',
            createdAt: '2023-12-09T12:12:12.000Z',
            ownerId: 'user1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('sebaiknya mengembalikan thread baru saat diberikan oleh CREATE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread ke-1',
        title: 'Thread baru',
        body: 'Ini adalah Thread baru',
        category: 'Umum',
        createdAt: '2023-12-09T12:12:12.000Z',
        ownerId: 'user1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'Umum',
          createdAt: '2023-12-09T12:12:12.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };
    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('sebaiknya mengembalikan thread dengan toggled upVote saat diberikan oleh UP_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread ke-1',
        title: 'Thread baru',
        body: 'Ini adalah Thread baru',
        category: 'Umum',
        createdAt: '2023-12-09T12:12:12.000Z',
        ownerId: 'user1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread ke-1',
        userId: 'user1',
      },
    };
    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('sebaiknya mengembalikan thread dengan toggled downVote saat diberikan oleh DOWN_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread ke-1',
        title: 'Thread baru',
        body: 'Ini adalah Thread baru',
        category: 'Umum',
        createdAt: '2023-12-09T12:12:12.000Z',
        ownerId: 'user1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread ke-1',
        userId: 'user1',
      },
    };
    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('sebaiknya mengembalikan thread tanpa toggle upVote dan downVote saat diberikan oleh NEUTRALIZE_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread ke-1',
        title: 'Thread baru',
        body: 'Ini adalah Thread baru',
        category: 'Umum',
        createdAt: '2023-12-09T12:12:12.000Z',
        ownerId: 'user1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        threadId: 'thread ke-1',
        userId: 'user1',
      },
    };
    const nextState = threadReducer(initialState, action);

    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
