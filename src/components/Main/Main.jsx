import { useEffect, useState } from "react";

import Card from "../Card/Card";
import Nav from "../Nav/Nav";
import "./Main.css";
import Sort from "../Sort/Sort";
import PostUser from "../PostUser/PostUser";

function Main() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const [sortBy, setSortBy] = useState("");

  function handleSearch(search) {
    setQuery(search);
  }

  function handleSort(sort) {
    setSortBy(sort);
  }

  console.log(query);

  // 'https://dummyjson.com/products/search?q=phone'
  // `https://dummyjson.com/users/search?q=${query}`
  useEffect(() => {
    fetch(
      query
        ? `https://dummyjson.com/users/search?q=${query}`
        : "https://dummyjson.com/users"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, [query]);

  let sortedItems;

  if (sortBy === "") sortedItems = users;
  console.log(sortBy);

  if (sortBy === "name")
    sortedItems = users
      .slice()
      .sort((a, b) => a.firstName.localeCompare(b.firstName));

  if (sortBy === "email")
    sortedItems = users.slice().sort((a, b) => a.email.localeCompare(b.email));

  if (sortBy === "company")
    sortedItems = users
      .slice()
      .sort((a, b) => a.company.name.localeCompare(b.company.name));

  return (
    <>
      <Nav handleSearch={handleSearch} />
      <Sort handleSort={handleSort} />
      <div className="main">
        {sortedItems.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>

      <PostUser setUsers={setUsers} />
    </>
  );
}

export default Main;
