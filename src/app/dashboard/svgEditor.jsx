import useFabric from "@/hooks/useFabric";

const SvgEditor = () => {
  const { canvasRef } = useFabric();
  // const [selectedElement, setSelectedElement] = useState(null); // State to store the selected element

  return <canvas className="relative rounded-lg" ref={canvasRef} />;
};

export default SvgEditor;
