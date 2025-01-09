"use client";

import Results from "@/components/Results";
import { useSearchParams } from "next/navigation";

const API_KEY = process.env.API_KEY;

const Home = async () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "fetchTrending"; // Get the genre query param, default to "fetchTrending"

  const url =
    genre === "fetchtopRated" ? `/movie/top_rated` : `/trending/all/week`;

  const res = await fetch(
    `https://api.themoviedb.org/3${url}?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
