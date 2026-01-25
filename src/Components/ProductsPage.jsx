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

const furnitureItems = [
  {
    id: 1,
    imageURL: TurnstoneLDesk,
    name: "GTB Black Turnstone L Desk",
    price: 1299.0,
    category: "Desks",
  },
  {
    id: 2,
    imageURL: DomesDesk,
    name: "Domes to L Desk",
    price: 799.0,
    category: "Desks",
  },
  {
    id: 3,
    imageURL: LDesk,
    name: "L-Shaped Desk",
    price: 1599.0,
    category: "Desks",
  },
  {
    id: 4,
    imageURL: NuipenDesk,
    name: "Nuipens Desk",
    price: 1699.0,
    category: "Desks",
  },
  {
    id: 5,
    imageURL: TribalDesk,
    name: "Tribal Design Desk",
    price: 2199.0,
    category: "Desks",
  },
  {
    id: 6,
    imageURL: WDimmableLight,
    name: "18W Dimmable Black Light",
    price: 1999.0,
    category: "Lights",
  },
  {
    id: 7,
    imageURL: LedChandalierLight,
    name: "LED Chandelier",
    price: 2599.0,
    category: "Lights",
  },
  {
    id: 8,
    imageURL: ModernLight,
    name: "Modern Pendant Light",
    price: 1399.0,
    category: "Lights",
  },
  {
    id: 9,
    imageURL: SixteenFeetLight,
    name: "16Ft Led Linear Light",
    price: 3299.0,
    category: "Lights",
  },
  {
    id: 10,
    imageURL: ThreeRingsLight,
    name: "3 Rings Black Pendant Light",
    price: 2699.0,
    category: "Lights",
  },
  {
    id: 11,
    imageURL: ArtistHandReceptionChair,
    name: "Artist Hand Office Reception Chair",
    price: 1899.0,
    category: "Chairs",
  },
  {
    id: 12,
    imageURL: KinfantRoomBench,
    name: "Kinfant Waiting Room Bench",
    price: 999.0,
    category: "Chairs",
  },
  {
    id: 13,
    imageURL: OmyReceptionArea,
    name: "Omy Waiting Room",
    price: 1699.0,
    category: "Chairs",
  },
  {
    id: 14,
    imageURL: SetOfTwoBlackChairs,
    name: "Barcelona Reception Black Chairs",
    price: 2199.0,
    category: "Chairs",
  },
  {
    id: 15,
    imageURL: TwoGrayReceptionChairs,
    name: "Lucy Moran Gray Chairs",
    price: 699.0,
    category: "Chairs",
  },
];

export default function ProductsPage() {
  const { category } = useParams();

  const [searchFurniture, setSearchFurniture] = useState("all");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchFurniture(category ? category : "all");
  }, [category]);

  const pickedFurnitureItems = furnitureItems.filter((furniture) =>
    searchFurniture === "all" ? true : furniture.category === searchFurniture
  );

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

      <div className="catalogDisplayContainer">
        {pickedFurnitureItems.map((furniture, index) => (
          <div key={index}>
            <img src={furniture.imageURL} className="furnitureImage" />
            <div className="furnitureName">
              {furniture.name && <span>{furniture.name}</span>}
            </div>
            <div className="furniturePrice">{furniture.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// CATEGORYNAV COMPONENT (GOES ON HOME PAGE):

// Categories array with Desks, Chairs, Lighting
// Map function to loop through them
// Link components for navigation
// Displays category buttons/cards
// The buttons ARE NOT a separate component - they're CREATED INSIDE CategoryNav by the map function
// Purpose: Let users choose a category and navigate to Products page

// PRODUCTSPAGE COMPONENT (IS ITS OWN PAGE/ROUTE):

// The actual furniture items array with images, names, prices
// Map function to display all the furniture
// Product cards showing image, description, price
// Purpose: Display the actual furniture products

// CATEGORYNAV = NAVIGATION ON HOME (CREATES THE BUTTONS)
// PRODUCTSPAGE = ACTUAL PRODUCTS DISPLAYED
// YOU DON'T NEED A SEPARATE BUTTONS COMPONENT - CATEGORYNAV MAKES THE BUTTONS

// NEW INFO - HOW THEY CONNECT:

// CategoryNav buttons use Link with "to" prop that navigates to the ProductsPage route (like "/products")
// The Link can pass category information through the URL (like "/products/desks" or "/products?category=desks")
// ProductsPage reads that URL parameter to know which category was clicked
// ProductsPage filters the products array to display only items from that category
// The URL is the route path that shows in the browser address bar

// EXAMPLE OF URL CONNECTION:
// In CategoryNav component:
// jsx<Link to="/products/desks">Desks</Link>
// In main.jsx router:
// jsx<Route path="/products/:category" element={<ProductsPage />} />
// ```

// **The URL in browser would be:**
// ```
// yoursite.com/products/desks
