import React from "react";
import { GetStaticProps } from "next";
import { Container } from "react-bootstrap";
import axios from "axios";

import { MovieType } from "../../types/format";
import { VideoPlayer } from "../../components/VideoPlayer";
import { useRouter } from "next/dist/client/router";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json");

  return {
    props: { movies: res.data.feed.entry },
  };
};

const VideoPage = ({ movies }: { movies: Array<MovieType> }) => {
  const { query } = useRouter();

  return (
    <Container className="video-wrapper">
      {query.url && (
        <VideoPlayer
          video={{ url: query.url as string, title: query.title as string }}
          videosData={movies}
        />
      )}
    </Container>
  );
};

export default VideoPage;
