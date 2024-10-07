import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Spinner,
  Image,
  Flex,
  Stack,
  useMediaQuery,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaClock,
  FaFilm,
  FaGlobe,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import TemplateBackground from "../../template";

function Detail() {
  const { title } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${title}&ServiceKey=${process.env.REACT_APP_KMDB_SCREAT_KEY}`
      );
      let result = response.data.Data[0].Result[0];

      if (!result.posters) {
        result = response.data.Data[0].Result[1];
      }

      result.title = result.title.replace(/!HS|!HE/g, "");
      setMovieDetail(result);
    } catch (error) {
      console.error("Error fetching movie detail:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title) {
      fetchMovieDetail();
    }
  }, [title]);

  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!movieDetail) {
    return <Text>영화 정보를 찾을 수 없습니다.</Text>;
  }

  return (
    <>
      <TemplateBackground />
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        padding={4}
        color="white"
        minH="100vh"
      >
        <Box
          boxSize={{ base: "100%", md: "40%" }}
          marginBottom={{ base: 8, md: 0 }}
          padding={4}
          boxShadow="lg"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image
            src={movieDetail.posters?.split("|")[0]}
            alt={movieDetail.title}
            borderRadius="md"
            boxShadow="2xl"
            width="100%"
            objectFit="cover"
          />
        </Box>

        <Stack
          spacing={4}
          padding={4}
          width={{ base: "100%", md: "50%" }}
          marginLeft={{ md: 8 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            color="teal.300"
          >
            {movieDetail.title}
          </Text>

          <Divider borderColor="gray.600" />

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaUser} marginRight={2} /> 감독:{" "}
            <Text as="span" color="teal.200">
              {movieDetail.directors?.director?.[0]?.directorNm || "N/A"}
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaCalendarAlt} marginRight={2} /> 개봉일자:{" "}
            <Text as="span" color="yellow.200">
              {movieDetail.repRlsDate || "N/A"}
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaClock} marginRight={2} /> 상영시간:{" "}
            <Text as="span" color="pink.200">
              {movieDetail.runtime || "N/A"}분
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaFilm} marginRight={2} /> 장르:{" "}
            <Text as="span" color="purple.200">
              {movieDetail.genre || "N/A"}
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaStar} marginRight={2} /> 영화사:{" "}
            <Text as="span" color="orange.200">
              {movieDetail.company || "N/A"}
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaStar} marginRight={2} /> 관람등급:{" "}
            <Text as="span" color="red.200">
              {movieDetail.rating || "N/A"}
            </Text>
          </Text>

          <Text fontSize="lg" fontWeight="bold">
            <Icon as={FaGlobe} marginRight={2} /> 국가:{" "}
            <Text as="span" color="blue.200">
              {movieDetail.nation || "N/A"}
            </Text>
          </Text>

          <Divider borderColor="gray.600" />

          <Text fontSize="lg" fontWeight="bold">
            배우:
          </Text>
          {movieDetail.actors?.actor?.slice(0, 5).map((actor, index) => (
            <Text key={index} fontSize="lg" color="cyan.200">
              {actor.actorNm}
            </Text>
          ))}
        </Stack>
      </Flex>
    </>
  );
}

export default Detail;
