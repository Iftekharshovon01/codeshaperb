import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Assets/img/hotDeal/pngwing1.png";
import img2 from "../../Assets/img/hotDeal/pngwing2.png";
import img3 from "../../Assets/img/hotDeal/pngwing3.png";

const images = [
  {
    id: "01",
    img: img1,
  },
  {
    id: "02",
    img: img2,
  },
  {
    id: "03",
    img: img3,
  },
];

const MyCarousel = () => (
  <Carousel showArrows={false} showStatus={false} showIndicators={false}>
    {images.map(({ id, img }) => {
      return (
        <div key={id}>
          <img alt="img" src={img} />
        </div>
      );
    })}
  </Carousel>
);

export default MyCarousel;
