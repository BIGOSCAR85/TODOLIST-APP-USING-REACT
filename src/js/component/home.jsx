import React, { useState } from "react";
//import { element } from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [listaTareas, setListaTareas] = useState("");
  const [lista, setLista] = useState([]);

  return (
    <div className="container rounded">
      <h1 className="text-center display-1 mb-2 mt-5">todos</h1>
      <div className="form shadow-lg p-3 mb-5 bg-body rounded">
        <card className="list">
          <input maxLength={45}
          className="input"
            type="text"
            onKeyDown={(event) => {
              if (event.key === "Enter" && listaTareas.trim() !== "") {
                setLista([...lista, listaTareas]);
                setListaTareas("");
              }
            }}
            onChange={(event) => setListaTareas(event.target.value)}
            value={listaTareas}
            placeholder="Add a New Task!"
          ></input>
        </card>
        <div className="list">
          {lista.map((elementLista, index) => {
            return (
              <li key={index}
                className="todoList d-flex justify-content-between">
                {elementLista}
                <button
                  className="button d-flex"
                  type="button"
                  onClick={(event) => setLista(lista.filter((elemnet, id) => {                      
                        return index !== id }))
                      }><i class="fas fa-xmark"></i>
                </button>
              </li>
            );
          })}
          <span className="tasks d-flex">
            {lista.length === 0
              ? "No Tasks, add a Task!"
              : lista.length === 1
              ? lista.length + " Item Left"
              : lista.length + " Items Left"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
