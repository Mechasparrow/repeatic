import { connect } from "react-redux";

//Import associated component
import CompletedTasks from "../components/CompletedTasks";

const MapStateToProps = state => ({
  completed_tasks: state.completed_tasks
});

const MapDispatchToProps = dispatch => ({});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(CompletedTasks);
