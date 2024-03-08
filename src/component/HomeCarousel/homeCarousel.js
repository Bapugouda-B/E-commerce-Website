import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ProductCarousel from "../ProductCarousel/ProductCarousel.js";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button } from "@mui/material";

function HomeCarousel() {
  const [activeItem, setActiveItem] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    720: { items: 4 },
    1024: { items: 5 },
  };

  const prev = () => setActiveItem(activeItem - 1);
  const next = () => setActiveItem(activeItem + 1);

  const syncAvctiveItems = ({ item }) => setActiveItem(item);

  const items = [1, 1, 1, 1, 1, 1, 1].map((item) => <ProductCarousel />);
  return (
    <div className="px-2 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChange={syncAvctiveItems}
          activeItem={activeItem}
        />
        <Button
          onClick={prev}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          arial-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
        <Button
          onClick={next}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0",
            transform: "translateX(-50%) rotate(90deg)",
          }}
          arial-label="next"
        >
          <KeyboardDoubleArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button>
      </div>
    </div>
  );
}

export default HomeCarousel;
