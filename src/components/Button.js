import styled from 'styled-components';
const color = props => {
  if (props.cartButton) {
    return "var(--mainYellow)"
  } else if(props.removeButton) {
    return 'red'
  }else {
    return "var(--lightBlue)" 
  } 
};

export const CustomButton = styled.button`
text-transform: capitalize;
font-size: 1.2rem;
background: transparent;
border: 0.05rem solid ${color};
color: ${color};
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: 0.3s;
border-radius: .2rem;
&:hover {
  background: ${color};
  color: var(--mainBlue);
  transform: translateY(-3px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  
}
&:focus {
  outline: none;
  
}
&:active {
    transform: translateY(-1px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
&:disabled:hover {
  box-shadow: none;
  background: none;
  transform: translateY(0);
  color: ${color}
}
`