import React from 'react';

function app() {
  function agendar(){

  }
  function filtrar(){

  }
  function handleregra(){

  }
  return (
    <div>
      <div className="top">
      <h2>Agendador de Comandos SQL</h2>
      </div>
      <form  onSubmit={handleregra}>
        <div className="regra">
              <div className="container-regra">
              <fieldset >  
                 <legend>Dados da Regra</legend>
                <div className="form-group">
                  <input id="name" name="name" type="text" placeholder="Digite aqui o nome da regra" className="form-control input-md" />
                </div>
                <div className="form-group">
                  <label htmlFor="datasouce">Data Souce</label>  
                  <input id="datasouce" name="datasouce" type="text" placeholder="Servidor\SQL2017" className="form-control input-md" />
                </div>
                <div className="form-group">
                  <label htmlFor="initial">Initial Catalog</label>  
                  <input id="initial" name="initial" type="text" placeholder="max" className="form-control input-md"/>
                </div>
                </fieldset>
              </div>
         
              <div className="container-agendamento">
                <label className="control-label" htmlFor="type">Tipo de repetição</label>
                <div>
                  <div className="radio">
                    <label htmlFor="type-0">
                    <input type="radio" name="type" id="type-0" value="1" onChange />
                    <span> Somente ao Iniciar o Windows </span>
                    </label>
	                </div>
                  <div className="radio">
                    <label htmlFor="type-1">
                      <input type="radio" name="type" id="type-1" value="2"/>
                       <span> Repetir a cada </span>
                    </label>
                    <div className="week">
                      <label className="control-label" htmlfor="semana">Dias da Semana</label>
                      <div classNames="">
                        <label className="checkbox-inline" htmlfor="semana-0">
                          <input type="checkbox" name="semana" id="semana-0" value="1"/>
                            <span>Domingo</span>
                        </label>
                        <label className="checkbox-inline" htmlfor="semana-1">
                          <input type="checkbox" name="semana" id="semana-1" value="2" />
                          <span>Segunda</span>
                        </label>
                        <label className="checkbox-inline" htmlfor="semana-2">
                          <input type="checkbox" name="semana" id="semana-2" value="3"/>
                          <span>Terça</span>
                        </label>
                        <label className="checkbox-inline" htmlfor="semana-3">
                          <input type="checkbox" name="semana" id="semana-3" value="4" />
                          <span>Quarta</span>
                        </label>
                        <label className="checkbox-inline" htmlfor="semana-4">
                          <input type="checkbox" name="semana" id="semana-4" value="5"/>
                          <span>Quinta</span>
                        </label>
                        <label className="checkbox-inline" htmlfor="semana-5">
                          <input type="checkbox" name="semana" id="semana-5" value="6" />
                          <span>Sexta</span>
                        </label>
                        <label className="checkbox-inline" htmlfor="semana-6">
                          <input type="checkbox" name="semana" id="semana-6" value="7" />
                            <span>Sábado</span>
                        </label>
                      </div>
                    </div>
                      <div className="time">
                        <label className="control-label" htmlfor="time">Time</label>  
                        <div className="form-group">
                        <input id="time" name="time" type="time" placeholder="00:00"  />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="container-comando">
                <label  htmlFor="comando" className="control-label">Comando SQL</label>
                <div >                     
                  <textarea className="form-control" id="comando" name="comando" placeholder="Digite aqui o comando SQL"></textarea>
                </div>
              </div>

              
              
              <div className="container-button">
                <label  htmlFor="submit"></label>
                  <button id="submit" name="submit" className="btn btn-primary" >Adicionar Agendamento</button>
              </div>
              
         
          </div>
      </form>
          <div className="lista">
            <legend className="control-label">Agendamentos</legend>
              <div className="containter-filtro">
              <div className="form-group">
                <label htmlFor="searchName">Texto do Comando</label>
                <div className="col-md-4">
                  <input id="searchinput" name="searchName" type="search" placeholder="Digite aqui a Pesquisa do Comando SQL" className="form-control input-md" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="searchData">Data Source</label>
                <div className="col-md-4">
                  <input id="searchinput" name="searchData" type="search" placeholder="Digite aqui " className="form-control input-md" />
                </div>
              </div>
              <div className="form-group">
                <label  htmlFor="searchInitial">Initial Catalog</label>
                <div className="col-md-4">
                  <input id="searchinput" name="searchInitial" type="search" placeholder="Digite aqui" className="form-control input-md" />
                </div>
              </div>
              <div className="form-group">
                <label  htmlFor="searchStatus">Status</label>
                <div className="col-md-4">
                  <select id="searchStatus" name="searchStatus" className="form-control">
                    <option value="0">Desativo</option>
                    <option value="1">Ativo</option>
                    </select>
                </div>
              </div>
              <div className="container-button-filtrar">
                <label htmlFor="submit"></label>
                <div className="col-md-4">
                  <button id="submit" name="submit" className="btn btn-primary" disabled>Filtrar...</button>
                </div>
              </div>
            </div>
            </div>
       </div>
  );
}

export default app;
