import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { connect } from "react-redux";

const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

class Question extends Component {
   constructor(props) {
      super(props);
      this.choices = "";
      this.shuffledArray = this.props.questions.sort(() => Math.random() - 0.5);
      this.choicesFun(props.currentIndex);
   }
   nextQuestionHandler = (e) => {
      let currentIndex = this.props.currentIndex;
      if (e.target.textContent === this.props.questions[currentIndex].answer) {
         this.props.changeScoreHandler(this.props.score + 1);
      }
      if (currentIndex < this.props.questions.length - 1) {
         ++currentIndex;
         this.props.changeQuestionHandler(currentIndex);
         this.choicesFun(currentIndex);
      } else {
         this.props.history.replace("/finalscore");
      }
   };

   backToFormHandler = () => {
      this.props.changeQuestionHandler(0);
      this.props.history.replace("/");
   };

   choicesFun = (currentIndex) => {
      let question = this.shuffledArray[currentIndex];
      // console.log(question);
      this.choices = [...question.choices];
      this.choices.splice(
         getRandomNum(question.choices.length),
         0,
         question.answer
      );
   };

   render() {
      return (
         <Box>
            <Typography variant="h3" mt={3} font="bold">
               Welcome {this.props.name}
            </Typography>
            <Typography variant="h4" mt={2} font="bold">
               Questions {this.props.currentIndex + 1}
            </Typography>
            <Typography variant="h4" mt={3}>
               {this.shuffledArray[this.props.currentIndex].question}
            </Typography>
            {this.choices.map((answer, idx) => (
               <Box mt={2} key={idx}>
                  <Button
                     variant="contained"
                     onClick={this.nextQuestionHandler}
                  >
                     {answer}
                  </Button>
               </Box>
            ))}
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
      questions: state.questions,
      currentIndex: state.currentIndex,
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

export default connect(mapStateToProps, mapDispatchToProps)(Question);
