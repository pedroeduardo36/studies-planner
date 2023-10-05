import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import style from "./Counter.module.scss";
import Watch from "./Watch";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Counter({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo}/>
      </div>
      <Button>Começar</Button>
    </div>
  );
}
