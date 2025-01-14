

import { useContext, useEffect, useRef, useState } from 'react'
import { CodeEditor } from '@cloudscape-design/components'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  twilight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeContext } from '../Theme';
// import { stackoverflowLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import "ace-builds/css/ace.css";
import "ace-builds/css/theme/cloud_editor.css";
import "ace-builds/css/theme/cloud_editor_dark.css";
import "ace-builds/css/theme/cloud_editor_dark.css";
import "ace-builds/css/theme/twilight.css";
import "ace-builds/css/theme/sqlserver.css";
import "ace-builds/css/theme/xcode.css";


interface IRenderObjectProps {
    obj: any
    height: number
}

export function Editor({ obj, height }: IRenderObjectProps) {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [themeValue, setThemeValue] = useState("");

  useEffect(() => {
    switch (theme) {
      case "light":
        setThemeValue("light");
        break;
      case "dark":
        setThemeValue("dark");
        break;
      case "system":
        if (window.matchMedia) {
          // Check if the dark-mode Media-Query matches
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setThemeValue("dark");
          } else {
            setThemeValue("light");
          }
        } else {
          setThemeValue("dark");
        }
        break;

      default:
        setThemeValue("light");
        break;
    }
  }, [theme]);
     const [ace, setAce] = useState();
     const [preferences, setPreferences] = useState(undefined);
     const aceRef = useRef(null)

     useEffect(() => {
       async function loadAce() {
         const ace = await import("ace-builds");
         await import("ace-builds/webpack-resolver");
         ace.config.set("useStrictCSP", true);
        
         
         
         // ace.config.setMode('ace/mode/sql')
         // @ts-ignore
         // ace.edit(element, {
         //     mode: 'ace/mode/sql',
         //     selectionStyle: 'text',
         // })

         return ace;
       }

       loadAce()
         .then((ace) => {
           // @ts-ignore
           setAce(ace);
           
         })
         .finally(() => {});
     }, []);

     useEffect(()=>{
      console.log(aceRef)
       // @ts-ignore
       aceRef?.current?.editor?.session?.foldAll(
         1,
         // @ts-ignore
         aceRef?.current?.editor?.session?.doc.getAllLines().length
       );
     },[aceRef])

  return (
  
    <div className="w-full">
      <CodeEditor
        // className='h-full'
        ace={ace}
        ref={aceRef}
        language="yaml"
        value={obj}
        languageLabel="Yaml"
        onChange={({ detail }) => {
          // setSavedQuery('')
          // setCode(detail.value)
        }}
        editorContentHeight={height}
        preferences={preferences}
        
        onPreferencesChange={(e) =>
          // @ts-ignore
          setPreferences(e.detail)
        }
        loading={false}
        themes={{
          dark: ["cloud_editor_dark", "twilight"],
          light: ["xcode", "cloud_editor", "sqlserver"],
          // @ts-ignore
        }}
      />
    </div>
  );
}
