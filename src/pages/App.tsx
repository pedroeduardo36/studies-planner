import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Counter from "../components/Counter";
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List selecionaTarefa={selecionaTarefa} tarefas={tarefas} />
      <Counter selecionado={selecionado}/>
    </div>
  );
}

export default App;
