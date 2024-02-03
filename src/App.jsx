import { useState } from 'react'
import apresentacao from './public/Cover.png';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './App.scss'



function App() {
  
  const [count, setCount] = useState(0)
  for ( let x = 1; x<2; x = x +1){
    alert("Esse é o meu Portifolio")
  }
  return (
    <>
    {/* Inicio do meu Portifolio */}

    <div className='top'>
        <nav className='title'>
          <h1><a href="https://github.com/Josiquelton/Josiquelton">Meu GitHub</a><span><FaArrowLeft/></span></h1>
        </nav>
        
      </div>
      <div className='body'>
      <img src={apresentacao} alt="ap"/>
      </div>
      <div className='courses'>
        <h2>Certificados e Projetos</h2>
      </div>
      {/* corpo do código*/ }
      <div className='list'>
        <h1>Certificados<span><FaArrowRight /></span></h1>
        <ul>
          <li><a href="https://files.dnc.group/acervo-legacy/792d176923c8525546825363cf0c0db7.pdf">JavaScript Intermediário</a></li><br/>
          <li><a href="https://api.dinamicatreinamentos.com/public/acervo/411DTJ45411L.pdf">Desafio Técnicos Front-End</a></li><br/>
          <li><a href="https://files.dnc.group/acervo/836/45411/f1d0bab3a455f799d67a23db9303313e.pdf">Front-End Development</a></li><br/>
          <li><a href="https://files.dnc.group/acervo/836/45411/6915f4539c8d03d117d9579f09c9582b.pdf">Introdução à Front-end com React.js</a></li><br/>
          <li><a href="https://files.dnc.group/acervo/836/45411/22d71438eb3cba434e9e65f57d7bd213.pdf">Introdução ao Desenvolvimento Web</a></li><br/>
          <li><a href="https://files.dnc.group/acervo/836/45411/a5ce43551f6b1fbd6a17991cfe5714cc.pdf">Princípios de Desingn de Interface</a></li><br/>
          <li><a href="https://api.dinamicatreinamentos.com/public/acervo/41-d99cfe26d1b464e1e692660549f3cde4.pdf">Introdução Python</a></li><br/>
          <li><a href="https://api.dinamicatreinamentos.com/public/acervo/115I%C3%A0J45411L.pdf">Introdução à Lógica de Programação</a></li><br/>
          <li><a href="https://api.dinamicatreinamentos.com/public/acervo/132IaJ45411L.pdf">Introdução a HTML CSS</a></li>    
        </ul>
        <h1>Projetos<span><FaArrowRight /></span></h1>
        <ul>
          <li><a href="https://projeto-formulario-lilac.vercel.app/">Passagens Aereas</a></li><br/>
          <li><a href="https://moonlit-florentine-451eda.netlify.app/">Count Down</a></li><br/>
          <li><a href="https://cheerful-kleicha-441be2.netlify.app/">Pesquisa de Países</a></li><br/>
          <li><a href="https://tabuada-page.netlify.app/">Tabuada</a></li><br/>
          <li><a href="https://polite-lokum-745922.netlify.app/">Controle de Estoque</a></li><br/>
          <li><a href="https://astounding-rabanadas-26fafc.netlify.app/">Projeto BootCamp</a></li><br/>
          <li><a href="https://dreamy-begonia-dd67bb.netlify.app/">Projeto Lâmpada</a></li><br/>
          <li><a href="https://projeto-cepbuscador.vercel.app/">Buscador</a></li><br/>
          <li><a href="https://loja-page-legal2.vercel.app/">Loja Legal</a></li><br/>
          <li><a href="https://loja-artigos-militares.vercel.app/">Artigo Militar</a></li><br/>
          <li><a href="https://login-lkvl.vercel.app/">Login</a></li>
        </ul>
      </div>
      {/*Final do código */}
       <div className='footer'>
        <footer>
          <ul>
            <li>Email:josiqueltonls@gmail.com</li>
          </ul>
        </footer>
       </div>
    </>
  )
}

export default App
