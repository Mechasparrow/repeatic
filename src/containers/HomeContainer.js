import { connect } from "react-redux";

//Import associated component
import Home from "../components/Home";

const MapStateToProps = state => ({
  tasks: state.tasks
});

const MapDispatchToProps = dispatch => ({});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Home);
