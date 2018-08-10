import { connect } from "react-redux";

//Import associated component
import NewTask from "../components/NewTask";

//Related actions
import { createTask } from "../actions";

const MapStateToProps = state => ({
  categories: state.categories
});

const MapDispatchToProps = dispatch => ({
  createTask: new_task => {
    dispatch(createTask(new_task));
  }
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(NewTask);
