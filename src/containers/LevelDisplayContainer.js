import { connect } from "react-redux";

//Import associated component
import LevelDisplay from "../components/LevelDisplay";

//Related actions
// N/A

const MapStateToProps = state => ({
  level: state.level
});

const MapDispatchToProps = dispatch => ({});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(LevelDisplay);
