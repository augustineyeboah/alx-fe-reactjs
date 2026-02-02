import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e, newPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchAdvancedUsers(
        username,
        location,
        repos,
        newPage
      );

      // If page 1, replace users. Otherwise, append
      setUsers(newPage === 1 ? data : [...users, ...data]);
      setPage(
