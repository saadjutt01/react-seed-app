import React from "react";
import "./App.scss";
import routes from "./routes";
import { execStartUp } from "./redux/actions/sasActions";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
class App extends React.Component<any, any> {
  componentDidMount() {
    this.props.execStartUp();
  }

  render() {
    if (this.props.sasServiceInit) {
      return (
        <ConnectedRouter history={this.props.history}>{routes}</ConnectedRouter>
      );
    } else {
      return (
        <div className="pageMid">
          {" "}
          <CircularProgress />{" "}
        </div>
      );
    }
  }
}

const mapStateToProps = (state: any) => {
  return { sasServiceInit: state.sasData.startupLoaded };
};

const mapDispatchToProps = dispatch => ({
  execStartUp: () => dispatch(execStartUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
