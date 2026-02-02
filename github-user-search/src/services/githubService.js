const GITHUB_URL = "https://api.github.com";

export const searchUsers = async (text, minRepos = 0) => {
  const params = new URLSearchParams({
    q: `${text} repos:>=${minRepos}`,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const data = await response.json();

  return data.items;
};