import * as React from 'react';
import {HelloWorldComponent} from './helloworld';
import { State } from '../../reducers';
import { connect } from 'react-redux';
const mapStateToProps = (state: State) => ({
  username: state.userProfileReducer.firstname
});
const mapDispatchToProps = (dispatch) => ({

});
export const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldComponent);