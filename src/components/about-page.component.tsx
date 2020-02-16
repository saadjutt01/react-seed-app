import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { increment, decrement } from "../redux/actions/counter";
import { State } from "../redux/reducers";

const Counter = (
  props: RouteComponentProps<any> & StateProps & DispatchProps
) => {
  return (
    <div>
      Counter Mob: {props.count}
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};

interface StateProps {
  count: number;
}

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state: State) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect<StateProps, DispatchProps, RouteComponentProps<any>>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
