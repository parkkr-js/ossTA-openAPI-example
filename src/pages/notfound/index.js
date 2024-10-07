import React from "react";
import { Box, Text, Button, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      bg="gray.900"
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      padding={6}
    >
      <VStack spacing={6}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/753/753345.png" // 예시 이미지 (404 아이콘)
          alt="Not Found Icon"
          boxSize="150px"
          animation="bounce 2s infinite"
        />
        <Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
          404
        </Text>
        <Text fontSize={{ base: "lg", md: "2xl" }}>
          웁스! 존재하지 않는 페이지에용.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.400">
          It looks like the page you are trying to reach doesn't exist or has
          been moved.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={handleGoHome}
          mt={4}
          _hover={{ transform: "scale(1.1)", transition: "transform 0.3s" }}
        >
          Go Back Home
        </Button>
      </VStack>
    </Box>
  );
}

export default NotFound;
