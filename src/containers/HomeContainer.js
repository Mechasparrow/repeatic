import { connect } from "react-redux";

//Import associated component
import Home from "../components/Home";

//Related actions
import { completeTask, addXP } from "../actions";

const MapStateToProps = state => ({
  tasks: state.tasks
});

const MapDispatchToProps = dispatch => ({
  completeTask: task_idx => {
    dispatch(completeTask(task_idx));
  },
  addXP: task => {
    dispatch(addXP(task));
  }
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Home);