import React from "react";
import { SearchPageStyled, TitleSearchPage } from "./SearchPage.styled.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";


const SearchPage = () => {
  return (
    <SearchPageStyled>
      <TitleSearchPage>Search</TitleSearchPage>
      <SearchBar showTypeSelector={true} />


    </SearchPageStyled>
  );
};

export default SearchPage;
