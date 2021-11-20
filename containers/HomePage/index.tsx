import React from "react";
import { GetStaticProps } from "next";
import { Container } from "react-bootstrap";
import axios from "axios";

import Footer from "../../components/Footer";
import { MovieType } from "../../types/format";
import Movies from "../../components/Movies";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json");

  return {
    props: { movies: res.data.feed.entry },
  };
};

const HomePage = ({ movies }: { movies: Array<MovieType> }) => {
  console.log(movies.map((d) => d));
  return (
    <Container>
      <h1>iTunes Store: Top Movies</h1>
      <Movies movies={movies} />
      <Footer />
    </Container>
  );
};

export default HomePage;
