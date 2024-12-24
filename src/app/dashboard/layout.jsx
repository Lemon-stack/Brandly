import { Outlet } from "react-router";
import { Sidebar } from "./sidebar";
import Header from "./header";
import { Minus, Plus } from "lucide-react";
import { EditorToolbar } from "./toolbar/toolbar";

function Layout() {
  return (
    <div className="grid h-dvh grid-cols-1">
      <Header />

      <div className="grid grid-cols-[26%_1fr]">
        <Sidebar />
        <div className="grid grid-cols-1 h-full w-full">
          <EditorToolbar />
          <Outlet />
        </div>
      </div>

      {/* zoom controls */}
      <section className="fixed bottom-4 right-4 bg-gray-50 py-2 rounded-lg px-4 flex justify-center items-center space-x-4">
        <button className="border p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center">
          <Plus className="size-5" />
        </button>
        <div>
          <button className="p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center">
            30%
          </button>
        </div>

        <button className="border p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center">
          <Minus className="size-5" />
        </button>
      </section>
    </div>
  );
}

export default Layout;
