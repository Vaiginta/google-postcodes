import {connect} from 'react-redux'
import App from '../components/app.js'
import * as actionCreators from '../actions/app.js';

const mapStateToProps = state => {
  return {
    items: state.getIn(['app', 'items']),
    error: state.getIn(['app', 'error'])
  }
}

const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App)

export default AppContainer;
