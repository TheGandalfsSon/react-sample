import Axios, { AxiosResponse } from 'axios';
import { MemberEntity } from '../model';

const gitHubURL = 'https://api.github.com';
const gitHubMembersUrl = `${gitHubURL}/orgs/lemoncode/members`;

export const getAllMembers = (): Promise<MemberEntity[]> => {
  const promise: Promise<MemberEntity[]> = new Promise((resolve, reject) => {
    try {
      Axios.get<MemberEntity[]>(gitHubMembersUrl)
        .then(response => resolve(mapMemberListApiToModel(response)));
    } catch (ex) {
      reject(ex);
    }
  });

  return promise;
};

const mapMemberListApiToModel = ({ data }: AxiosResponse<MemberEntity[]>) =>
  data.map(gitHubMember => gitHubMember);