import useTemplate from "@/hooks/userTemplate";
import "@svgdotjs/svg.draggable.js";
import SvgEditor from "./svgEditor";

function Home() {
  const { template } = useTemplate();
  console.log(template);
  return (
    <div className="bg-zinc-200 w-full flex items-start justify-center py-20 px-4 h-dvh">
      <div className="flex bg-zinc-50 rounded-lg items-center w-full overflow-hidden ">
        <SvgEditor />
      </div>
    </div>
  );
}

export default Home;

