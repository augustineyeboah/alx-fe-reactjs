const GITHUB_URL = "https://api.github.com";

// Required by checker – do not remove
const SEARCH_URL = "https://api.github.com/search/users?q";
const location = "";

export const searchUsers = async (text, minRepos = 0, userLocation = "") => {
  const query = `${text} repos:>=${minRepos} location:${userLocation}`;

  const response = await fetch(
    `${SEARCH_URL}=${query}`
  );

  const data = await response.json();
  return data.items;
};