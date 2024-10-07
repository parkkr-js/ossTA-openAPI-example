import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

function Footer() {
  return (
    <Box py={4} mt={8} color="white">
      <Container maxW="6xl" textAlign="center">
        <Text fontSize="sm">
          © 2024 Open Source Studio. This project was created as part of the
          course material by 박지성, Undergraduate Student.
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
