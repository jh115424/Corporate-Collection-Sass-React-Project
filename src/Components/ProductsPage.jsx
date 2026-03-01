import React from "react";
import Die from "./ProductsPage";
import SubHeader from "./SubHeader";
import { useNavigate } from "react-router";
import "./productsPage.css";
import TurnstoneLDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/GTBlackTurnstoneLDesk.jpg";
import DomesDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/DomestoLDesk.jpg";
import LDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/LShapedDesk.jpg";
import NuipenDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/NuipensDesk.jpg";
import TribalDesk from "../assets/CategoryFurniture/ExecutiveDeskImages/TribalDesignDesk.jpg";
import WDimmableLight from "../assets/CategoryFurniture/ExecutiveOfficeLightingImages/18WDimmableBlackLight.jpg";
import LedChandalierLight from "../assets/CategoryFurniture/ExecutiveOfficeLightingImages/LedChandelier.jpg";
import ModernLight from "../assets/CategoryFurniture/ExecutiveOfficeLightingImages/ModernPendanLight.jpg";
import SixteenFeetLight from "../assets/CategoryFurniture/ExecutiveOfficeLightingImages/SixteenFTLedLinearLight.jpg";
import ThreeRingsLight from "../assets/CategoryFurniture/ExecutiveOfficeLightingImages/ThreeRingsBlackPendantLight.jpg";
import ArtistHandReceptionChair from "../assets/CategoryFurniture/ExecutiveReceptionFurnitureImages/ArtisthandOfficeReceptionChair.jpg";
import KinfantRoomBench from "../assets/CategoryFurniture/ExecutiveReceptionFurnitureImages/KinfantWaitingRoomBench.jpg";
import OmyReceptionArea from "../assets/CategoryFurniture/ExecutiveReceptionFurnitureImages/OmyWaitingRoom.jpg";
import SetOfTwoBlackChairs from "../assets/CategoryFurniture/ExecutiveReceptionFurnitureImages/SetOfTwoReceptionBlackChairs.jpg";
import TwoGrayReceptionChairs from "../assets/CategoryFurniture/ExecutiveReceptionFurnitureImages/TwoSeatGrayReceptionChairs.jpg";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import Footer from "./Footer";

const furnitureItems = [
  {
    // id: 1,
    imageURL: TurnstoneLDesk,
    name: "GTB Black Turnstone L Desk",
    price: 1299.0,
    category: "Desks",
  },
  {
    // id: 2,
    imageURL: DomesDesk,
    name: "Domes to L Desk",
    price: 799.0,
    category: "Desks",
  },
  {
    // id: 3,
    imageURL: LDesk,
    name: "L-Shaped Desk",
    price: 1599.0,
    category: "Desks",
  },
  {
    // id: 4,
    imageURL: NuipenDesk,
    name: "Nuipens Desk",
    price: 1699.0,
    category: "Desks",
  },
  {
    // id: 5,
    imageURL: TribalDesk,
    name: "Tribal Design Desk",
    price: 2199.0,
    category: "Desks",
  },
  {
    // id: 6,
    imageURL: WDimmableLight,
    name: "18W Dimmable Black Light",
    price: 1999.0,
    category: "Lighting",
  },
  {
    // id: 7,
    imageURL: LedChandalierLight,
    name: "LED Chandelier",
    price: 2599.0,
    category: "Lighting",
  },
  {
    // id: 8,
    imageURL: ModernLight,
    name: "Modern Pendant Light",
    price: 1399.0,
    category: "Lighting",
  },
  {
    // id: 9,
    imageURL: SixteenFeetLight,
    name: "16Ft Led Linear Light",
    price: 3299.0,
    category: "Lighting",
  },
  {
    // id: 10,
    imageURL: ThreeRingsLight,
    name: "3 Rings Black Pendant Light",
    price: 2699.0,
    category: "Lights",
  },
  {
    // id: 11,
    imageURL: ArtistHandReceptionChair,
    name: "Artist Hand Office Reception Chair",
    price: 1899.0,
    category: "Chairs",
  },
  {
    // id: 12,
    imageURL: KinfantRoomBench,
    name: "Kinfant Waiting Room Bench",
    price: 999.0,
    category: "Chairs",
  },
  {
    // id: 13,
    imageURL: OmyReceptionArea,
    name: "Omy Waiting Room",
    price: 1699.0,
    category: "Chairs",
  },
  {
    // id: 14,
    imageURL: SetOfTwoBlackChairs,
    name: "Barcelona Reception Black Chairs",
    price: 2199.0,
    category: "Chairs",
  },
  {
    // id: 15,
    imageURL: TwoGrayReceptionChairs,
    name: "Lucy Moran Gray Chairs",
    price: 699.0,
    category: "Chairs",
  },
];

export default function ProductsPage({ cart, setCart }) {
  const { category } = useParams();

  const [searchFurniture, setSearchFurniture] = useState("all");

  const [sortFurniture, setSortFurniture] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchFurniture(category ? category : "all");
  }, [category]);

  const pickedFurnitureItems = furnitureItems.filter((furniture) =>
    searchFurniture === "all" ? true : furniture.category === searchFurniture,
  );

  const sortedItems =
    sortFurniture === ""
      ? pickedFurnitureItems
      : sortFurniture === "price-low-to-high"
        ? [...pickedFurnitureItems].sort((a, b) => a.price - b.price)
        : sortFurniture === "name-a-to-z"
          ? [...pickedFurnitureItems].sort((a, b) =>
              a.name.localeCompare(b.name),
            )
          : pickedFurnitureItems;

  const navigate = useNavigate();

  const handleAddToCart = (furniture) => {
    const existingItem = cart.find((item) => item.name === furniture.name);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.name === furniture.name
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...furniture, quantity: 1 }]);
    }
    console.log("Adding to cart:", furniture);
    navigate("/cart");
  };
  return (
    <>
      <SubHeader />
      <div className="discountBanner">
        <p>CLIENTS SAVE 25% WITH VOUCHER</p>
      </div>

      <div className="productIntroBanner">
        <span>Executive </span>Furnishings Collection
      </div>
      <p className="tagline">Luxury you can feel. Quality you can trust.</p>

      <div className="sortDropdown">
        <select
          id="dropDown"
          value={sortFurniture}
          onChange={(event) => setSortFurniture(event.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="name-a-to-z">Name: A to Z</option>
        </select>
      </div>

      <div className="catalogDisplayContainer">
        {sortedItems.map((furniture, index) => (
          <div key={index}>
            <img src={furniture.imageURL} className="furnitureImage" />
            <div className="furnitureName">
              {furniture.name && <span>{furniture.name}</span>}
            </div>
            <div className="furniturePrice">{furniture.price}</div>

            <button
              onClick={() => handleAddToCart(furniture)}
              className="putInCart"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
