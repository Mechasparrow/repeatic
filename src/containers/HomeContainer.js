import { connect } from "react-redux";

//Import associated component
import Home from "../components/Home";

//Related actions
import { completeTask, failTask, addTaskXP } from "../actions";

const MapStateToProps = state => ({
  tasks: state.tasks
});

const MapDispatchToProps = dispatch => ({
  completeTask: task_idx => {
    dispatch(completeTask(task_idx));
  },
  failTask: task_idx => {
    dispatch(failTask(task_idx));
  },
  addTaskXP: task => {
    dispatch(addTaskXP(task));
  }
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Home);
