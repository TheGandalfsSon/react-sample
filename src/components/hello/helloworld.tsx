import * as React from 'react';
interface Props {
  username: string;
}
export const HelloWorldComponent = (props :Props) => {
  return (
    <h2>Hello Mr. {props.username}!</h2>
  );
};