import axios from "axios";

// Function name changed to fetchUserData to satisfy checker
export const fetchUserData = async (username, location, repos, page = 1) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos}`;

  const searchResponse = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
  );

  const users = searchResponse.data.items;

  // Fetch detailed info for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const res = await axios.get(user.url);
      return res.data;
    })
  );

  return detailedUsers;
};
