import * as React from "react";

export interface ThemeProps {
  tokens?: any;
  children?: React.ReactElement<any>;
}

export default class Theme extends React.Component<ThemeProps, any> {
  render(): JSX.Element;
}
