import useFabric from "@/hooks/useFabric";

const textSizes = [
  {
    type: "h1",
    title: "Header 1",
    className: "text-4xl",
  },
  {
    type: "h2",
    title: "Header 2",
    className: "text-3xl",
  },
  {
    type: "h3",
    title: "Header 3",
    className: "text-2xl",
  },
  {
    type: "h4",
    title: "Header 4",
    className: "text-xl",
  },
  {
    title: "Normal text",
    className: "text-base",
  },
];

export default function TextGallery() {
  const { addText } = useFabric();
  return (
    <section>
      <p>Texts</p>
      <ul className="flex flex-col space-y-2">
        {textSizes.map((text, i) => {
          const Tag = `${text.type}`;
          return (
            <li
              className="flex cursor-pointer border px-2 rounded-md py-2"
              onClick={() => addText(text?.type, text?.title)}
              key={i}
            >
              <Tag className={text.className}>{text.title}</Tag>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
