import React, { useState } from "react";
import "./_List.scss";
import { data } from "../helper/data";
const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 5;

  const paginatedWorkers = data.slice(
    (currentPage - 1) * workersPerPage,
    workersPerPage * currentPage
  );

  const nextPage = () => {
    setCurrentPage(currentPage < (data.length / workersPerPage) ? currentPage + 1 : currentPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage == 1 ? currentPage : currentPage - 1);
  };
  return (
    <div className="list">
      <div className="title-main">
        <h3 className="title">Employee List</h3>
        <p>
          {" "}
          (Employess {(workersPerPage * currentPage)- workersPerPage + 1} to {workersPerPage * currentPage})
        </p>
      </div>
      <div className="employee-list">
        {paginatedWorkers?.map(({ name, age, image, email, id }) => (
          <div className="employee" key={id}>
            <img src={image} alt={name} />
            <div>
              <p className="name">{name}</p>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default List;
