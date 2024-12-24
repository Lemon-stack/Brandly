/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { FabricContext } from ".";

export const FabricProvider = ({ children }) => {
  const fabricRef = useRef(null);
  const canvasRef = useRef(null);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const initFabric = () => {
      fabricRef.current = new fabric.Canvas(canvasRef.current);
      fabricRef.current.setWidth(700);
      fabricRef.current.setHeight(300);

      const logSelection = () => {
        const activeObject = fabricRef?.current?.getActiveObject();
        if (activeObject) {
          setSelected(activeObject); // Log the entire active object reference
        }
      };

      fabricRef.current.on("selection:created", logSelection);
      fabricRef.current.on("selection:updated", logSelection);
    };

    const disposeFabric = () => {
      fabricRef.current.dispose();
    };

    initFabric();

    return () => {
      disposeFabric();
    };
  }, []);

  const addCustomShape = (shape) => {
    fabricRef.current.add(shape);
  };
  const addText = (type, text) => {
    let options = {};
    switch (type) {
      case "h1":
        options = { fontSize: 32, fontWeight: "bold" };
        break;
      case "h2":
        options = { fontSize: 28, fontWeight: "bold" };
        break;
      case "h3":
        options = { fontSize: 24, fontWeight: "bold" };
        break;
      case "h4":
        options = { fontSize: 20, fontWeight: "bold" };
        break;
      case "h5":
        options = { fontSize: 16, fontWeight: "bold" };
        break;
      case "h6":
        options = { fontSize: 12, fontWeight: "bold" };
        break;
      default:
        options = { fontSize: 14 };
    }
    const textObj = new fabric.Text(text, options);
    fabricRef.current.add(textObj);
  };

  return (
    <FabricContext.Provider
      value={{ fabricRef, canvasRef, addCustomShape, addText, selected }}
    >
      {children}
    </FabricContext.Provider>
  );
};
