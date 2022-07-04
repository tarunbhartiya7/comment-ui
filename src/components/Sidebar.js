import { Resizable } from "re-resizable";

export default function Sidebar() {
  return (
    <Resizable
      className="component"
      defaultSize={{
        width: "30%",
        height: 250,
      }}
    >
      Drag the borders to resize the component
    </Resizable>
  );
}
