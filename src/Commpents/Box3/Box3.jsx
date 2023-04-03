import styled from 'styled-components'
import Box4 from '../Box4/Box4'
export default function Box3(){
    const StyledDiv = styled.div`
    height: 200px;
    width: 200px;
    background-color: rgb(255, 0, 170);
    padding :10px;
    margin: 40px;
    display:flex;
/* The resulting background color will be based on the bg props. */
background-color: ${(props) => (props.bg === "black" ? "black" : "pink")};
color: ${(props) => (props.bg === "black" ? "white" : "black")};
`;
    return( 
        
    <StyledDiv bg="pink"><Box4/><Box4/></StyledDiv>)
}