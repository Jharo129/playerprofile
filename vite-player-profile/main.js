import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

document.querySelector('#app').innerHTML = `
  <header>
  <div class="header">
    <div class="header-tittle">
      <img src="Images/logo_medium.png" />
      Player Profiles
    </div>
    <div class="header-center">
      <a href="#home">Home</a>
      <a href="#players">Players</a>
      <a href="#team">Team</a>
      <a href="contact">Contact</a>
    </div>
  </div>
  </header>
  <div class="container">
    <div class="player-info-section">
      <div class="player-summary">
        <div class="Left">
          <h1>JOSE Carlos ALTUVE</h1>
          <img src="Images/JOSE_ALTUVE.png" />
        </div>
        <div class="middle">
          <h4>Nickname:</h4>
          <p>N/A</p>
          <h4>Home:</h4>
          <p>N/A</p>
          <h4>Height:</h4>
          <p>5'6"</p>
          <h4>Weight:</h4>
          <p>n/a</p>
          <h4>DOB:</h4>
          <p>5/6/1990</p>
          <h4>Uniform:</h4>
          <p>27</p>
          <h4>Birth City:</h4>
          <p>Maracay, Venezuela</p>
          <h4>Draft:</h4>
          <p>2006 - Astros - Free agent</p>
          <h4>Postion:</h4>
          <p>2B</p> 
        </div>
        <div class ="right">
          <h4>Team:</h4>
          <p>ASTROS - IL</p>
          <h4>Bats:</h4>
          <p>R</p>
          <h4>Throws:</h4>
          <p>R</p>
          <h4>Agent:</h4>
          <p>Scott Boras</p>
        </div>
      </div>
      <div class="bottom"> 
        <table>
          <tr>
            <th>YR</th>
            <th>LEA</th>
            <th>Team</th>
            <th>SAL(K)</th>
            <th>G</th>
            <th>AB</th>
            <th>R</th>
            <th>H</th>
            <th>2B</th>
            <th>3B</th>
            <th>HR</th>
            <th>RBI</th>
            <th>SB</th>
            <th>CS</th>
            <th>BB</th>
            <th>SO</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>ABG</th>
          </tr>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
          <tr>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
            <td>Test</td>
          </tr>
        </table>
      </div>
    </div>
  <div class="Personal">
    <h1>Personal</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio accusamus velit, fuga dignissimos iste sit alias nihil laudantium, facilis aliquam sunt. Ab ducimus quaerat enim consectetur ipsum mollitia eveniet.</p>
  </div>
  <div class="Batting">
    <h1>Batting</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iure et architecto expedita accusantium, dicta voluptas eveniet eius cupiditate incidunt aspernatur voluptates blanditiis inventore nisi mollitia sit! Labore, iusto molestiae.</p>
  </div>
  <div class="Fielding">
    <h1>Fielding</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id commodi veritatis esse cupiditate molestias rerum facere voluptatum in. Amet, tenetur rerum. Ea inventore nisi necessitatibus quidem sapiente sed aut!</p>
  </div>
  <div class="Running">
    <h1>Running</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam dolores velit quo sapiente. Dolor deleniti reprehenderit corporis deserunt impedit? Nostrum quos quibusdam voluptate sint totam esse cum recusandae maiores temporibus!</p>
  </div>
  <div class="Career-Injury-Report">
    <h1>Career Injury Report</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo delectus itaque vero eveniet nihil ad error praesentium aperiam esse nam dicta molestiae id sunt quis recusandae dolores, dolore suscipit?</p>
  </div>
  </div>
  <footer>
  <div class="footer">
      <div class="footer-center">
          <a href="#home">Home</a>
          <a href="#players">Players</a>
          <a href="#team">Team</a>
          <a href="contact">Contact</a>
          <p>Last Updated 4/23/2023 11:43:00 PM</p>
          <p>© 2023 Player Profiles. All Rights Reserved.</p>
        </div>
  </div>
</footer>
`

setupCounter(document.querySelector('#counter'))
