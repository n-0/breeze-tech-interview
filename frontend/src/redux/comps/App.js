import { connect } from 'react-redux';
import App from '../../App';
import { getData } from '../actions';

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({ request: () => dispatch(getData()) })

export default connect(mapStateToProps, mapDispatchToProps)(App);