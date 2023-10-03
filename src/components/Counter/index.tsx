import Button from "../Button";
import style from './Counter.module.scss'
import Watch from "./Watch";

export default function Counter() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>

            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>Começar</Button>
        </div>
    )
}