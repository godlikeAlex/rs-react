import { Component, type ReactNode } from "react";
import { Button } from "@/components";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log("ERROR IN REACT APP:", error);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="max-w-3xl mx-auto px-2.5 my-4 flex flex-col gap-6">
        <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md flex flex-col items-center">
          <h2>An unexpected error has occurred.</h2>

          <Button
            className="mt-2.5"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }
}
