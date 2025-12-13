import React, { useEffect, useState } from "react";
import cursor1 from './cursor3d.png'
import pointer from './cursorPointer.png'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateCursor = e => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect cursor type based on element
      const target = e.target;
      const tagName = target.tagName.toLowerCase();
      const computedStyle = window.getComputedStyle(target);
      const cursor = computedStyle.cursor;

      if (
        cursor === "pointer" ||
        tagName === "a" ||
        tagName === "button" ||
        target.onclick
      ) {
        setCursorType("pointer");
      } else if (
        cursor === "text" ||
        tagName === "input" ||
        tagName === "textarea" ||
        target.contentEditable === "true"
      ) {
        setCursorType("text");
      } else if (cursor === "grab" || target.draggable) {
        setCursorType("grab");
      } else if (cursor === "grabbing") {
        setCursorType("grabbing");
      } else if (cursor === "move") {
        setCursorType("move");
      } else if (cursor.includes("resize")) {
        setCursorType(cursor);
      } else if (cursor === "not-allowed" || target.disabled) {
        setCursorType("not-allowed");
      } else if (cursor === "wait" || cursor === "progress") {
        setCursorType("wait");
      } else if (cursor === "crosshair") {
        setCursorType("crosshair");
      } else if (cursor === "zoom-in") {
        setCursorType("zoom-in");
      } else if (cursor === "zoom-out") {
        setCursorType("zoom-out");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const getCursorStyle = () => {
    const baseStyle = {
      left: `${position.x}px`,
      top: `${position.y}px`,
    };

    switch (cursorType) {
      case "pointer":
        return { ...baseStyle, width: "20px", height: "20px" };
      case "text":
        return baseStyle;
      case "grab":
      case "grabbing":
        return { ...baseStyle, width: "24px", height: "24px" };
      case "move":
        return { ...baseStyle, width: "24px", height: "24px" };
      case "not-allowed":
        return { ...baseStyle, width: "24px", height: "24px" };
      case "wait":
        return { ...baseStyle, width: "24px", height: "24px" };
      case "crosshair":
        return baseStyle;
      case "zoom-in":
      case "zoom-out":
        return { ...baseStyle, width: "24px", height: "24px" };
      default:
        return baseStyle;
    }
  };

  const renderCursor = () => {
    switch (cursorType) {
      case "pointer":
        return (
            <img src={pointer} className="size-[30px] -scale-x-100" />
        //   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        //     <path
        //       d="M5.5 3L5.5 13.5L8.5 10.5L10.5 15.5L12.5 14.5L10.5 9.5L14 9.5L5.5 3Z"
        //       fill="white"
        //       stroke="black"
        //       strokeWidth="0.5"
        //     />
        //   </svg>
        );

      case "text":
        return (
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path
              d="M8 2V18M4 2H12M4 18H12"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case "grab":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 8V5C8 4.44772 8.44772 4 9 4C9.55228 4 10 4.44772 10 5V8M10 8V5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5V8M12 8V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 4.44772 14 5V8M14 8V9M14 8V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V11C16 14.866 12.866 18 9 18C5.68629 18 3 15.3137 3 12V10C3 9.44772 3.44772 9 4 9C4.55228 9 5 9.44772 5 10V12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12V9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9V11"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
          </svg>
        );

      case "grabbing":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 11V8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8V11M10 11V8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8V11M12 11V8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8V11M14 11V12M14 11V8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8V14C16 17.866 12.866 21 9 21C5.68629 21 3 18.3137 3 15V13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13V15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15V12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12V14"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
          </svg>
        );

      case "move":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3L12 21M12 3L9 6M12 3L15 6M12 21L9 18M12 21L15 18M3 12L21 12M3 12L6 9M3 12L6 15M21 12L18 9M21 12L18 15"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
          </svg>
        );

      case "not-allowed":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="black"
              strokeWidth="1.5"
              fill="white"
            />
            <path
              d="M6 6L18 18"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case "wait":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="animate-spin"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="black"
              strokeWidth="1.5"
              fill="white"
              opacity="0.25"
            />
            <path
              d="M12 3C16.9706 3 21 7.02944 21 12"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case "crosshair":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="8"
              stroke="black"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M12 4V8M12 16V20M4 12H8M16 12H20"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        );

      case "zoom-in":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="10"
              cy="10"
              r="6"
              stroke="black"
              strokeWidth="1.5"
              fill="white"
            />
            <path
              d="M10 7V13M7 10H13"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15 15L20 20"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );

      case "zoom-out":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="10"
              cy="10"
              r="6"
              stroke="black"
              strokeWidth="1.5"
              fill="white"
            />
            <path
              d="M7 10H13"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15 15L20 20"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );

      default:
        return (
            <img src={cursor1} className="size-[30px]" />
        //   <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        //     <path
        //       d="M2 2L2 16L6 12L9 18L11 17L8 11L14 11L2 2Z"
        //       fill="white"
        //       stroke="black"
        //       strokeWidth="1"
        //     />
        //   </svg>
        );
    }
  };

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-200"
      style={{
        ...getCursorStyle(),
        opacity: isVisible ? 1 : 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      {renderCursor()}
    </div>
  );
};

