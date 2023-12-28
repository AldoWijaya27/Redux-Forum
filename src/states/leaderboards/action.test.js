/*
  Skenario pengujian untuk leaderboards action
 
  - asyncPopulateLeaderboards thunk
   - mengirimkan action dengan benar ketika data berhasil di fetching
   - mengirimkan action dengan benar dan memanggil alert ketika proses fetching gagal
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
} from './action';

const fakerLeaderboardsResponse = [
  {
    user: {
      id: 'user1',
      name: 'Aldo Wijaya',
      email: 'aldowijaya27@gmail.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 25,
  },
];

const fakeErrorResponse = new Error('Error');

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderBoards;
  });

  afterEach(() => {
    api.getLeaderBoards = api._getLeaderboards;

    delete api._getLeaderboards;
  });

  it('mengirimkan action dengan benar ketika data berhasil di fetching', async () => {
    api.getLeaderBoards = () => Promise.resolve(fakerLeaderboardsResponse);

    const dispatch = jest.fn();

    await asyncPopulateLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakerLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('mengirimkan action dengan benar dan memanggil alert ketika pro', async () => {
    api.getLeaderBoards = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    await asyncPopulateLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
