import { useState } from 'react'
import Banner from './Components/Banner/Banner'
import Formulario from './Components/Formulario/Formulario'
import Time from './Components/Time/Time'
import Rodape from './Components/Rodape/Rodape'


function App() {

  const times = [
    {nome: 'Programação',
    corPrimaria: '#57c278',
    corSecundaria: '#D9F7E9'
  },
    {nome: 'Front-end',
    corPrimaria: '#82cffa',
    corSecundaria: '#E8F8FF'
  },
    {nome: 'Data Science',
    corPrimaria: '#a6d157',
    corSecundaria: '#f0f8e2'
  },
    {nome: 'Devops',
    corPrimaria: '#e06b69',
    corSecundaria: '#fde7e8'
  },
    {nome: 'UX e Design',
    corPrimaria: '#db6e8f',
    corSecundaria: '#fae9f5'
  },
    {nome: 'Mobile',
    corPrimaria: '#ffba05',
    corSecundaria: '#fff5d9'
  },
    {nome: 'Inovação e Gestão',
    corPrimaria: '#ff8a29',
    corSecundaria: '#ffeedf'
}
  ]

  const [colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])

  }

  return (
    <div>
        <Banner/>
        <Formulario times={times.map(times=> times.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

        {times.map(times => <Time
        key={times.nome}
         nome={times.nome}
          corPrimaria={times.corPrimaria} 
          corSecundaria={times.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time == times.nome)}
            />)}
            <Rodape/>
    </div>
  )
}

export default App
