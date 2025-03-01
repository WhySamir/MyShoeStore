import React, { useState, useEffect, useCallback } from "react";
import { SlidersHorizontal, Compass } from "lucide-react";

import { useNavigate } from "react-router-dom";
const sneakers = [
  {
    Name: "Nike Air Sabrina 2",
    size: 36,
    img: "I.png",
    price: 2400,
    color: 3,
    Catgory: "Men",
    colorArray: ["IC1.png", "IC2.png", "IC3.png"],
    thumbnail: {
      color1: [
        "W1.png",
        "W2.png",
        "W3.png",
        "W4.png",
        "W5.png",
        "W6.png",
        "W7.png",
      ],
      color2: [
        "W21.png",
        "W22.png",
        "W23.png",
        "W24.png",
        "W25.png",
        "W26.png",
        "W27.png",
      ],
      color3: [
        "W31.png",
        "W32.png",
        "W33.png",
        "W34.png",
        "W35.png",
        "W36.png",
        "W37.png",
      ],
    },
    id: "1",
  },
  {
    Name: "Adidas Ultraboost 24",
    size: 40,
    img: "I2.png",
    price: 3300,
    color: 4,
    Catgory: "Trending",
    colorArray: ["IC1.png", "IC2.png", "IC3.png", "IC4.png"],
    thumbnail: {
      color1: [
        "W8.png",
        "W9.png",
        "W10.png",
        "W11.png",
        "W12.png",
        "W13.png",
        "W14.png",
      ],
      color2: [
        "W15.png",
        "W16.png",
        "W17.png",
        "W18.png",
        "W19.png",
        "W20.png",
        "W21.png",
      ],
      color3: [
        "W22.png",
        "W23.png",
        "W24.png",
        "W25.png",
        "W26.png",
        "W27.png",
        "W28.png",
      ],
      color4: [
        "W29.png",
        "W30.png",
        "W31.png",
        "W32.png",
        "W33.png",
        "W34.png",
        "W35.png",
      ],
    },
    id: "2",
  },
  {
    Name: "Puma RS-X3",
    size: 32,
    img: "k.png",
    price: 2100,
    color: 2,
    Catgory: "Women",
    colorArray: ["IC1.png", "IC2.png"],
    thumbnail: {
      color1: [
        "W36.png",
        "W37.png",
        "W38.png",
        "W39.png",
        "W40.png",
        "W41.png",
        "W42.png",
      ],
      color2: [
        "W43.png",
        "W44.png",
        "W45.png",
        "W46.png",
        "W47.png",
        "W48.png",
        "W49.png",
      ],
    },
    id: "3",
  },
  {
    Name: "Reebok Nano X3",
    size: 28,
    img: "I5.png",
    price: 3700,
    color: 1,
    Catgory: "Kids",
    colorArray: ["IC1.png"],
    thumbnail: {
      color1: [
        "W50.png",
        "W51.png",
        "W52.png",
        "W53.png",
        "W54.png",
        "W55.png",
        "W56.png",
      ],
    },
    id: "4",
  },
];
const MainPage = () => {
  const navigate = useNavigate();
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [selectedSize, setSelectedSize] = useState(41);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const sizes = [39, 40, 41, 42, 43];
  const colors = ["#8B4513", "#000000", "#F5DEB3"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);
  const handleShoeClick = (shoe) => {
    navigate("/addtoCart", {
      state: { selectedId: { id: shoe.id }, selectedImage: shoe },
    });
  };
  return (
    <>
      <div className="relative top-[3.75rem] MainPage bg-[#edf3f8] w-full ">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-10  my-8 2xl:my-16">
          {/* Left: Search and Sneaker Text (60%) */}
          <div className="col-span-6 flex flex-col justify-center ">
            <div className="flex justify-between items-start gap-1 mb-8">
              {/* Search Input */}
              <div className="flex bg-white rounded-lg max-w-xs">
                <input
                  className="p-3 pl-4 md:pl-8 w-[8rem] sm:w-[10rem] lg:w-[40rem] text-base sm:text-lg outline-none rounded-lg"
                  type="text"
                  placeholder="Search here..."
                />
                <div className="bg-black py-4 px-4 rounded-lg">
                  <SlidersHorizontal className="text-white" />
                </div>
              </div>

              {/* Percentage and Line Section */}
              <div className="Ccenter  flex flex-col gap-1  ">
                <h1 className="font-bold text-xl sm:text-3xl">60%</h1>
                <div className=" flex items-center">
                  <div className="circle w-[6px] h-[6px] bg-black rounded-full"></div>
                  <div className="  bg-black h-[1px] w-16 sm:w-32"></div>
                </div>
                <p className="text-xs">SAVE UP TO</p>
              </div>
            </div>

            <div className="text-4xl  sm:text-6xl lg:text-7xl font-bold font-poppins">
              <div className="flex items-center">
                <h1>Stylish</h1>
                <div className="bouncer ml-4 xl:ml-8 w-16 h-16 relative overflow-hidden cursor-default">
                  <div
                    className="absolute inset-0 flex place-content-center justify-center z-20"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  >
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path
                        id="curve"
                        d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                        fill="transparent"
                      />
                      <text className="text-sm opacity-40  uppercase font-bold">
                        <textPath xlinkHref="#curve" startOffset="0%">
                          EXPLORE MORE &nbsp; EXPLORE MORE&nbsp;
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Compass
                        style={{
                          transform: `rotate(${rotation}deg)`,
                          opacity: 0.5,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="sm:mt-[2vh]">Sneakers</h1>
            </div>
          </div>

          {/* Right: Image and Colors (40%) */}

          <div className="hidden sm:flex  sm:col-span-4  justify-center items-center p-1 ">
            <div className="ml-4 relative w-full h-auto">
              <img
                src="/III.png"
                alt="New Jordan 6 Rings"
                className="w-full h-auto object-contain"
              />
              <div className="flex justify-end space-x-2 sm:space-x-4 mt-4 ">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`p-2 bg-white/50 h-12 w-12 rounded-xl flex justify-center items-center shadow-lg ${
                      selectedColor === color ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <button
                      className="border border-white w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-10  gap-y-12 xl:mt-10 2xl:mt-16 ">
          {/* Left: Sneaker Carousel (60%) */}
          <div className="AnimateCarousel col-span-6 pt-6  w-full">
            <div className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
              {sneakers.map((shoe) => (
                <div
                  key={shoe.id}
                  className="bg-white rounded-lg  flex-none"
                  style={{ minWidth: "calc(26% )" }}
                >
                  <div className="relative flex justify-center items-end w-full bg-gray-200 rounded-t-lg">
                    <div className="custom-shape-divider-top-1728159301">
                      <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                          className="shape-fill"
                        ></path>
                      </svg>
                    </div>
                    <img
                      src={`/${shoe.img}`}
                      alt={shoe.Name}
                      className="object-contain w-32 h-32 xl:w-36 xl:h-36 2xl:h-60 2xl:w-60"
                    />
                    <div className="absolute bottom-[-16px] flex justify-center items-center z-10">
                      <div
                        className="w-14 h-14 rounded-full bg-white flex justify-center items-center"
                        onClick={() => handleShoeClick(shoe)}
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-300 flex justify-center items-center">
                          <span className="text-white text-xl cursor-default">
                            +
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SVG shape divider */}
                    <div className="custom-shape-divider-bottom-1728044560">
                      <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                          className="shape-fill"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold">{shoe.Name}</h3>
                    <p className="text-sm">{shoe.color} colors</p>
                    <p className="font-bold">{shoe.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* hiddenIII */}
          <div className="flex flex-col gap-y-12">
            <div className="block  sm:hidden relative w-full h-auto">
              <img
                src="/III.png"
                alt="New Jordan 6 Rings"
                className="w-full h-auto object-contain"
              />
              <div className="flex justify-end space-x-2 sm:space-x-4 mt-4">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`p-2 bg-white/50 h-12 w-12 rounded-xl flex justify-center items-center shadow-lg ${
                      selectedColor === color ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <button
                      className="border border-white w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Size Selector (40%) */}
            <div className="  SizeAnimation col-span-4 flex justify-start h-full ">
              <div className="  w-full sm:max-w-sm 2xl:max-w-md h-full flex flex-col">
                <div className=" bg-black  pb-2  lg:pb-4  px-6 xl:px-12 rounded-t-xl backdrop-blur-lg  text-white w-full sm:w-[calc(40vw)] 2xl:w-[calc(39vw)] flex-grow flex flex-col justify-between">
                  <div className="custom-shape-divider-top-1728159301 fill-[#edf3f8]  sm:fill-[#b3e5fc] ">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className=" fill-[#edf3f8]  sm:fill-[#b3e5fc] "
                      ></path>
                    </svg>
                  </div>
                  <div className=" flex justify-between items-center ">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className={`flex flex-col items-center  transition-all  ${
                          selectedSize === size
                            ? "transform scale-140 -translate-y-6"
                            : ""
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {selectedSize === size && (
                          <div
                            className="h-10 w-20 bg-black"
                            style={{
                              borderTopLeftRadius: "40px",
                              borderTopRightRadius: "40px",
                            }}
                          ></div>
                        )}
                        <div
                          className={`circle mb-2 h-2.5 w-2.5 rounded-full bg-white  ${
                            selectedSize === size
                              ? "opacity-100 absolute mt-2  "
                              : "opacity-50"
                          }`}
                        ></div>
                        <button
                          className={`w-8 h-8 text-2xl outline-none rounded-full text-white  relative ${
                            selectedSize === size
                              ? " opacity-100 font-bold absolute top-[-10px] "
                              : "opacity-50"
                          }`}
                        >
                          {size}
                        </button>
                        {selectedSize === size && (
                          <div className="text-white text-md">Size</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 xl:mt-6 flex-grow flex flex-col sm:justify-around lg:justify-center">
                    <h2 className=" sm:text-2xl lg:text-3xl sm:mb-2 lg:mb-4 font-bold">
                      Nike Blazer Low
                    </h2>
                    <div className="my-6 h-[0.2px] 2xl:h-1 w-full bg-white/40"></div>
                    <div className="flex items-center justify-between ">
                      <span className="sm:text-xl">Review 1k+</span>
                      <span className="text-yellow-400">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
