import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../Common/utils/time"; 
import { ITarefa } from "../../types/tarefa"; 
import {useEffect, useState} from 'react';

interface Props{
  selecionado: ITarefa | undefined
  finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {
      const [tempo, setTempo] = useState<number>(); 

      useEffect(()=>{
        //função que vai ser executada quando alguma coisa mudar   
         if(selecionado?.tempo){
           setTempo(tempoParaSegundos(selecionado.tempo))
         }      
      }, [selecionado]);//sempre que o selecionado mudar ele re renderiza executa o primeiro parametro que e a função

      function regressiva(contador:number = 0){
          setTimeout(() => {
              if(contador > 0){
                setTempo(contador -1);//inciar 1 segundo de novo
                return regressiva(contador - 1);//ele vai executar a regressiva agora ao invez do contador ser o tempo total ele vai ser o tempo - 1 se nao for zero vai executar o regressiva como tempo - 2 ele ja foi decrementado 1 vai ser mais 1
              }
              finalizarTarefa();
          }, 1000);
      } 
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)
      }>
        Começar!
      </Botao>
    </div>
  )
}