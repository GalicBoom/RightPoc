import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { RecoilDiv } from '../styles/styles';

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
  
    var onChange = function (event) {
      setText(event.target.value);
  };
  
  
    return (
      <RecoilDiv>
        <input type="text" value={text} onChange={onChange} className= "bg-gray-700"/>
        <br />
        String: {text}
      </RecoilDiv>
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