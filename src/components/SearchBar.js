import React, { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/detail/${searchQuery}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Flex gap={2}>
      <Input
        placeholder="제목으로 검색..."
        size="md"
        maxWidth={400}
        variant="outline"
        borderColor="gray.300"
        color="white"
        ml={4}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button colorScheme="teal" onClick={handleSearch}>
        검색
      </Button>
    </Flex>
  );
}

export default SearchBar;
