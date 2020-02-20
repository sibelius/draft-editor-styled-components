import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { EditorState } from 'draft-js';

import RichTextEditor from './RichTextEditor';

const stories = storiesOf('RichTextEditor', module);

stories.addDecorator(withKnobs);

stories.add('RichTextEditor', () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return <RichTextEditor value={editorState} onChange={setEditorState} />;
});
