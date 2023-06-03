"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./ApiSection.module.scss";
import Section from "./Section";
import Edges from "./Edges";

const ApiSection = () => {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key= LxUuXQKn8a8LYbavZprFGrlb0NcWXZIIgYw2h1o9 "
        );
        setNasaData(response.data);
      } catch (error) {
        console.error("Error fetching NASA data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <Edges />
      <div className={classes.content}>
        {nasaData ? (
          <Section url={nasaData.url} text={nasaData.explanation} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ApiSection;
