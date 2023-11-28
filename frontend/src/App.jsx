import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./images/icon.png";
import { useEffect, useState } from "react";
import "./App.css";
import { Delete, Get, Post, Put } from "./apiMethods/apiMethods";

function App() {
  // let [value, setValue] = useState("");
  const [model, setModel] = useState("");
  const [toDos, setToDos] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  let getData = () => {
    Get("/todos")
      .then((res) => {
        console.log(res.data.data);
        setToDos(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  let add = () => {
    Post("/todos/add", { toDo: model })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setModel("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  let del = (id) => {
    Delete(`/todos/del`, id)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  let edit = (toDo, id) => {
    const editToDo = prompt("Edit your task?", toDo);
    // setModel(editToDo);
    Put("/todos/update", id, { toDo: editToDo })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setModel("");

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [updateUI]);

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="main">
          <div className="Todo-app">
            <h3>
              To-Do List <img src={icon} />
            </h3>
            <div className="input-main">
              <input
                type="text"
                placeholder="Enter your Task"
                value={model}
                className="input-box"
                onChange={(e) => setModel(e.target.value)}
              />
              <button type="submit" onClick={add}>
                Add Task
              </button>
            </div>
            <div className="list-main">
              {toDos.map((x) => (
                <li key={x._id} className="list">
                  {x.toDo}
                  <button
                    className="editbtn"
                    onClick={() => {
                      edit(x.toDo, x._id);
                    }}
                  >
                    Edit
                  </button>
                  <button className="deletebtn" onClick={() => del(x._id)}>
                    Delete
                  </button>
                </li>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
