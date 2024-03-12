import React from 'react';

const Border = ({ children, borderStyle, borderColor, borderWidth, padding }) => {
  const borderStyles = {
    borderStyle: borderStyle || 'solid',
    borderColor: borderColor || 'black',
    borderWidth: borderWidth || '1px',
    padding: padding || '0px',
  };

  return (
    <div style={borderStyles}>
      {children}
    </div>
  );
};

const Component = () => {
  return (
    <h1>
      Second Assignement
    </h1>
  );
};

const AssignmentTwo = () => {
  return (
    <Border borderStyle="dashed" borderColor="blue" borderWidth="2px" padding="40px">
      <Component />
    </Border>
  );
};

export default AssignmentTwo;