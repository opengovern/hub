

import { useEffect, useState } from 'react'
import { CodeEditor } from '@cloudscape-design/components'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'


interface IRenderObjectProps {
    obj: any
}

export function RenderObject({ obj }: IRenderObjectProps) {
    const [ace, setAce] = useState()
    const [preferences, setPreferences] = useState(undefined)

 useEffect(() => {
       
    }, [])

    return (
      /* <List>
            {Object.keys(obj).length > 0 &&
                Object.keys(obj).map((key) => {
                    if (typeof obj[key] === 'object' && obj[key] !== null) {
                        if (Object.keys(obj[key]).length === 0) {
                            return null
                        }
                        return (
                            <div>
                                {key !== '0' && (
                                    <Title className="mt-6">
                                        {changeKeysToLabel
                                            ? snakeCaseToLabel(key)
                                            : key}
                                    </Title>
                                )}
                                <RenderObject obj={obj[key]} />
                            </div>
                        )
                    }

                    return (
                        <ListItem key={key} className="py-6 flex items-start">
                            <Text>
                                {changeKeysToLabel
                                    ? snakeCaseToLabel(key)
                                    : key}
                            </Text>
                            <Text className="text-gray-800 w-3/5 whitespace-pre-wrap text-end">
                                {String(obj[key])}
                            </Text>
                        </ListItem>
                    )
                })}
        </List> */
      // <Card className="px-1.5 py-3 mb-2">
      //     <ReactJson
      //         src={obj}
      //         style={{
      //             lineBreak: 'anywhere',
      //         }}
      //     />
      // </Card>
      //   <CodeEditor
      //     // className='h-full'
      //     ace={ace}
      //     language="sql"
      //     // value={JSON.stringify(obj, null, "\t")}
      //     value={obj.toString()}
      //     languageLabel="SQL"
      //     onChange={({ detail }) => {
      //       // setSavedQuery('')
      //       // setCode(detail.value)
      //     }}
      //     editorContentHeight={350}
      //     preferences={preferences}
      //     onPreferencesChange={(e) =>
      //       // @ts-ignore
      //       setPreferences(e.detail)
      //     }
      //     loading={false}

      //     themes={{
      //       dark: ["cloud_editor_dark", "twilight"],
      //       light: ["xcode", "cloud_editor", "sqlserver"],
      //       // @ts-ignore
      //     }}
      //   />
      <SyntaxHighlighter
        showLineNumbers={true}
        showInlineLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={{ height: "400px", textWrap: "wrap", width: "100%" }}
        CodeTag={({ children, ...props }) => (
            <code {...props} style={{...props.style,whiteSpace:"break-spaces"}} >
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
