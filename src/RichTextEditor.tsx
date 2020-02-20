import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import styled from 'styled-components';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

const Root = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  font-family: 'Georgia', serif;
  font-size: 14px;
  padding: 15px;
`;

const StyledEditor = styled.div`
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 16px;
  margin-top: 10px;

  .public-DraftEditorPlaceholder-root {
    margin: 0 -15px -15px;
    padding: 15px;
  }

  .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 15px;
    min-height: 100px;
  }
`;

type Props = {
  value: EditorState;
  onChange: (value: EditorState) => void;
};
const RichTextEditor = ({ value, onChange }: Props) => {
  const handleKeyCommand = (command, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <Root>
      <BlockStyleControls
        editorState={value}
        onToggle={blockType => {
          const newState = RichUtils.toggleBlockType(value, blockType);
          onChange(newState);
        }}
      />
      <InlineStyleControls
        editorState={value}
        onToggle={inlineStyle => {
          const newState = RichUtils.toggleInlineStyle(value, inlineStyle);
          onChange(newState);
        }}
      />
      <StyledEditor>
        <Editor editorState={value} onChange={onChange} handleKeyCommand={handleKeyCommand} />
      </StyledEditor>
    </Root>
  );
};

export default RichTextEditor;
