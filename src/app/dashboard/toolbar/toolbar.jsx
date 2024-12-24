import useFabric from "@/hooks/useFabric";
import { TextEdit } from "./text-edit";

export function EditorToolbar() {
  const { selected } = useFabric();
  return (
    <div className="flex items-center justify-end gap-2 py-2 px-4 border rounded-md">
      {selected?.type === "text" && <TextEdit />}
    </div>
  );
}
