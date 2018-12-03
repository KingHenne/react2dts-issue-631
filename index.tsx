import * as React from 'react';
import Theme from './theme';

export function test1(): JSX.Element {
  return <Theme />;
}

export function test2(): JSX.Element {
  return <Theme tokens={{}} />;
}
