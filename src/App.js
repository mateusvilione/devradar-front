import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" requered/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" requered/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" requered/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" requered/>
            </div>
          </div>        

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15036533?s=460&v=4" alt="Mateus Vilione"/>
              <div className="user-info">
                <strong>Mateus Vilione</strong>
                <span>Java, React Node.js</span>
              </div>
            </header>
            <p>Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara</p>
            <a href="https://github.com/mateusvilione">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15036533?s=460&v=4" alt="Mateus Vilione"/>
              <div className="user-info">
                <strong>Mateus Vilione</strong>
                <span>Java, React Node.js</span>
              </div>
            </header>
            <p>Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara</p>
            <a href="https://github.com/mateusvilione">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15036533?s=460&v=4" alt="Mateus Vilione"/>
              <div className="user-info">
                <strong>Mateus Vilione</strong>
                <span>Java, React Node.js</span>
              </div>
            </header>
            <p>Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara</p>
            <a href="https://github.com/mateusvilione">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/15036533?s=460&v=4" alt="Mateus Vilione"/>
              <div className="user-info">
                <strong>Mateus Vilione</strong>
                <span>Java, React Node.js</span>
              </div>
            </header>
            <p>Formado em Análise e Desenvolvimento de Sistema na Fatec Rubens Lara</p>
            <a href="https://github.com/mateusvilione">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
