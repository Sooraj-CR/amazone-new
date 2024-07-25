import React from "react";
import "./Home.css";
import Product from "./Product";
import moviePoster from "./assets/amazone-movie-poster.png";
import bookCoverImage from "./assets/Book-cover.png";
import boxer from "./assets/boxer.jpg";
import massager from "./assets/scalp-massager.png";
import stand from "./assets/stand-image.png";
import whey from "./assets/whey.png";
import umbrella from "./assets/umbrella.jpg";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src={moviePoster} alt="movie poster" />
      <div className="home_row">
        <Product
          id={100}
          title={"The Psychology of Money"}
          price={1000}
          image={bookCoverImage}
          rating={5}
        />
        <Product
          id={14879}
          title={
            "AmazonBasics Premium Cloth Drying Stand - 3 Way Folding, 42 Feet Drying Length, 20 Drying Rails (Silver)"
          }
          price={1299}
          image={stand}
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id={1347748377}
          title={
            "PROSHARX 2 in 1 Active Dual Shorts with Inner Tights Layer | Men's Double Layer Short for Running, Gym & Sports"
          }
          price={1000}
          image={boxer}
          rating={4}
        />
        <Product
          id={1454758709}
          title={
            "MAXN Whey Protein Concentrate/Isolate - Flavoured Powder for Muscle Growth (Chocolate, 2.27 kg)"
          }
          price={5299}
          image={whey}
          rating={4}
        />
        <Product
          id={1487348734980}
          title={
            "Scalp Massager (Marble Pink), Scalp Massager For Hair Growth, Hair Massager, Hair Massager For Hair Growth, Head Scrubber, Head Massager, Hair Scalp Massager Shampoo Brush"
          }
          price={59}
          image={massager}
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id={18473984479}
          title={
            "CITRODA Mini Umbrella with cover for Men & Women (Manual Open) Compact Travelling Umbrella, Polyester & UV Protection Fabric for Summer/Anti-Slip Handle- Use in Rain & Summer- 6 Frame"
          }
          price={582}
          image={umbrella}
          rating={3}
        />
      </div>
    </div>
  );
}

export default Home;
