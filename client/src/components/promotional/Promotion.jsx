import React from "react";
import Marquee from "react-fast-marquee";
import promo1 from "../../assets/brands/amazon.png";
import promo2 from "../../assets/brands/amazon_vector.png";
import promo3 from "../../assets/brands/casio.png";
import promo4 from "../../assets/brands/moonstar.png";
import promo5 from "../../assets/brands/randstad.png";
import promo6 from "../../assets/brands/start-people 1.png";
import promo7 from "../../assets/brands/start.png";

const Promotion = () => {
  const data = [
    {
      id: 1,
      image: promo1,
    },
    {
      id: 2,
      image: promo2,
    },
    {
      id: 3,
      image: promo3,
    },
    {
      id: 4,
      image: promo4,
    },
    {
      id: 5,
      image: promo5,
    },
    {
      id: 6,
      image: promo6,
    },
    {
      id: 7,
      image: promo7,
    },
  ];

  return (
    <div>
      <h3 className="text-3xl text-center mb-10 font-bold">
        Our <span className="text-primary">partners</span>
      </h3>
      <Marquee pauseOnHover={true}>
        <div className="flex items-center  justify-center h-20">
          {data.map((brand) => (
            <img
              src={brand.image}
              className="grayscale hover:grayscale-0 mr-28"
            ></img>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Promotion;
