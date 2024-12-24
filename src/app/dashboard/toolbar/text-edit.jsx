import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  // Video,
} from "lucide-react";
import { DeleteIcon, ListNumberIcon } from "@/assets";

export function TextEdit() {
  const [font, setFont] = useState("lato");
  const [fontSize, setFontSize] = useState("14");
  const [heading, setHeading] = useState("h1");
  const [format, setFormat] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  });
  const [alignment, setAlignment] = useState("left");
  const [list, setList] = useState(null);

  const fonts = [
    { value: "lato", label: "Lato" },
    { value: "arial", label: "Arial" },
    { value: "helvetica", label: "Helvetica" },
    { value: "times", label: "Times New Roman" },
  ];

  const fontSizes = ["12", "14", "16", "18", "20", "24", "30", "36"];

  const headings = [
    { value: "h1", label: "Heading 1" },
    { value: "h2", label: "Heading 2" },
    { value: "h3", label: "Heading 3" },
    { value: "h4", label: "Heading 4" },
  ];

  return (
    <div className="flex items-center text-gray-800 justify-center gap-2">
      <Select value={font} onValueChange={setFont}>
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {fonts.map((font) => (
            <SelectItem key={font.value} value={font.value}>
              {font.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={heading} onValueChange={setHeading}>
        <SelectTrigger className="w-[120px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {headings.map((heading) => (
            <SelectItem key={heading.value} value={heading.value}>
              {heading.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={fontSize} onValueChange={setFontSize}>
        <SelectTrigger className="w-[70px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {fontSizes.map((size) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="h-6 w-px bg-border" />

      <Toggle
        pressed={format.bold}
        onPressedChange={(pressed) => setFormat({ ...format, bold: pressed })}
        size="sm"
        aria-label="Toggle bold"
        className={`${
          format.bold ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <Bold className="h-4 w-4" />
      </Toggle>

      <Toggle
        pressed={format.italic}
        onPressedChange={(pressed) => setFormat({ ...format, italic: pressed })}
        size="sm"
        aria-label="Toggle italic"
        className={`${
          format.italic ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <Italic className="h-4 w-4" />
      </Toggle>

      <Toggle
        pressed={format.underline}
        onPressedChange={(pressed) =>
          setFormat({ ...format, underline: pressed })
        }
        size="sm"
        aria-label="Toggle underline"
        className={`${
          format.underline ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <Underline className="h-4 w-4" />
      </Toggle>

      <Toggle
        pressed={format.strikethrough}
        onPressedChange={(pressed) =>
          setFormat({ ...format, strikethrough: pressed })
        }
        size="sm"
        aria-label="Toggle strikethrough"
        className={`${
          format.strikethrough ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>

      <div className="h-6 w-px bg-border" />

      <Toggle
        pressed={alignment === "left"}
        onPressedChange={() => setAlignment("left")}
        size="sm"
        aria-label="Align left"
        className={`${
          alignment === "left" ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <AlignLeft className="h-4 w-4" />
      </Toggle>

      <Toggle
        pressed={alignment === "center"}
        onPressedChange={() => setAlignment("center")}
        size="sm"
        aria-label="Align center"
        className={`${
          alignment === "center" ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <AlignCenter className="h-4 w-4" />
      </Toggle>

      <Toggle
        pressed={alignment === "right"}
        onPressedChange={() => setAlignment("right")}
        size="sm"
        aria-label="Align right"
        className={`${
          alignment === "right" ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <AlignRight className="h-4 w-4" />
      </Toggle>

      <div className="h-6 w-px bg-border" />

      <Toggle
        pressed={list === "bullet"}
        onPressedChange={(pressed) => setList(pressed ? "bullet" : null)}
        size="sm"
        aria-label="Bullet list"
        className={`${
          list === "bullet" ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        pressed={list === "number"}
        onPressedChange={(pressed) => setList(pressed ? "number" : null)}
        size="sm"
        aria-label="Numbered list"
        className={`${
          list === "number" ? "bg-blue-500/20" : ""
        } transition-all ease-in-out`}
      >
        <ListNumberIcon className="h-4 w-4 text-gray-800" />
      </Toggle>

      <div className="h-6 w-px bg-border" />

      <Button variant="ghost" size="sm" className="px-2">
        <DeleteIcon className="h-4 w-4 text-gray-800" />
      </Button>
    </div>
  );
}
