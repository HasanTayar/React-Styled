import styled from "styled-components"
export default function Box4(){
    const StyledDiv = styled.div`
    /* padding: 10px; */
    height: 50px;
    width: 50px;
    background-color: purple;
    margin: 10px;
    /* margin-left: 60px; */
    display: flex;
/* The resulting background color will be based on the bg props. */
background-color: ${(props) => (props.bg === "black" ? "black" : "purple")};
color: ${(props) => (props.bg === "black" ? "white" : "black")};
`;
    return (<StyledDiv bg="purple"></StyledDiv>)
}