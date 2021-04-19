import React from 'react';

function Message (props) {

  const { id } = props.match.params

  return (
    <div>

      <ul>

        <li>id:{id}</li>
        <li>name:</li>
        <li>content:</li>

      </ul>

    </div>
  );
}

export default Message;