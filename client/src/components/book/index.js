import React from "react";
import axios from "axios";

export default function Book(props) {
  let description = props.description;
  let minDesc = "No description available.";
  if (description !== "" && description !== undefined) {
    minDesc = description.substring(0, 400) + "...";
  }

  const manageBook = e => {
    console.log(e.target.value);
    if (e.target.value === "add") {
      const data = {
        title: props.title,
        authors: props.authors,
        description: props.description,
        image: props.img,
        link: props.link
      };
      axios.post("/api/books", data).then(res => {
        console.log("BOOK ADDED");
      });
    } else {
      console.log(props._id)
      axios.delete("api/books/" + props._id).then(res => {
        console.log("BOOK DELETED")
      })
    }
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-2">
          <img src={props.img} className="card-img" alt={props.title}></img>
        </div>
        <div className="card-body col-10">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{minDesc}</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Author: {props.authors}</li>
        <li className="list-group-item">Published: {props.publishedDate}</li>
      </ul>
      <div className="card-body">
        <button
          className="btn btn-primary"
          value={props.button}
          onClick={e => manageBook(e)}
        >
          {props.button === "add"
            ? "Add to Collection"
            : "Delete from Collection"}
        </button>
        <a href={props.link} className="card-link">
          Go to Book
        </a>
      </div>
    </div>
  );
}
