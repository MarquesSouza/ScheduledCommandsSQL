import React,{useState} from 'react';

function app() {
  const [name,setName]=useState('');
  const [datasouce,setDatasouce]=useState('');
  const [initial,setInitial]=useState('');
  const [type,setType]=useState('');
  const [days,setDays]=useState('');
  const [time,setTime]=useState('');
  const [command,setCommand]=useState('');
  
  const [scheduleRule,setScheduleRule]=useState([''])
   
  function filtrar(){

  }
  function handleCreateShedule(e){
    e.preventDefault();
    setScheduleRule([...scheduleRule,{
      'id':time,'name':name,'datasouce':datasouce,'initial':initial,'type':type,'days':days,'time':time,'command':command, 'status':1 
    }])
    console.days
  }
  
  return (
    <div>
      <div className="top">
      <h2>Agendador de Comandos SQL</h2>
      </div>
      <form onSubmit={handleCreateShedule}>
        <div className="regra">
              <div className="container-regra">
              <fieldset >  
                 <legend>Dados da Regra</legend>
                <div className="form-group">
                  <input id="name" name="name" type="text" placeholder="Digite aqui o nome da regra" className="form-control input-md" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-group">
                  <label >Data Souce</label>  
                  <input id="datasouce" name="datasouce" type="text" placeholder="Servidor\SQL2017" className="form-control input-md" onChange={(e)=>{setDatasouce(e.target.value)}}/>
                </div>
                <div className="form-group">
                  <label >Initial Catalog</label>  
                  <input id="initial" name="initial" type="text" placeholder="max" className="form-control input-md" onChange={(e)=>{setInitial(e.target.value)}}/>
                </div>
                </fieldset>
              </div>
         
              <div className="container-agendamento">
                <label className="control-label" >Tipo de repetição</label>
                <div>
                  <div className="radio">
                    <label >
                    <input type="radio" name="type" id="type-0" value="1" onChange={(e)=>{setType(e.target.value)}} />
                    <span> Somente ao Iniciar o Windows </span>
                    </label>
	                </div>
                  <div className="radio">
                    <label >
                      <input type="radio" name="type" id="type-1" value="2" onChange={(e)=>{setType(e.target.value)}}/>
                       <span> Repetir a cada </span>
                    </label>
                    <div className="days">
                      <label className="control-label" >Dias da Semana</label>
                      <div className="checkbox">
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-0" value=" Dog" onChange={(e)=>{setDays([...days,e.target.value])}}/>
                            <span>Domingo</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-1" value=" Seg" onChange={(e)=>{setDays([...days,e.target.value])}}/>
                          <span>Segunda</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-2" value=" Ter"onChange={(e)=>{setDays([...days,e.target.value])}}/>
                          <span>Terça</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-3" value=" Qua" onChange={(e)=>{setDays([...days,e.target.value])}}/>
                          <span>Quarta</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-4" value=" Qui"onChange={(e)=>{setDays([...days,e.target.value])}}/>
                          <span>Quinta</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-5" value=" Sex" onChange={(e)=>{setDays([...days,e.target.value])}}/>
                          <span>Sexta</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="days" id="semana-6" value=" Sab" onChange={(e)=>{setDays([...days,e.target.value])}}/>
                            <span>Sábado</span>
                        </label>
                      </div>
                    </div>
                      <div className="time">
                        <label className="control-label" >Time</label>  
                        <div className="form-group">
                        <input id="time" name="time" type="time" placeholder="00:00" onChange={(e)=>{setTime(e.target.value)}} />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="container-comando">
                <label   className="control-label">Comando SQL</label>
                <div >                     
                  <textarea className="form-control" id="comando" name="comando" placeholder="Digite aqui o comando SQL" onChange={(e)=>{setCommand(e.target.value)}}></textarea>
                </div>
              </div>

              
              
              <div className="container-button">
                  <button type="submit" >Adicionar Agendamento</button>
              </div>
              
         
          </div>
      </form>
          <div className="lista">
            <legend className="control-label">Agendamentos</legend>
              <div className="containter-filtro">
              <div className="form-group">
                <label >Texto do Comando</label>
                <div className="col-md-4">
                  <input id="searchinput" name="searchName" type="search" placeholder="Digite aqui a Pesquisa do Comando SQL" className="form-control input-md" />
                </div>
              </div>
              <div className="form-group">
                <label >Data Source</label>
                <div className="col-md-4">
                  <input id="searchinput" name="searchData" type="search" placeholder="Digite aqui " className="form-control input-md" />
                </div>
              </div>
              <div className="form-group">
                <label  >Initial Catalog</label>
                <div className="col-md-4">
                  <input id="searchinput" name="searchInitial" type="search" placeholder="Digite aqui" className="form-control input-md" />
                </div>
              </div>
              <div className="form-group">
                <label  >Status</label>
                <div className="col-md-4">
                  <select id="searchStatus" name="searchStatus" className="form-control">
                    <option value="0">Desativo</option>
                    <option value="1">Ativo</option>
                    </select>
                </div>
              </div>
              <div className="container-button-filtrar">
                <label ></label>
                <div className="col-md-4">
                  <button id="submit" name="submit" className="btn btn-primary" >Filtrar...</button>
                  
                </div>
              </div>
               
                
              </div>
              <div>
              <table className="table">
                  <tr>
                  <th>Nome da Regra</th>
                  <th>DataSouce</th>
                  <th>Banco</th>
                  <th>Typo de Regra</th>
                  <th>Dia da Semana</th>
                  <th>Hora</th>
                  <th>Situação da Regra</th>
                  </tr>
                {scheduleRule.map((item)=>
                  <tr key={item.id+item.name}>
                    <td>{item.name}</td>
                    <td>{item.datasouce}</td>
                    <td>{item.initial}</td>
                    <td>{item.type&&1?"Agendado":item.type&&null?"Ao iniciar":''}</td>
                    <td>{item.days}</td>
                    <td>{item.time}</td>
                    <td>{item.status&&1?"Ativo":item.type&&null?"Desativo":''}</td>
                  </tr>
                 )}
        </table>
                  
              </div>
            </div>
          

       </div>
  );
}

export default app;
