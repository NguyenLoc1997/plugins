import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-custom-build/build/ckeditor';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const configuration = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    '|',
    'indent',
    'outdent',
    '|',
    'imageInsert',
    'blockQuote',
    'insertTable',
    'mediaEmbed',
    'undo',
    'redo',
    '|',
    'fontBackgroundColor',
    'fontSize',
    'fontColor',
    'fontFamily',
    'strikethrough',
    'horizontalLine',
    'highlight',
    'alignment',
    'subscript',
    '|',
    'code',
    'codeBlock',
    'htmlEmbed',
    'restrictedEditingException',
    'specialCharacters',
    'superscript',
  ],
  image:{
    styles: [
      'alignLeft', 
      'alignCenter', 
      'alignRight'
    ],
    // Configure the available image resize options.
    resizeOptions: [
        {
            name: 'imageResize:original',
            label: 'Original',
            value: null
        },
        {
            name: 'imageResize:25',
            label: '25%',
            value: '25'
        },
        {
            name: 'imageResize:50',
            label: '50%',
            value: '50'
        },
        {
            name: 'imageResize:75',
            label: '75%',
            value: '75'
        }
    ],
    // You need to configure the image toolbar, too, so it shows the new style
    // buttons as well as the resize buttons.
    toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'imageResize',
        '|',
        'imageTextAlternative'
    ]
  }
};

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        config={configuration}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;