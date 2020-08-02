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
     setValor(
       infoEvento.target.getAttribute('name'),
       infoEvento.target.value,
        )
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