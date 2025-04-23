import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const data = [
    { colorName: "Dark moderate pink", colorCode: "#a04a64" },
    { colorName: "Dark moderate green", colorCode: "#64a04a" },
    { colorName: "Very dark blue", colorCode: "#01356b" },
    { colorName: "Strong yellow", colorCode: "#cdb332" },
  ];

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
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

            {/* <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={()=> setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>Blue</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
