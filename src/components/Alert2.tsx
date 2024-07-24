import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const Alert2: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Holy guacamole!</Alert.Heading>
          <p>You should check in on some of those fields below.</p>
        </Alert>
      )}
      <Button onClick={() => setShow(true)}>Button</Button>
    </div>
  );
};

export default Alert2;
