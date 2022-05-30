import { Nav } from 'react-bootstrap';
// import { Home } from './componentes/Home';
// import { Sobre } from './componentes/Sobre';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alunos } from './componentes/Alunos';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>Aplicação React</h1>

      <BrowserRouter>
        <Nav variant="tabs">
          {/* <Nav.Link as ={Link} to='/'>Página Inicialive</Nav.Link> */}
          <Nav.Link as ={Link} to='/alunos'>Cadastro de Alunos</Nav.Link>
          {/* <Nav.Link as ={Link} to='/sobre'>Sobre</Nav.Link> */}
        </Nav>

      <Routes>
        {/* <Route path='/' exact={true} element={<Home/>}></Route> */}
        <Route path='/alunos' element={<Alunos/>}></Route>
        {/* <Route path='/sobre' element={<Sobre/>}></Route> */}
      </Routes>

      </BrowserRouter>
    </div>
    
  );
}

export default App;
