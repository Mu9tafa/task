import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

class Form extends Component {
   submitHandler = (e) => {
      e.preventDefault();
      // console.log(e.target.elements.x.value);
      this.props.changeNameHandler(e.target.elements.x.value);
      this.props.history.push("question");
   };
   render() {
      return (
         <>
            <Typography variant="h3" my={5}>
               My Quizz
            </Typography>
            <form onSubmit={this.submitHandler}>
               <FormControl fullWidth>
                  <TextField
                     name="x"
                     type="text"
                     label="Enter Your Name"
                     size="small"
                     required
                  ></TextField>
               </FormControl>
               <Box mt={3}>
                  <Button fullWidth variant="contained" type="submit">
                     GET STARTED
                  </Button>
               </Box>
            </form>
         </>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      score: state.score,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeNameHandler: (name) => {
         dispatch({ type: "CHANGE_NAME", payload: name });
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
