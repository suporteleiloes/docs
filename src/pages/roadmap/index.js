import { React, useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import stl from './roadmap.module.css'

export default function Roadmap() {

  const [currentTab, setCurrentTab] = useState(1);
  const [call, setCall] = useState({show: false, data: {}});
  const [data, setData] = useState([]);
  const token = ''

  useEffect(() => {
    async function getTasksFromSlApi() {
      try {
        const response = await fetch('https://api.suporteleiloes.com.br/api/tasks?internalStatus=opened', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        });
        const jsonResponse = await response.json();

        if (jsonResponse) {
          return setData([...jsonResponse.result]);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getTasksFromSlApi();
    
  }, [])


  useEffect(()=>{
    // for (const item of data) {
    //   console.log(item)
    // }
    console.log(data)
  }, [data])

  const renderData = (data) => {
    return data.map((item) => (
      <div style={{cursor: 'pointer'}} key={item.id} className={stl.row} onClick={() => setCall({show: true, data: item})}>
        <div className={stl.row__id}>{item.id}</div>
        <div className={stl.row__title}>{item.titulo}</div>
        <div className={stl.row__status}>{item.status}</div>
        <div className={stl.row__dataConclusao}>{item.dataConclusao}</div>
      </div>
    ));
  };

  // const activeCalls = data.filter((item) => item.status.name === "Aberto" || item.status.name === "Pendente" || item.status.name === "Em andamento");
  // const completedCalls = data.filter((item) => item.status === "homolog");

  const {id, titulo, descricao, status, dataConclusao} = call.data;
  return (
    <Layout title="Releases" description="Chamados de desenvolvimento">
      <div className={stl.container}>
        <h1>Chamados</h1>

        <div className={stl.table__buttons}>
          <div className={currentTab ? stl.active : '' } onClick={() => setCurrentTab(1)}>Ativos</div>
          <div className={!currentTab ? stl.active : ''} onClick={() => setCurrentTab(0)}>Finalizados</div>
        </div>

        <div className={stl.table}>
          <div className={stl.table__title}>
              <div className={stl.row__id}>
                ID
              </div>
              <div className={stl.row__title}>
                Título
              </div>
              <div className={stl.row__status}>
                Status
              </div>
              <div className={stl.row__dataConclusao}>
                Conclusão
              </div>
          </div>

          <div className={stl.table__rows}>
            
            {
              data[0] ? (
                <>carregou os chamados</>
              ) : (
                <div className={stl.loading}>
                  <progress value={null}/>
                  <h5>Carregando chamados...</h5>
                </div>
              )
            }
            
          </div>
        </div>

      </div>
      <div className={stl.container__modal} style={{display: `${call.show ? 'flex' : 'none'}`}}>
        <div className={stl.modal__card}>
          <div className={stl.modal__card__close} onClick={() => setCall({show: false, data: {}})}>fechar</div>
          <h3>ID {id} - {titulo}</h3>
          
          <div className={stl.modal__card__desc}>
            <h5>Descrição:</h5>
            {descricao}
          </div>
          
          <div className="space-between">
            <div>
              <h5>Status:</h5>
              {status}
            </div>
            <div>
              <h5>Previsão de entrega</h5>
              {dataConclusao}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}