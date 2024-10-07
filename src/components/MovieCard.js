import React, { useEffect, useState } from "react";
import { Box, Image, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MovieCard({ title, borderStyles }) {
  const [posterUrl, setPosterUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPoster = async () => {
    try {
      const response = await axios.get(
        `/api/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${title}&ServiceKey=${process.env.REACT_APP_KMDB_SCREAT_KEY}`
      );
      const result = response.data.Data[0].Result[0];
      if (result && result.posters) {
        const posters = result.posters.split("|");
        setPosterUrl(posters[0]);
      } else {
        const posters = response.data.Data[0].Result[1].posters.split("|");
        setPosterUrl(posters[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title) {
      fetchPoster();
    }
  }, [title]);

  const handleClick = () => {
    navigate(`/detail/${title}`);
  };

  return (
    <Box
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      maxW="xs"
      borderStyle="solid"
      cursor="pointer"
      {...borderStyles}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
      onClick={handleClick}
    >
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="400px"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        <Image
          src={posterUrl}
          alt={title}
          objectFit="cover"
          h="400px"
          w="full"
        />
      )}
    </Box>
  );
}

export default MovieCard;
