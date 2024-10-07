import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Spinner, Grid, Container } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TemplateBackground from "../../template";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isWeekly, setIsWeekly] = useState(true);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 5);
  const targetDt = currentDate.toISOString().slice(0, 10).replace(/-/g, "");

  const fetchWeeklyMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        process.env.REACT_APP_WEEKLY_BOX_OFFICE_URL,
        {
          params: {
            targetDt: targetDt,
            weekGb: "0",
          },
        }
      );

      if (response.data?.boxOfficeResult?.weeklyBoxOfficeList) {
        setMovies(response.data.boxOfficeResult.weeklyBoxOfficeList);
      } else {
        console.error("박스오피스 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching weekly movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // 일간 순위 API 호출
  const fetchDailyMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        process.env.REACT_APP_DAILY_BOX_OFFICE_URL,
        {
          params: {
            targetDt: targetDt,
          },
        }
      );

      if (response.data?.boxOfficeResult?.dailyBoxOfficeList) {
        setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
      } else {
        console.error("박스오피스 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching daily movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isWeekly) {
      fetchWeeklyMovies();
    } else {
      fetchDailyMovies();
    }
  }, [isWeekly]);

  if (loading) {
    return (
      <>
        <TemplateBackground />
        <Container maxW="6xl" mt={4} centerContent>
          <Spinner size="xl" />
        </Container>
      </>
    );
  }

  const getBorderStyles = (index) => {
    if (index === 0) {
      return {
        borderColor: "gold",
        boxShadow: "0 0 15px gold",
        animation: "pulseGold 1.2s infinite ease-in-out",
        borderWidth: "3px",
      };
    }
    if (index === 1) {
      return {
        borderColor: "silver",
        boxShadow: "0 0 15px silver",
        animation: "pulseSilver 1.2s infinite ease-in-out",
        borderWidth: "3px",
      };
    }
    if (index === 2) {
      return {
        borderColor: "#cd7f32",
        boxShadow: "0 0 15px #cd7f32",
        animation: "pulseBronze 1.2s infinite ease-in-out",
        borderWidth: "3px",
      };
    }
    return {
      borderColor: "white",
      borderWidth: "2px",
      boxShadow: "none",
    };
  };

  return (
    <>
      <TemplateBackground />
      <Box bg="transparent" color="white" minH="100vh">
        <Header isWeekly={isWeekly} setIsWeekly={setIsWeekly} />
        <Container maxW="6xl" mt={4}>
          <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.movieNm}
                borderStyles={getBorderStyles(index)}
              />
            ))}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
