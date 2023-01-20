import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

function Recoil() {
  const estadoTexto = atom({
    key: 'estadoTexto', 
    default: '', 
  });

const estadoContagemChar = selector({
    key: 'estadoContagemChar', 
    get: ({get}) => {
      const text = get(estadoTexto);
  
      return text.length;
    },
  });

  function ContagemCaracteres() {
    const contagem = useRecoilValue(estadoContagemChar);
  
    return <>Contagem de caracteres: {contagem}</>;
  }

  function TextInput() {
    const [text, setText] = useRecoilState(estadoTexto);
  
    const onChange = (event: { target: { value: string | ((varloAtual: string) => string); }; }) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} className= "bg-gray-700"/>
        <br />
        String: {text}
      </div>
    );
  }



return (
<>
<div>{ContagemCaracteres()}</div>
<div>{TextInput()}</div>
</>
)
}

export default Recoil