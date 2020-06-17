import * as React from "react";

export interface HomeProps {
  compiler: string;
  framework: string;
}

// 'HomeProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <h1>
        Home from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}