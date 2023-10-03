import React from "react";
import style from './List.module.scss'

function List() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "01:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "02:00:00",
    },
    {
        tarefa: "TypeScript",
        tempo: "01:45:00",
      },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.tarefa} </h3>
            <span>{item.tempo} </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
