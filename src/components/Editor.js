import React, { useRef, useState ,useMemo, useEffect} from 'react'
import JoditEditor from "jodit-react"

function Editor({setConcepts, defaultValue}) {

    const editor = useRef(null);
    const [content, setContent] = useState('<p></p>');
    const placeholder = "Ideas.., blogs..., videos..., images..., new concepts... whatever you learnt in this contest!"
    
    useEffect(()=>{
        setConcepts(content)
    },[content])

  
    const config = useMemo(() => (
      { 
        toolbar: true,
        placeholder: placeholder,
        buttonsSM: ['bold', 'underline', 'italic', 'paragraph', 'brush', 'ul', 'ol', 'hr', 'link', 'align', 'table', 'image', 'fullsize'],
        buttonsMD: ['bold', 'underline', 'italic', 'paragraph', 'brush', 'ul', 'ol', 'hr', 'link', 'align', 'table', 'image', 'fullsize'],
        buttonsLG: ['bold', 'underline', 'italic', 'paragraph', 'brush', 'ul', 'ol', 'hr', 'link', 'align', 'table', 'image', 'fullsize'],
        buttonsXS: ['bold', 'underline', 'italic', 'paragraph', 'brush', 'ul', 'ol', 'hr', 'link', 'align', 'table', 'image', 'fullsize'],
        buttons: ['bold', 'underline', 'italic', 'paragraph', 'brush', 'ul', 'ol', 'hr', 'link', 'align', 'table', 'image', 'fullsize'],
        showXPathInStatusbar: false,
        showWordsCounter: false,
        showCharsCounter: false,
        enter: 'p',
        askBeforePasteHTML: false,
      }
    ), [placeholder])
  
    return (

        <JoditEditor
          ref={editor}
          value={defaultValue || content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        //   onChange={newContent => {}}
        />
 
    );
}

export default Editor