import React,{useState} from 'react';

function app() {
  const[id,setId]=useState('')
  const [name,setName]=useState('');
  const [datasouce,setDatasouce]=useState('');
  const [initial,setInitial]=useState('');
  const [type,setType]=useState('');
  const [time,setTime]=useState('');
  const [status,setStatus]=useState();
  const [command,setCommand]=useState('');
  
  const [scheduleRule,setScheduleRule]=useState('')
  const [temp,setTemp]=useState('');
  function systemTime(){
    const locale='pt-br';
    const DateSystem=new Date()
    const horaSystem=DateSystem.getHours()
    setTemp(horaSystem)
  }
  setTemp(1)
  function repeti(){
  var timer=setTimeout(function run(){
    const soma=temp+1
    setTemp(soma)
    setTimeout(run,1000)
  },1000)
  }
  repeti()
  function filtrar(){

  }
  function UpdateShedule(id){
    scheduleRule.map((item)=>{
      if(item.id==id){
        setId(id);
        setName(item.name)
        setDatasouce(item.datasouce)
        setInitial(item.initial)
        setTime(item.time)
        setCommand(item.command)
      }
    })
  }
  function toggleHandledStatus(id){
    scheduleRule.map((item)=>{
      if(item.id==id){
         if(item.status==1){
           setStatus(2)
         }else{
           setStatus(1)
         } 
      }
      
    })
  }
  function handleCreateShedule(e){
    systemTime()
    e.preventDefault();

    //temporario
    var rand =Math.random()
    
    let daysInput='';
    let timeInput='';
    if(e.target['type'].value==1){
      timeInput='-'
      daysInput='-'
    }else{
    timeInput=time;
    if(e.target['dog'].checked) daysInput=[...daysInput,' Dog ']
    if(e.target['seg'].checked) daysInput=[...daysInput,' Seg ']
    if(e.target['ter'].checked) daysInput=[...daysInput,' Ter ']
    if(e.target['qua'].checked) daysInput=[...daysInput,' Qua ']
    if(e.target['qui'].checked) daysInput=[...daysInput,' Qui ']
    if(e.target['sex'].checked) daysInput=[...daysInput,' Sex ']
    if(e.target['sab'].checked) daysInput=[...daysInput,' Sab ']
    } 
    setScheduleRule([...scheduleRule,{
      'id':rand,'name':name,'datasouce':datasouce,'initial':initial,'type':type,'days':daysInput,'time':timeInput,'command':command, 'status':1 
    }])
    setId('');
    setName('')
    setDatasouce('')
    setInitial('')
    setTime('')
    setCommand('')
    }
  
  return (
    <div>
      <div className="top">
      <h2>Agendador de Comandos SQL</h2>
      </div>
      <div>
        
        <h1>{interval}</h1></div>
      <form onSubmit={handleCreateShedule}>
        <div className="regra">
              <div className="container-regra">
              <fieldset >  
                 <legend>Dados da Regra</legend>
                <div className="form-group">
                  <input id="name" name="name" type="text" placeholder="Digite aqui o nome da regra" className="form-control input-md" onChange={(e)=>{setName(e.target.value)}} value={name} required/>
                </div>
                <div className="form-group">
                  <label >Data Souce</label>  
                  <input id="datasouce" name="datasouce" type="text" placeholder="Servidor\SQL2017" className="form-control input-md" onChange={(e)=>{setDatasouce(e.target.value)}} value={datasouce} required/>
                </div>
                <div className="form-group">
                  <label >Initial Catalog</label>  
                  <input id="initial" name="initial" type="text" placeholder="max" className="form-control input-md" onChange={(e)=>{setInitial(e.target.value)}} value={initial} required/>
                </div>
                </fieldset>
              </div>
         
              <div className="container-agendamento">
                <label className="control-label" >Tipo de repetição</label>
                <div>
                  <div className="radio">
                    <label >
                    <input type="radio" name="type" id="type-0" value="1" onChange={(e)=>{setType(e.target.value)}} defaultChecked />
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
                          <input type="checkbox" name="dog" id="semana-0"checked />
                            <span>Domingo</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="seg" id="semana-1" />
                          <span>Segunda</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="ter" id="semana-2" />
                          <span>Terça</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="qua" id="semana-3" />
                          <span>Quarta</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="qui" id="semana-4" />
                          <span>Quinta</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="sex" id="semana-5"/>
                          <span>Sexta</span>
                        </label>
                        <label className="checkbox-inline" >
                          <input type="checkbox" name="sab" id="semana-6" />
                            <span>Sábado</span>
                        </label>
                      </div>
                    </div>
                      <div className="time">
                        <label className="control-label" >Time</label>  
                        <div className="form-group">
                        <input id="time" name="time" type="time" placeholder="00:00"  onChange={(e)=>{setTime(e.target.value)}} />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="container-comando">
                <label   className="control-label">Comando SQL</label>
                <div >                     
                  <textarea className="form-control" id="comando" name="comando" placeholder="Digite aqui o comando SQL" onChange={(e)=>{setCommand(e.target.value)}} value={command}required></textarea>
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
                  <th>Initial</th>
                  <th>Typo de Regra</th>
                  <th>Dia da Semana</th>
                  <th>Hora</th>
                  <th>Situação da Regra</th>
                  <th>Editar</th>
                  </tr>
                {scheduleRule.length>0?scheduleRule.map((item)=>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.datasouce}</td>
                    <td>{item.initial}</td>
                    <td>{item.type&&1?"Agendado":"Ao iniciar"}</td>
                    <td>{item.days}</td>
                    <td>{item.time}</td>
                    <td><button onClick={()=>{toggleHandledStatus(item.id)}}>{item.status&&1?"Ativo":"Desativo"}</button></td>
                    <td><button onClick={()=>{UpdateShedule(item.id)}}>Editar</button></td>
                  </tr>
                 ):''}
        </table>
                  
              </div>
            </div>
          

       </div>
  );
}

export default app;
