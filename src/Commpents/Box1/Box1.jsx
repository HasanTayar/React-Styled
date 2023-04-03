
import styled from "styled-components";
import Box2 from '../Box2/Box2'
export default function Box1(){
    const StyledDiv = styled.div`
    height: 400px;
    width: 400px;
    background-color: blue;
    display: flex;
    text-align: center;
    padding: 10px;
    margin: 40px;
    /* The resulting background color will be based on the bg props. */
    background-color: ${(props) => (props.bg === "black" ? "black" : "green")};
    color: ${(props) => (props.bg === "black" ? "white" : "black")};
  `;
    return (

        <StyledDiv bg="green">
            <Box2/>
        </StyledDiv>
    ) 
}