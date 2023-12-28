/* 
  skenario pengujian untuk shared action
 
  - asyncPopulateUsersAndTalks thunk
   - mengirimkan action dengan benar ketika data berhasil di fetch
   - mengirimkan action dan memanggil alert ketika proses fetching gagal
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import asyncPopulateUsersAndThreads from './action';

const threadResponses = {
  id: 'thread1',
  title: 'Thread ke satu',
  body: 'Ini adalah thread ke satu',
  category: 'umum',
  createdAt: '2023-12-09T12:12:12.000Z',
  ownerId: 'user1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const userResponses = {
  id: 'user1',
  name: 'Aldo Wijaya',
  email: 'aldowijaya@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const errorMessage = new Error('error');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it('mengirimkan action dengan benar ketika data berhasil di fetch', async () => {
    api.getAllUsers = () => Promise.resolve(userResponses);
    api.getAllThreads = () => Promise.resolve(threadResponses);

    const dispatch = jest.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(threadResponses)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(userResponses)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('mengirimkan action dan memanggil alert ketika proses fetching gagal', async () => {
    api.getAllUsers = () => Promise.reject(errorMessage);
    api.getAllThreads = () => Promise.reject(errorMessage);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    await asyncPopulateUsersAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(errorMessage.message);
  });
});
