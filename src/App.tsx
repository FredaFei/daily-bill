import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;

    .icon {
        width: 1em;
        height: 1em;
        display: inline-block;
    }
`;

function App() {
    return (
        <Wrapper>
            <h1>hi, Let's go</h1>
        </Wrapper>
    );
}


export default App;
