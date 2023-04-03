import styled from 'styled-components';
import Box3 from '../Box3/Box3'
const StyledDiv = styled.div`
padding: 10px;
height: 300px;
width: 300px;
background-color: #11ff00;
/* The resulting background color will be based on the bg props. */
background-color: ${(props) => (props.bg === "black" ? "black" : "blue")};
color: ${(props) => (props.bg === "black" ? "white" : "black")};
`;
export default function Box2(){
    return (
    <StyledDiv bg="blue">
        <Box3/>
    </StyledDiv>
    )
}