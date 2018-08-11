import { connect } from "react-redux";

//Import associated component
import FailedTasks from "../components/FailedTasks";

const MapStateToProps = state => ({
  failed_tasks: state.failed_tasks
});

const MapDispatchToProps = dispatch => ({});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(FailedTasks);
