import React from "react";
import "./ListItem.css";

const ListItem = props => (
  <li className="list-group-item">
    <h3>
    		<em>{props.headline}</em>
    </h3>
    <p>
    	Date Published: {props.pub_date}
    </p>
    <p>
      Snippet: {props.snippet}
    </p>
    <div className="btn-group">
        <a href={props.url} className="btn btn-info" target="_blank" role="button" aria-pressed="true">View Article</a>
        {props.children}
    </div>

  </li>
);

export default ListItem;


