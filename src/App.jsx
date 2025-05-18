import { useState } from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
function App() {
  const [color, setColor] = useState("olive");
  const [visible, setVisible] = useState(false);

  const data = [
    { colorName: "Dark moderate pink", colorCode: "#a04a64" },
    { colorName: "Dark moderate green", colorCode: "#64a04a" },
    { colorName: "Very dark blue", colorCode: "#01356b" },
    { colorName: "Strong yellow", colorCode: "#cdb332" },
  ];

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState);
    if (!visible) {
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div
          onClick={toggleVisibility}
          className="fixed flex justify-center bottom-36 md:bottom-24 inset-x-0 px-2 text-white"
        >
          {!visible ? (
            <CiCircleChevUp className="size-10" />
          ) : (
            <CiCircleChevDown className="size-10" />
          )}
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          {visible && (
            <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
              {data.map((color, index) => (
                <button
                  key={index}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => setColor(color.colorCode)}
                >
                  {color.colorName}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
