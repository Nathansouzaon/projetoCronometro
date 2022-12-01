import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecioado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
      setSelecioado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa, 
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  } 

  function finalizarTarefa(){
      if(selecionado){ 
          setSelecioado(undefined);//undefined pq nao vamos deixar nada selecionado
          setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id){
              return {
                ...tarefa,
                selecionado: false,
                completado: true
              }
            }
            return tarefa;
          }))
      }
   }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
       selecionado={selecionado} 
       finalizarTarefa = {finalizarTarefa}
       />
    </div>
  );
}

export default App;
