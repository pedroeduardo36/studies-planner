import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import style from './Counter.module.scss'
import Watch from "./Watch";

interface Props {
    selecionado: ITarefa | undefined
}

export default function Counter({selecionado}: Props) {

    const [tempo, setTempo] = useState<number>()
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>

            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>Começar</Button>
        </div>
    )
}