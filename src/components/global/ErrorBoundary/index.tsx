import React, { Component } from "react";

import { Props, State } from "./types";

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error);
    console.info(info);
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return null;
    }

    return children;
  }
}

export default ErrorBoundary;
