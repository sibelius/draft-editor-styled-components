import React from 'react';

import { RichTextControlButton } from './RichTextControlButton';
import { RichTextControls } from './RichTextControls';

export const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <RichTextControls>
      {INLINE_STYLES.map(type => (
        <RichTextControlButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </RichTextControls>
  );
};

export default InlineStyleControls;
