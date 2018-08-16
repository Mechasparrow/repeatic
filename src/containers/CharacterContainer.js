import { connect } from "react-redux";

//Import associated component
import Character from "../components/Character";

const MapStateToProps = state => ({
  character: state.character
});

const MapDispatchToProps = dispatch => ({});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Character);
