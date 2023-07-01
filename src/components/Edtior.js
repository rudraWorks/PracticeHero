import React, { useRef, useState ,useMemo} from 'react'
import JoditEditor from "jodit-react"
import HtmlParser from "html-react-parser"

function Editor() {

    const editor = useRef(null);
	const [content, setContent] = useState('');
    const placeholder="hi"

	const config = useMemo(()=>(
		{
            toolbar:true,
			placeholder: placeholder || 'Start typings...',
            buttons:['bold','underline','italic','strikethrough','brush','fontsize','ul','ol','hr','link','align','table','image','fullsize'],
            showXPathInStatusbar:false,
            showWordsCounter:false,
            showCharsCounter:false,
            enter:'br',
            askBeforePasteHTML:false,
            // maxHeight:400
		}
    ),[placeholder])

	return (
        <div>

        
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}

            />
       
            
        </div>
	);
}

export default Editor