export default Cursor;

// // Demo Component
// export default function CursorCheck() {
//   const [isDragging, setIsDragging] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <Cursor />

//       <style>{`
//         * {
//           cursor: none !important;
//         }
//       `}</style>

//       <div className="max-w-6xl mx-auto space-y-8">
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">
//           Mac-Style Cursor Demo
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Default */}
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="font-semibold mb-2">Default Cursor</h3>
//             <p className="text-gray-600">Move your cursor here</p>
//           </div>

//           {/* Pointer */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-pointer">
//             <h3 className="font-semibold mb-2">Pointer</h3>
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//               Hover me
//             </button>
//           </div>

//           {/* Text */}
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="font-semibold mb-2">Text Cursor</h3>
//             <input
//               type="text"
//               placeholder="Type here..."
//               className="w-full px-3 py-2 border rounded-lg"
//             />
//           </div>

//           {/* Grab */}
//           <div
//             className="bg-white p-6 rounded-xl shadow-md cursor-grab active:cursor-grabbing"
//             draggable
//             onDragStart={() => setIsDragging(true)}
//             onDragEnd={() => setIsDragging(false)}
//           >
//             <h3 className="font-semibold mb-2">Grab</h3>
//             <p className="text-gray-600">Drag me</p>
//           </div>

//           {/* Move */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-move">
//             <h3 className="font-semibold mb-2">Move</h3>
//             <p className="text-gray-600">Move cursor here</p>
//           </div>

//           {/* Not Allowed */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-not-allowed">
//             <h3 className="font-semibold mb-2">Not Allowed</h3>
//             <button
//               disabled
//               className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg"
//             >
//               Disabled
//             </button>
//           </div>

//           {/* Wait/Progress */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-wait">
//             <h3 className="font-semibold mb-2">Wait</h3>
//             <p className="text-gray-600">Loading state</p>
//           </div>

//           {/* Crosshair */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-crosshair">
//             <h3 className="font-semibold mb-2">Crosshair</h3>
//             <p className="text-gray-600">Precision selection</p>
//           </div>

//           {/* Zoom In */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-zoom-in">
//             <h3 className="font-semibold mb-2">Zoom In</h3>
//             <p className="text-gray-600">Click to zoom</p>
//           </div>

//           {/* Zoom Out */}
//           <div className="bg-white p-6 rounded-xl shadow-md cursor-zoom-out">
//             <h3 className="font-semibold mb-2">Zoom Out</h3>
//             <p className="text-gray-600">Click to zoom out</p>
//           </div>

//           {/* Text Area */}
//           <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
//             <h3 className="font-semibold mb-2">Text Area</h3>
//             <textarea
//               placeholder="Type longer text here..."
//               className="w-full px-3 py-2 border rounded-lg h-24 resize-none"
//             />
//           </div>

//           {/* Links */}
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="font-semibold mb-2">Links</h3>
//             <a href="#" className="text-blue-500 hover:underline">
//               Click this link
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
