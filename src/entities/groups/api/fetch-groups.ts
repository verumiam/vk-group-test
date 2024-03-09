import { GetGroupsResponse } from '../config/groups.types';
import groupsJson from './groups.json';

export const fetchGroups = async (): Promise<GetGroupsResponse> => {
  return new Promise<GetGroupsResponse>((resolve, reject) => {
    setTimeout(() => {
      try {
        const data: GetGroupsResponse = { result: 1, data: groupsJson };

        if (data.result === 0) {
          reject(new Error('Received result 0'));
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};
