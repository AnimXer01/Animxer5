import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <Paper
      component="form"
      onSubmit={() => {
        document.querySelector(".search-query").click();
      }}
      sx={{
        borderRadius: 1,
        border: "1px solid #23202a",
        pl: 2,
        boxShadow: "none",
        width: { xs: "calc(100% / 2)", md: "calc(100% / 4)" },
        height: "40px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: "transparent",
      }}
    >
      <Link className="search-query" to={`/search/${search}`} />
      <input
        className="search-bar"
        placeholder="Search..."
        value={search ? search : ""}
        onChange={handleOnChange}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          position: "absolute",
          right: "0",
          color: "var(--button-color)",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
