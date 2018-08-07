import {connect} from 'react-redux';

//Import associated component
import Experience from '../components/Experience';

const MapStateToProps = (state) => (
  {
    experience: state.experience
  }
)

const MapDispatchToProps = (dispatch) => (
  {

  }
)

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Experience);
