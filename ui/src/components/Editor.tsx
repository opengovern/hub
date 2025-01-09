

import { useContext, useEffect, useState } from 'react'
import { CodeEditor } from '@cloudscape-design/components'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  twilight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeContext } from '../Theme';
// import { stackoverflowLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


interface IRenderObjectProps {
    obj: any
}

export function RenderObject({ obj }: IRenderObjectProps) {
    const { theme, changeTheme } = useContext(ThemeContext);
    const [themeValue,setThemeValue] = useState("")

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
    }, [theme])

    return (
      <SyntaxHighlighter
        showLineNumbers={true}
        showInlineLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={{ height: "350px", textWrap: "wrap", width: "100%" }}
        CodeTag={({ children, ...props }) => (
          <code
            {...props}
            style={{ ...props.style, whiteSpace: "break-spaces" }}
          >
            {children}
          </code>
        )}
        language="sql"
        style={dracula}
      >
        {obj}
      </SyntaxHighlighter>
    );
}
