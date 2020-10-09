import React, { useState } from "react";
import { SearchButtons, Input, SearchForm, CardList } from "../Styling";
import useFetch from "../utils/useFetch";
import Card from "../Cards/Card";

const apiData = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=200";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const { error, response, isLoading } = useFetch(apiData);

  const resetInputField = () => {
    setSearch("");
  };

 
  const updateSearch = response
    ? response.filter((item) => item.title.toLowerCase().includes(search))
    : [];

  return (
    <div>
      <SearchForm>
        <Input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your query!"
        />
        <SearchButtons
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(updateSearch);
           
          }}
        >
          Search
        </SearchButtons>
      </SearchForm>
      {isLoading ? (
        <span> data is loading...</span>
      ) : error ? (
        <span> error occurred</span>
      ) : (
        <CardList>
          {updateSearch.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </CardList>
      )}
    </div>
  );
};

export default SearchFilter;

