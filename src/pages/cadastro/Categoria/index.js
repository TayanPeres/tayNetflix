import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'


function CadastroCategoria() {
  /* guardar as categorias */
  const [categorias, setCategorias] = useState([])
  

  const valoresIniciais = {
    nome: '',
    descricao: '',
    color: '',
  }
  const { handleChange, clearForm, valores } = useForm(valoresIniciais)

 


 useEffect(() => {
   /* Fetch - buscar dados ou pegar coisas */
   const URL_TOP = window.location.hostname.includes('localhost')
   ? 'http://localhost:8080/categorias'
   : 'https://taynetflix.herokuapp.com/categorias'
   fetch(URL_TOP)
   .then(async (responstaDoServidor) => {

     const resposta = await responstaDoServidor.json()
     setCategorias([
       ...resposta,
     ])
   })

 /*  setTimeout(() => {
     setCategorias([
       ...categorias,
       {
      "id": 1,
     "nome": "Front-End",
     "cor": "#6BD1FF",
     "descricao": "uma categoria bacana"
      },
      {
        "id": 1,
        "nome": "outro",
        "cor": "#6BD1FF",
        "descricao": "outra categoria bacana"
       },
      ])
   }, 4 * 1000) */
 }, []) 

return (
    <PageDefault>
     <h1>Cadastro de Categoria: {valores.nome}</h1>

     <form onSubmit={function handleSubmit(infoEvento){
       infoEvento.preventDefault()

      setCategorias([
        ...categorias,
        valores
            ])
        clearForm()
        /*({setValores}) */
    
     }}>

     <FormField
     label="Nome da Categoria"
     type="text"
     name="nome"
     value={valores.nome} 
     onChange={handleChange}
     />

     <FormField
     label="Descrição:"
     type="????"
     name="descricao"
     value={valores.descricao}
     onChange={handleChange}
   />
   
    

   <FormField
   label="Cor"
   type="color"
   name="cor"
   value={valores.cor} 
   onChange={handleChange}
   />


     <Button>
       Cadastrar
     </Button>
   </form>

   {categorias.length ===  0 && (
     <div>
   Loading ...
   </div>
   )}
   <ul>
    {categorias.map((categoria) => {
      return (
        <li key={`${categoria.titulo}`}>
        {categoria.titulo}
        </li>
      )
    })}
   </ul>

     <Link to="/">Ir para Home</Link>
    </PageDefault>
)
  }
export default CadastroCategoria