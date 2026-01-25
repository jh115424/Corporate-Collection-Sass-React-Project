import React from "react";
import Die from "./ProductsPage";
import SubHeader from "./SubHeader";
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
import { Link } from "react-router";

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
    category: "Lights",
  },
  {
    // id: 7,
    imageURL: LedChandalierLight,
    name: "LED Chandelier",
    price: 2599.0,
    category: "Lights",
  },
  {
    // id: 8,
    imageURL: ModernLight,
    name: "Modern Pendant Light",
    price: 1399.0,
    category: "Lights",
  },
  {
    // id: 9,
    imageURL: SixteenFeetLight,
    name: "16Ft Led Linear Light",
    price: 3299.0,
    category: "Lights",
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

export default function ProductsPage() {
  const { category } = useParams();

  const [searchFurniture, setSearchFurniture] = useState("all");

  const [sortFurniture, setSortFurniture] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchFurniture(category ? category : "all");
  }, [category]);

  const pickedFurnitureItems = furnitureItems.filter((furniture) =>
    searchFurniture === "all" ? true : furniture.category === searchFurniture
  );

  const sortedItems =
    sortFurniture === ""
      ? pickedFurnitureItems
      : sortFurniture === "price-low-to-high"
      ? [...pickedFurnitureItems].sort((a, b) => a.price - b.price)
      : sortFurniture === "name-a-to-z"
      ? [...pickedFurnitureItems].sort((a, b) => a.name.localeCompare(b.name))
      : pickedFurnitureItems;

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

            <Link to="/cart">
            <button className="putInCart">Add to Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

// SHOPPING CART IMPLEMENTATION - COMPLETE BREAKDOWN:
// STEP 1 - CREATE CART STATE (IN APP.JSX OR CONTEXT):
// Create useState to hold cart items array - this needs to be accessible by multiple components
// STEP 2 - ADD TO CART BUTTONS (IN PRODUCTSPAGE):
// On each product card (in the map), add an "Add to Cart" button that adds that product to the cart state
// STEP 3 - CREATE CART PAGE COMPONENT (NEW FILE):
// Make a new CartPage.jsx component that displays all items in the cart with their details
// STEP 4 - ADD CART ROUTE (IN MAIN.JSX):
// Add a route for /cart that shows the CartPage component
// STEP 5 - CART ICON IN SUBHEADER (IN SUBHEADER.JSX):
// Add a shopping cart icon/button that shows cart item count and links to /cart
// STEP 6 - REMOVE FROM CART (IN CARTPAGE):
// Add remove buttons on each cart item that delete them from cart state