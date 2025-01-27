import { useGhRestClient } from "../utils/github-client";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface Response {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear'
  };
  contributions: Array<Contribution>;
}

export async function getTotalPRs(year: number) {
  const query = `is:pr author:klemenstraeger created:${year}-01-01..${year}-12-31`;
  const { ghToken } = useRuntimeConfig();
  const {
    data: { total_count },
  } = await useGhRestClient(ghToken).rest.search.issuesAndPullRequests({
    q: query,
    per_page: 30, // adjust as needed
    page: 1, // adjust as needed
  });
  return total_count;
}

export async function getTotalCommits(year: number) {
  const { total: totalCommits } = await $fetch<Response>(
    "https://github-contributions-api.jogruber.de/v4/klemenstraeger?y=" + year
  );
  return totalCommits;
}

export async function getTotalRepos() {
  //by me and is public for current year
  const query = " owner:klemenstraeger is:public ";
  const { ghToken } = useRuntimeConfig();
  const {
    data: { total_count },
  } = await useGhRestClient(ghToken).rest.search.repos({
    q: query,
    per_page: 30, // adjust as needed
    page: 1, // adjust as needed
  });
  return total_count;
}
