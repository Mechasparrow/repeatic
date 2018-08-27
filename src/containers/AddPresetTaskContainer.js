import { connect } from "react-redux";

//Import associated component
import AddPresetTask from "../components/AddPresetTask";

//Related actions
import { createTask } from "../actions";

const MapStateToProps = state => ({
  categories: state.categories,
  preset_tasks: state.preset_tasks
});

const MapDispatchToProps = dispatch => ({
  createTask: new_task => {
    dispatch(createTask(new_task));
  }
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AddPresetTask);
