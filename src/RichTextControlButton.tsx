import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
  color: ${props => (props.active ? '#5890ff' : '#999')};
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
`;

export const RichTextControlButton = ({ onToggle, active, label, style }) => {
  return (
    <Button
      active={active}
      onMouseDown={e => {
        e.preventDefault();
        onToggle(style);
      }}
    >
      {label}
    </Button>
  );
};
