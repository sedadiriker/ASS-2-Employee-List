import React, { useState } from "react";
import "./_List.scss";
import { data } from "../helper/data";
const List = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const workersPerPage = 5

  const paginatedWorkers = data.slice(
    (currentPage - 1) * workersPerPage,
    workersPerPage * currentPage
  )

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  return (
    <div className="list">
      <div>
        <h3 className="title">Employee List</h3>
        <p></p>
      </div>
      <div className="employee-list">
        {paginatedWorkers?.map(({ name, age, image, email, id }) => (
          <div className="employee" key={id}>
            <img src={image} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
