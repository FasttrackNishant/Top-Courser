import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  //array to store all data
  let allCourses = [];

  //this will put all data in one array
  const getCourses = () => {
    console.log("printint cours", courses);
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((courses) => {
        allCourses.push(courses);
      });
    });
    // console.log("fd",allCourses)
    return allCourses;
  };

  return (
    <div>
      {!courses ? (
        <div>
          <p> No data found</p>
        </div>
      ) : (
        getCourses().map((courses) => {
          return <Card courses={courses} key={courses.id} />;
        })
      )}
    </div>
  );
};

export default Cards;
