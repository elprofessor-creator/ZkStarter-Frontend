import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cardlist from "../../components/Cardlist/Cardlist";

import "./Home.scss";

const statusOptions = [
  { value: "all", label: "All" },
  { value: "live", label: "Live" },
  { value: "closed", label: "Closed" },
];

const Home = () => {
  const [filterbtn, filterbtnClick] = useState(false);
  // const [filters, setFilters] = useState({
  //   address: "",
  //   id: -1,
  //   tokenSymbol: "",
  //   status: statusOptions[0].value,
  //   pooltype: "",
  //   view: true,
  // });

  const [filter, setFilter] = useState({
    status: statusOptions[0].value,
    poolType: "",
  });
  const [searchBy, setSearchBy] = useState({
    id: "",
    name: "",
    tokenSymbol: "",
    sellToken: "",
    view: true,
  });
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="homepage">
      <Header />
      <div className="home-container">
        <div className="mb-4 me-2 text-end search-btn">
          <Link to="/fixed-swap" className="me-2">
            <Button className="ca">Create Sale</Button>
          </Link>
          <Button className="filbtn" onClick={() => filterbtnClick(!filterbtn)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
        </div>
        <div className={`filters ${filterbtn ? "show" : null}`}>
          <Filters
            showResult={showResult}
            setShowResult={setShowResult}
            filter={filter}
            setFilter={setFilter}
            searchBy={searchBy}
            setSearchBy={setSearchBy}
            statusOptions={statusOptions}
          />
        </div>
        <Cardlist
          filter={filter}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          showResult={showResult}
          setShowResult={setShowResult}
        />
        {/* <CardPagination /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
