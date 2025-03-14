import { useState } from "react";
import axios from "axios";

function Home() {
  const [query, setQuery] = useState("");

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
      const response = await axios({
        method: "get",
        url: `https://saavn.dev/api/search?query=${query}`,
      });

      console.log(response.data.data); // Log the search results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function onQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="query">Search</label>
        <input type="text" id="query" value={query} onChange={onQueryChange} />
        <button type="submit">Fetch Song</button>
      </form>
    </>
  );
}

export default Home;
