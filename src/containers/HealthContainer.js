import {connect} from 'react-redux';

//Import associated component
import Health from '../components/Health';

const MapStateToProps = (state) => (
  {
    health: state.health
  }
)

const MapDispatchToProps = (dispatch) => (
  {

  }
)

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Health);
