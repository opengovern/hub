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

export default function SchemaDetail() {
  return (
    <>
      <div className="mx-auto pt-20 max-w-6xl">
        <Tabs
          tabs={[
            {
              id: "0",
              label: "Setup",
              content: <Setup />,
            },
            {
              id: "1",
              label: "Tables",
              content: <SchemaTables />,
            },
          ]}
        />
      </div>
    </>
  );
}
