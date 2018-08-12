import React from "react";
import "./List.css";

const List = ({ children }) => {

    return (
    <div>
      <h1 className="header">Article Lists</h1>
      <div className="list-overflow-container">
          <ul className="list-group">
            {children}
          </ul>
      </div>
    </div>
    )

}

export default List;