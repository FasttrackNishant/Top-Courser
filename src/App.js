import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar.js";
import Filter from "../src/components/Filter.js";
import Cards from "../src/components/Cards.js";
import { apiUrl, filterData } from "../src/data.js";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";
import "../src/index.css"
const App = () => {
  const [course, setCourse] = useState(null);
  const [loading, setloading] = useState(true);

  const fetchdata = async () => {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //saved data into a variable
      console.log("output data", output);
      setCourse(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setloading(false);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div class="min-h-screen flex flex-col 
    ">
      <div>
        <Navbar />
      </div>
      <div className="w-11/12  filterdata">
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={course} />}</div>
    </div>
  );
};

export default App;
