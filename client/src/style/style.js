import style from 'styled-components';

export const Button = style.button`
  background-color : ${props => (props.danger ? "lightgreen" : "lightblue")}
`

