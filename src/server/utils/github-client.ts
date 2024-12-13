import { Octokit } from "@octokit/rest";

export const useGhRestClient = (token) => {
  return new Octokit({
    auth: `token ${token}`,
  });
};
