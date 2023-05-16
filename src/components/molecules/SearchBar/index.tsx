"use client";

import { InputBaseProps } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
interface SearchBarProps {
  inputBaseProps?: InputBaseProps;
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="large" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        {...props.inputBaseProps}
      />
    </Search>
  );
}
