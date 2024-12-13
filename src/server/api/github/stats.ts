import {
  getTotalCommits,
  getTotalPRs,
  getTotalRepos,
} from "~/server/services/github-stats";

export default defineCachedEventHandler(
  async (event) => {
    const year = new Date().getFullYear();
    const totalPRs = await getTotalPRs(year);
    const totalCommits = await getTotalCommits();
    const totalRepos = await getTotalRepos();
    return {
      totalPRs,
      totalCommits,
      totalRepos,
    };
  },
  {
    maxAge: 60 * 60 * 72, // 72 hours
    base: "redis",
  }
);
