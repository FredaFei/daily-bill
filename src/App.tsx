import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "lib/history";
import styled from "styled-components";
import SignIn from "./views/SignIn";

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
            <Router history={history}>
                <Switch>
                    <Route exact path="/sign_in">
                        <SignIn/>
                    </Route>
                </Switch>
            </Router>
        </Wrapper>
    );
}


export default App;
