import { Component, type ReactNode } from "react";
import { Button } from "../Button";

type State = {
  brokeRender: boolean;
};

export default class ErrorBoundaryTestButton extends Component<object, State> {
  state = { brokeRender: false };

  render(): ReactNode {
    if (this.state.brokeRender) throw new Error("Broke render method");

    return (
      <Button
        variant="danger"
        onClick={() => {
          this.setState({
            brokeRender: true,
          });
        }}
      >
        Error Boundary
      </Button>
    );
  }
}
