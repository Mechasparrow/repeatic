import { connect } from "react-redux";

//Import associated component
import EditCharacter from "../components/EditCharacter";

//import redux actions
import { updateCharacter } from "../actions";

const MapStateToProps = state => ({
  character: state.character
});
const MapDispatchToProps = dispatch => ({
  updateCharacter: new_character => {
    dispatch(updateCharacter(new_character));
  }
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(EditCharacter);
