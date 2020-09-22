import React, { useState } from "react";
import { SearchButtons, Input, Row } from "../Styling";

const SearchFilter = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Row
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your query!"
        />
        <SearchButtons type="submit">Search</SearchButtons>
      </Row>
    </div>
  );
};

export default SearchFilter;
