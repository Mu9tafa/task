import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Form from "./Pages/Form";
import Question from "./Pages/Question";
import FinalScore from "./Pages/FinalScore";

import { Container, Box } from "@mui/material";
import NotFound from "./Pages/NotFound";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Container maxWidth="sm">
               <Box mt={5} textAlign="center">
                  <Switch>
                     <Route
                        path="/"
                        exact
                        render={(props) => <Form {...props} />}
                     />
                     <Route
                        path="/question"
                        render={(props) => <Question {...props} />}
                     />
                     <Route
                        path="/finalscore"
                        render={(props) => <FinalScore {...props} />}
                     />
                     <Route component={NotFound} />
                  </Switch>
               </Box>
            </Container>
         </BrowserRouter>
      );
   }
}

export default App;
