import useFabric from "@/hooks/useFabric";
import * as fabric from "fabric";
import {
  Circle,
  Octagon,
  Square,
  Triangle,
  Star,
  Hexagon,
  Heart,
  Diamond,
  Pentagon,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Plus,
  Minus,
  X,
  Check,
  Cloud,
  Moon,
  Sun,
} from "lucide-react";

const items = [
  { title: "circle", icon: Circle, type: "Circle" },
  { title: "square", icon: Square, type: "Square" },
  { title: "triangle", icon: Triangle, type: "Triangle" },
  { title: "octagon", icon: Octagon, type: "Octagon" },
  { title: "star", icon: Star, type: "Star" },
  { title: "hexagon", icon: Hexagon, type: "Hexagon" },
  { title: "heart", icon: Heart, type: "Heart" },
  { title: "diamond", icon: Diamond, type: "Diamond" },
  { title: "pentagon", icon: Pentagon, type: "Pentagon" },
  { title: "arrow right", icon: ArrowRight, type: "ArrowRight" },
  { title: "arrow left", icon: ArrowLeft, type: "ArrowLeft" },
  { title: "arrow up", icon: ArrowUp, type: "ArrowUp" },
  { title: "arrow down", icon: ArrowDown, type: "ArrowDown" },
  { title: "chevron right", icon: ChevronRight, type: "ChevronRight" },
  { title: "chevron left", icon: ChevronLeft, type: "ChevronLeft" },
  { title: "chevron up", icon: ChevronUp, type: "ChevronUp" },
  { title: "chevron down", icon: ChevronDown, type: "ChevronDown" },
  { title: "plus", icon: Plus, type: "Plus" },
  { title: "minus", icon: Minus, type: "Minus" },
  { title: "x", icon: X, type: "X" },
  { title: "check", icon: Check, type: "Check" },
  { title: "cloud", icon: Cloud, type: "Cloud" },
  { title: "moon", icon: Moon, type: "Moon" },
  { title: "sun", icon: Sun, type: "Sun" },
];

