import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Fetch API</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { id, name, email, address } = curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    {/* <div className="image">
                      <img
                        src=""
                        alt="image"
                        className="rounded"
                        width="155"
                      />
                    </div> */}
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{name}</h4>{" "}
                      <span className="textLeft">{email}</span>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-coulmn">
                          <span className="articles">Home-</span>{" "}
                          <span className="number1 column">
                            {address.suite}
                          </span>
                        </div>
                        <div className="d-flex flex-coulmn">
                          <span className="followers">Street-</span>{" "}
                          <span className="number2 column">
                            {address.street}
                          </span>
                        </div>
                        <div className="d-flex flex-coulmn">
                          <span className="rating">City-</span>{" "}
                          <span className="number3 column">{address.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
