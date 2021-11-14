import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

class FinalScore extends Component {
   backToFormHandler = () => {
      this.props.history.replace("/");
      this.props.changeQuestionHandler(0);
      this.props.changeScoreHandler(0);
   };
   render() {
      return (
         <Box>
            <Typography variant="h4" mt={5}>
               {this.props.name} Your Score is : {this.props.score}
            </Typography>

            <Box mt={3}>
               <Button variant="outlined" onClick={this.backToFormHandler}>
                  Back To Form
               </Button>
            </Box>
         </Box>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      score: state.score,
      name: state.name,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeQuestionHandler: (currentIndex) => {
         dispatch({ type: "CHANGE_QUESTION", payload: currentIndex });
      },
      changeScoreHandler: (score) =>
         dispatch({ type: "CHANGE_SCORE", payload: score }),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalScore);
