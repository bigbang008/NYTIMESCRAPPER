import React from "react";
import "./SearchForm.css";

const SearchForm = props => {
 return (
    <div className="border">  
      <h1 className="header">Search</h1>
      <form className="search">
        <div className="form-group">
          <label>Topic</label>
          <input
            name="topic"
            type="text"
            onChange={props.handleInputChange}
            value={props.search}
            className="form-control"
          />
          <label>Start Year</label>
          <input
            name="startYear"
            type="text"
            onChange={props.handleInputChange}
            value={props.startYear}
            className="form-control"
          />
          <label>End Year</label>
          <input
            name="endYear"
            type="text"
            onChange={props.handleInputChange}
            value={props.endYear}
            className="form-control"
          />
        </div>

        <button type="submit" onClick={props.handleFormSubmit} className="btn submitBtn btn-primary">
          Find Articles
        </button>

      </form>
    </div>
  )
};

export default SearchForm;
