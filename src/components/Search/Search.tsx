import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { SearchInput, SearchSubmit, SearchWrapper } from "./Styles";
import { SearchProps } from "./Types";

const Search = React.memo(
  ({ background, placeholder, width, height }: SearchProps) => {
    return (
      <SearchWrapper
        width={width}
        height={height}
        background={background}
        className="search-bar"
      >
        <SearchInput
          type="search"
          placeholder={placeholder || "Search here..."}
        />
        <SearchSubmit>
          <MagnifyingGlass size={20} />
        </SearchSubmit>
      </SearchWrapper>
    );
  },
);

export default Search;
