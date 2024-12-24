/* eslint-disable react/prop-types */
import {
  DashboardIcon,
  ElementsIcon,
  LinkedinIcon,
  TextIcon,
  TwitterIcon,
} from "@/assets";
// import useTemplate from "@/hooks/userTemplate";
import { useState } from "react";
import ElementsGallery from "../sidebar.jsx/elements";
import TextGallery from "../sidebar.jsx/text";

const navItems = [
  {
    title: "templates",
    icon: DashboardIcon,
  },
  {
    title: "text",
    icon: TextIcon,
  },
  {
    title: "elements",
    icon: ElementsIcon,
  },
];

const socials = [
  {
    name: "twitter",
    icon: TwitterIcon,
  },
  {
    name: "Linkedin",
    icon: LinkedinIcon,
  },
];

// const templates = [
//   {
//     id: "template-1",
//     name: "Minimalist",
//     thumbnail: "/woman1.jpeg",
//     config: {
//       header: { backgroundColor: "#ffffff", height: 120 },
//       profilePicture: { size: 100, position: { x: 50, y: 50 } },
//       text: [
//         {
//           id: "name",
//           default: "John Doe",
//           style: { fontSize: 24, color: "#333" },
//         },
//       ],
//     },
//   },
// ];
export function Sidebar() {
  const [activeSelection, setActiveSelection] = useState("templates");
  return (
    <aside className="w-full h-dvh border border-r py-4 space-y-3 px-2">
      <div className="flex items-center justify-center w-full">
        <ul className="flex items-center justify-center space-x-4 rounded-xl shadow-sm border p-2">
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => setActiveSelection(item.title)}
              className={`${
                activeSelection === item.title ? "bg-blue-200" : ""
              } flex items-center cursor-pointer hover:bg-blue-100 transition-all ease-out rounded-lg p-2`}
            >
              {item.icon && <item.icon className="size-6 text-zinc-700" />}
            </li>
          ))}
        </ul>
      </div>

      {activeSelection === "templates" && (
        <section className="w-full">
          <p className="text-sm font-medium">Social</p>
          <div className="w-full">
            <ul className="flex items-center justify-start w-full p-1 space-x-2">
              {socials.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center border rounded-full space-x-2 hover:bg-gray-100 px-2 py-1"
                >
                  {item.icon && <item.icon className="size-3 text-gray-700" />}
                  <span className="text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <ul className="flex flex-col items-start px-8 py-4 space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
            >
              {item.icon && <item.icon className="size-5" />}
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul> */}
        </section>
      )}

      {activeSelection === "text" && <TextGallery />}

      {activeSelection === "elements" && <ElementsGallery />}
      {/* <TemplateGallery templates={templates} /> */}
    </aside>
  );
}

// const TemplateGallery = ({ templates }) => {
//   const { setTemplate } = useTemplate();
//   const handleSelect = (template) => {
//     setTemplate(template.config);
//   };

//   return (
//     <div className="flex flex-col flex-shrink-0 items-start h-[calc(100%-20rem)] overflow-y-scroll gap-4">
//       {/* {templates.map((template) => (
//         <div key={template.id} onClick={() => handleSelect(template)}>
//           <img
//             className="rounded-full size-10 object-cover"
//             src={template.thumbnail}
//             alt={template.name}
//           />
//           <p>{template.name}</p>
//         </div>
//       ))} */}
//       {/* <div className="h-auto grid grid-cols-1"> */}
//       {/* <ProfileCard /> */}
//       {/* <ProfileCard />
//         <ProfileCard />
//         <ProfileCard />
//         <ProfileCard />
//         <ProfileCard />
//         <ProfileCard /> */}
//       {/* </div> */}
//     </div>
//   );
// };

// function ProfileCard({
//   displayName = "Sarah Johnson",
//   username = "sarahjohnson",
//   coverImage = "/placeholder.svg?height=200&width=600",
//   profileImage = "https://eu.ui-avatars.com/api/?name=John+Doe",
// }) {
//   return (
//     <div className="w-full max-w-sm  mx-auto border rounded-md overflow-hidden">
//       <div className="relative">
//         {/* Cover Image */}
//         <div className="h-24 sm:h-24">
//           <img
//             src={coverImage}
//             alt=""
//             className="w-full h-full object-cover"
//             width={600}
//             height={200}
//           />
//         </div>

//         {/* Profile Image */}
//         <div className="absolute left-4 -bottom-16">
//           <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-background overflow-hidden">
//             <img
//               src={profileImage}
//               alt={displayName}
//               className="h-full w-full object-cover"
//               width={96}
//               height={96}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Profile Info */}
//       <div className="px-4 pb-4 pt-20">
//         <h1 className="font-bold text-xl">{displayName}</h1>
//         <p className="text-muted-foreground">@{username}</p>
//       </div>
//     </div>
//   );
// }
