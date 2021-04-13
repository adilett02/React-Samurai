import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '6db8aa30-ad68-459c-af84-8ce70ca641e9',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  auth() {
    return instance.get(`auth/me`);
  },

  setProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};
