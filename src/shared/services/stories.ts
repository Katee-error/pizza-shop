import { Story, StoryItem } from '@prisma/client';
import { axiosInstance } from './axios';

export type StoryValue = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  const { data } = await axiosInstance.get<StoryValue[]>('/stories');

  return data;
};
