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
                <label htmlFor="type">Tipo de repetição</label>
                <div >
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
                    <div class="form-group">
  <label class="col-md-4 control-label" for="semana">Dias da Semana</label>
  <div class="col-md-4">
    <label class="checkbox-inline" for="semana-0">
      <input type="checkbox" name="semana" id="semana-0" value="1"/>
      Domingo
    </label>
    <label class="checkbox-inline" for="semana-1">
      <input type="checkbox" name="semana" id="semana-1" value="2" />
      Segunda
    </label>
    <label class="checkbox-inline" for="semana-2">
      <input type="checkbox" name="semana" id="semana-2" value="3"/>
      Terça
    </label>
    <label class="checkbox-inline" for="semana-3">
      <input type="checkbox" name="semana" id="semana-3" value="4" />
      Quarta
    </label>
    <label class="checkbox-inline" for="semana-4">
      <input type="checkbox" name="semana" id="semana-4" value="5"/>
      Quinta
    </label>
    <label class="checkbox-inline" for="semana-5">
      <input type="checkbox" name="semana" id="semana-5" value="6" />
      Sexta
    </label>
    <label class="checkbox-inline" for="semana-6">
      <input type="checkbox" name="semana" id="semana-6" value="7" />
      Sábado
    </label>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="time">Time</label>  
  <div class="col-md-4">
  <input id="time" name="time" type="text" placeholder="00:00" class="form-control input-md" />
    
  </div>
</div>

                  </div>
                  
                </div>
              </div>
              <div className="container-comando">
                <label  htmlFor="comando">Comando SQL</label>
                <div >                     
                  <textarea className="form-control" id="comando" name="comando" placeholder="Digite aqui o comando SQL"></textarea>
                </div>
              </div>

              
              
              <div className="container-button">
                <label  htmlFor="submit"></label>
                <div >
                  <button id="submit" name="submit" className="btn btn-primary" >Adicionar Agendamento</button>
                </div>
              </div>
              
         
          </div>
          </form>
          <div className="lista">
            <legend>Agendamentos</legend>
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
