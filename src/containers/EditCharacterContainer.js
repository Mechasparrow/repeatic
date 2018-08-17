import { connect } from "react-redux";

//Import associated component
import EditCharacter from "../components/EditCharacter";

const MapStateToProps = state => ({
  character: state.character
});
const MapDispatchToProps = dispatch => ({});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(EditCharacter);
