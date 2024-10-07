import React from "react";
import { Box, Flex, Heading, Container, Button } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

function Header({ isWeekly, setIsWeekly }) {
  return (
    <Box p={4}>
      <Container maxW="6xl">
        <Flex
          justify="space-between"
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Heading color="white" size="lg" mb={{ base: 4, md: 0 }}>
            {isWeekly ? "Weekly Box Office" : "Daily Box Office"}
          </Heading>
          <Flex
            gap={4}
            align="center"
            direction={{ base: "column", md: "row" }}
          >
            <Button
              colorScheme={isWeekly ? "teal" : "gray"}
              onClick={() => setIsWeekly(true)}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
            >
              Weekly Ranking
            </Button>
            <Button
              colorScheme={!isWeekly ? "teal" : "gray"}
              onClick={() => setIsWeekly(false)}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
            >
              Daily Ranking
            </Button>

            <SearchBar />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
