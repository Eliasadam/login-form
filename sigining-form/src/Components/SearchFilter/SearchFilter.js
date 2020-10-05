import React, { useState } from "react";
import { SearchButtons, Input, SearchForm } from "../Styling";
import useFetch from "../utils/useFetch";
import Card from "../Cards/Card";

const apiData = "https://jsonplaceholder.typicode.com/photos";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const { error, response, isLoading } = useFetch(apiData);

  return (
    <div>
      <SearchForm>
        <Input
          value={search || ""}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your query!"
        />
        <SearchButtons
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(search);
          }}
        >
          Search
        </SearchButtons>
      </SearchForm>
      <br />
      {isLoading ? (
        <span> data is loading...</span>
      ) : error ? (
        <span> error occurred</span>
      ) : (
        response.photo &&
        response.photo.map((photo, index) => (
          <Card key={index.id} photo={photo} />
        ))
      )}
    </div>
  );
};

export default SearchFilter;
