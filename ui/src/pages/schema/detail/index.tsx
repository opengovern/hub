import {
  Box,
  Cards,
  Link,
  Modal,
  SpaceBetween,
  Tabs,
} from "@cloudscape-design/components";
import Cal from "@calcom/embed-react";
import Setup from "../../setup";
import SchemaTables from "../tables";
import { useEffect, useState } from "react";

export default function SchemaDetail() {
  const [activeTab, setActiveTab] = useState("0");
  // find tab by url
  useEffect(()=>{
    const url = window.location.pathname.split('/')
    if(url[3] === 'schema'){
      setActiveTab('0')
    }
    else{
      setActiveTab('1')
    }
  },[])

  return (
    <>
      <div className="mx-auto pt-20 max-w-6xl">
        <Tabs
          activeTabId={activeTab}
          onChange={(e) => setActiveTab(e.detail.activeTabId)}
          tabs={[
            {
              id: "0",
              label: "Schema",
              content: <SchemaTables />,
            },
            {
              id: "1",
              label: "Setup",
              content: <Setup />,
            },
          ]}
        />
      </div>
    </>
  );
}