export default function ElementsGallery() {
  const { addCustomShape } = useFabric();
  function createElement(type) {
    let shape;
    switch (type) {
      case "Circle":
        shape = new fabric.Circle({
          top: 50,
          left: 50,
          radius: 25,
          fill: "blue",
        });
        break;
      case "Square":
        shape = new fabric.Rect({
          top: 50,
          left: 50,
          width: 50,
          height: 50,
          fill: "blue",
        });
        break;
      case "Triangle":
        shape = new fabric.Triangle({
          top: 50,
          left: 50,
          width: 50,
          height: 50,
          fill: "blue",
        });
        break;
      case "Octagon":
        shape = new fabric.Polygon(
          [
            { x: 25, y: 0 },
            { x: 75, y: 0 },
            { x: 100, y: 25 },
            { x: 100, y: 75 },
            { x: 75, y: 100 },
            { x: 25, y: 100 },
            { x: 0, y: 75 },
            { x: 0, y: 25 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
          }
        );
        break;
      case "Star":
        shape = new fabric.Polygon(
          [
            { x: 50, y: 0 },
            { x: 61, y: 35 },
            { x: 98, y: 35 },
            { x: 68, y: 57 },
            { x: 79, y: 91 },
            { x: 50, y: 70 },
            { x: 21, y: 91 },
            { x: 32, y: 57 },
            { x: 2, y: 35 },
            { x: 39, y: 35 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
          }
        );
        break;
      case "Hexagon":
        shape = new fabric.Polygon(
          [
            { x: 50, y: 0 },
            { x: 100, y: 25 },
            { x: 100, y: 75 },
            { x: 50, y: 100 },
            { x: 0, y: 75 },
            { x: 0, y: 25 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
          }
        );
        break;
      case "Heart":
        shape = new fabric.Path(
          "M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z",
          {
            top: 50,
            left: 50,
            fill: "blue",
          }
        );
        break;
      case "Diamond":
        shape = new fabric.Polygon(
          [
            { x: 50, y: 0 },
            { x: 100, y: 50 },
            { x: 50, y: 100 },
            { x: 0, y: 50 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
          }
        );
        break;
      case "Pentagon":
        shape = new fabric.Polygon(
          [
            { x: 50, y: 0 },
            { x: 100, y: 38 },
            { x: 81, y: 100 },
            { x: 19, y: 100 },
            { x: 0, y: 38 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
          }
        );
        break;
      case "ArrowRight":
        shape = new fabric.Polygon(
          [
            { x: 0, y: 25 },
            { x: 50, y: 25 },
            { x: 50, y: 0 },
            { x: 100, y: 50 },
            { x: 50, y: 100 },
            { x: 50, y: 75 },
            { x: 0, y: 75 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ArrowLeft":
        shape = new fabric.Polygon(
          [
            { x: 100, y: 25 },
            { x: 50, y: 25 },
            { x: 50, y: 0 },
            { x: 0, y: 50 },
            { x: 50, y: 100 },
            { x: 50, y: 75 },
            { x: 100, y: 75 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ArrowUp":
        shape = new fabric.Polygon(
          [
            { x: 25, y: 100 },
            { x: 25, y: 50 },
            { x: 0, y: 50 },
            { x: 50, y: 0 },
            { x: 100, y: 50 },
            { x: 75, y: 50 },
            { x: 75, y: 100 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ArrowDown":
        shape = new fabric.Polygon(
          [
            { x: 25, y: 0 },
            { x: 25, y: 50 },
            { x: 0, y: 50 },
            { x: 50, y: 100 },
            { x: 100, y: 50 },
            { x: 75, y: 50 },
            { x: 75, y: 0 },
          ],
          {
            top: 50,
            left: 50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ChevronRight":
        shape = new fabric.Polygon(
          [
            { x: -25, y: -25 },
            { x: -25, y: +25 },
            { x: +25, y: +25 },
            { x: +25, y: -25 },
            { x: +75, y: +0 },
          ],
          {
            top: +50,
            left: +50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ChevronLeft":
        shape = new fabric.Polygon(
          [
            { x: +25, y: -25 },
            { x: +25, y: +25 },
            { x: -25, y: +25 },
            { x: -25, y: -25 },
            { x: -75, y: +0 },
          ],
          {
            top: +50,
            left: +50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ChevronUp":
        shape = new fabric.Polygon(
          [
            { x: -25, y: +0 },
            { x: +0, y: -75 },
            { x: +25, y: +0 },
            { x: +10, y: +0 },
            { x: +10, y: +40 },
            { x: -10, y: +40 },
            { x: -10, y: +0 },
          ],
          {
            top: +50,
            left: +50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "ChevronDown":
        shape = new fabric.Polygon(
          [
            { x: -25, y: +0 },
            { x: +0, y: +75 },
            { x: +25, y: +0 },
            { x: +10, y: +0 },
            { x: +10, y: -40 },
            { x: -10, y: -40 },
            { x: -10, y: +0 },
          ],
          {
            top: +50,
            left: +50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "Plus":
        shape = new fabric.Polygon(
          [
            // Adjusted coordinates for centering
            { x: -20, y: -20 },
            { x: -20, y: +20 },
            { x: -20, y: +20 },
            // Middle horizontal bar
            // Middle vertical bar
            // Right vertical bar
            // Bottom horizontal bar
            // Left vertical bar
            // Top horizontal bar
          ],
          {
            top: +50,
            left: +50,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "Minus":
        shape = new fabric.Rect({
          top: +60,
          left: +60,
          width: +100,
          height: +20,
          fill: "blue",
        });
        break;

      case "X":
        shape = new fabric.Polygon(
          [
            // Adjusted coordinates for centering
            // Create an X shape with appropriate coordinates
          ],
          {
            top: +60,
            left: +60,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "Check":
        shape = new fabric.Polygon(
          [
            // Adjusted coordinates for centering
            // Create a checkmark shape with appropriate coordinates
          ],
          {
            top: +60,
            left: +60,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "Cloud":
        shape = new fabric.Path(
          "M10.00,-15.00 C-12.00,-15.00 -12.00,-5.00 -12.00,-5.00 C-12.00,-5.00 -15.00,-5.00 -15.00,-5.00 C-15.00,-5.00 -15.00,-15.00 -15.00,-15.00 C-15.00,-15.00 -12.00,-20.00 -12.00,-20.00 C-12.00,-20.00 -8.00,-20.00 -8.00,-20.00 C-8.00,-20.00 -5.00,-18.00 -5.00,-18.00 C-5.00,-18.00 -2.00,-18.00 -2.00,-18.00 C-2.00,-18.00 -1.30,-15.70 -1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 C-1.-15 ",
          {
            top: +60,
            left: +60,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "Moon":
        shape = new fabric.Path(
          "M+40,+40 Q+30,+30 +40,+20 Q+30,+10 +40,+10 Q+30,+30 +40,+40 z",
          {
            top: +60,
            left: +60,
            fill: "blue",
            originX: "center",
            originY: "center",
          }
        );
        break;

      case "Sun":
        shape = new fabric.Polygon(
          [
            // Adjusted coordinates for centering
            // Create a sun shape with appropriate coordinates
          ],
          {
            top: +60,
            left: +60,
            fill: "yellow", // Sun is typically yellow
            originX: "center",
            originY: "center",
          }
        );
        break;

      default:
        return;
    }
    addCustomShape(shape);
  }
  return (
    <section className="flex flex-col px-2 space-y-4">
      <p className="text-sm font-medium">Elements</p>
      <div>
        <ul className="grid md:grid-cols-4 px-2 gap-2 place-items-center">
          {items.map((elem, i) => (
            <li
              key={i}
              onClick={() => createElement(elem.type)}
              className="flex cursor-pointer hover:bg-blue-50 p-2 items-center justify-center rounded-lg shadow-sm border"
            >
              <elem.icon className="size-12 stroke-1 text-center text-gray-800" />
              {/* {elem.title} */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
