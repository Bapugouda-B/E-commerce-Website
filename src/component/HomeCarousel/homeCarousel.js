import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ProductCarousel from "../ProductCarousel/ProductCarousel.js";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button } from "@mui/material";

function HomeCarousel({data, sectionName}) {
  const [activeItem, setActiveItem] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3.5 },
    1024: { items: 4.4 },
  };

  const prev = () => setActiveItem(activeItem - 1);
  const next = () => setActiveItem(activeItem + 1);

  const syncAvctiveItems = ({ item }) => setActiveItem(item);

  const items = data.map((item) => <ProductCarousel product={item} />);
  return (
    <div className="border">
      <h2 className="text-xl font-extrabold text-blue-900 py-4 ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChange={syncAvctiveItems}
          activeItem={activeItem}
        />
        {activeItem !== items.length-5 &&
        <Button
          onClick={prev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "11rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          arial-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button> }
        {activeItem !== 0 &&
        <Button
          onClick={next}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "11rem",
            left: "0",
            transform: "translateX(-50%) rotate(-90deg)",
           bgcolor:"white",
        }}
          arial-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button>}
      </div>
    </div>
  );
}

export default HomeCarousel;
