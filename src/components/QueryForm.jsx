import React, { useState } from "react";
import "../components/QueryFormStyle.css";
import { FaSearch } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa6";

const QueryForm = () => {
  const [isFormStyle3Visible, setIsFormStyle3Visible] = useState(true);

  const toggleFormStyle3 = () => {
    setIsFormStyle3Visible((prevState) => !prevState);
  };

  return (
    <>
      <div className="formstyle">
        <div className="container">
          <form action="" className="formorg">
            <div className="formStyle1 d-flex flex-column flex-sm-row">
              <input
                className="form-control mb-2 mb-md-0"
                type="text"
                placeholder="Please enter search queries here"
                aria-label="default input example"
              />
              <select
                className="form-select ms-sm-4 mb-2 mb-md-0"
                aria-label="Default select example"
              >
                <option defaultValue={"DEFAULT"}>Choose news source</option>
                <option value="DEFAULT">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            {/* Toggleable Section */}
            {isFormStyle3Visible && (
              <div className="formStyle3 d-flex flex-column flex-sm-row mt-md-4">
                <select
                  className="form-select mb-2 mb-md-0"
                  aria-label="Default select example"
                >
                  <option defaultValue={"DEFAULT"}>Choose an author</option>
                  <option value="DEFAULT">Alex Williams</option>
                  <option value="2">Amelia Nierenberg</option>
                  <option value="3">Shannon Sims</option>
                </select>
                <select
                  className="form-select ms-md-4 mb-2 mb-md-0"
                  aria-label="Default select example"
                >
                  <option defaultValue={"DEFAULT"}>Choose a tag</option>
                  <option value="DEFAULT">Accommodation</option>
                  <option value="2">Safety</option>
                  <option value="3">Accountant</option>
                </select>
                <input
                  className="form-control ms-md-4 mb-2 mb-md-0"
                  type="date"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <input
                  className="form-control ms-md-4 mb-2 mb-md-0"
                  type="date"
                  placeholder="Default input"
                  aria-label="default input example"
                />
              </div>
            )}

            <div className="formStyle2 d-flex flex-column flex-md-row mt-md-4">
              <select
                className="form-select mb-2 mb-md-0"
                aria-label="Default select example"
              >
                <option defaultValue={"DEFAULT"}>Choose a region</option>
                <option value="DEFAULT">Asia</option>
                <option value="2">Europe</option>
                <option value="3">Polar</option>
              </select>
              <select
                className="form-select ms-md-4 mb-2 mb-md-0"
                aria-label="Default select example"
              >
                <option defaultValue={"DEFAULT"}>Choose a country</option>
                <option value="DEFAULT">Pakistan</option>
                <option value="2">Germany</option>
                <option value="3">Austria</option>
              </select>
              <select
                className="form-select ms-md-4 me-4 mb-2 mb-md-0"
                aria-label="Default select example"
              >
                <option defaultValue={"DEFAULT"}>Choose a category</option>
                <option value="DEFAULT">Simple</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
              </select>

              <button
                type="button"
                className="btn-custom mb-2 mb-md-0 btn btn-light btnsubform border border-primary rounded-pill bg-light d-flex"
              >
                Submit
                <span className="ms-2">
                  <FaSearch />
                </span>
              </button>
              <div className="ps-3 pe-2 text-center mx-auto">
                <button
                  type="button"
                  className="btn btn-grip border-0 rounded-circle p-3"
                  onClick={toggleFormStyle3}
                >
                  <FaGripLines size={24} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default QueryForm;
