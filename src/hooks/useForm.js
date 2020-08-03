import { useState} from 'react'

function useForm(valoresIniciais) {
    const [valores,setValores] = useState(valoresIniciais)

    function setValor(chave, valor) {
      setValores({
        ...valores,
        [chave]: valor,
      })
    }
   
    function handleChange(infoEvento){
      const novoValor = {
        ...valores }
        novoValor[infoEvento.target.name] = infoEvento.target.value
     setValores(novoValor)
    }
    function clearForm() {
      setValores(valoresIniciais)
    }
    return {
      valores,
      handleChange,
      clearForm,
    }
   
  }
  export default useForm