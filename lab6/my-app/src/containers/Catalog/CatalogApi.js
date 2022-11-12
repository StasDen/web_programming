import dokotooDress from "../../icons/catalog/dresses/dokotoo.jpg";
import moleraniDress from "../../icons/catalog/dresses/molerani.jpg";
import belongsciDress from "../../icons/catalog/dresses/belongsci.jpg";
import elescatDress from "../../icons/catalog/dresses/elescat.jpg";
import tralibeeDress from "../../icons/catalog/dresses/tralibee.jpg";
import folunsiDress from "../../icons/catalog/dresses/folunsi.jpg";
import beimucDress from "../../icons/catalog/dresses/beimuc.jpg";
import angashionDress from "../../icons/catalog/dresses/angashion.jpg";

import dickiesSkirt from "../../icons/catalog/skirts/dickies.jpg";
import doubljuSkirt from "../../icons/catalog/skirts/doublju.jpg";
import dailySkirt from "../../icons/catalog/skirts/daily.jpg";
import capezioSkirt from "../../icons/catalog/skirts/capezio.jpg";
import adidasSkirt from "../../icons/catalog/skirts/adidas.jpg";
import genericSkirt from "../../icons/catalog/skirts/generic.jpg";
import elasticSkirt from "../../icons/catalog/skirts/elastic.jpg";
import beachSkirt from "../../icons/catalog/skirts/beach.jpg";

import hanesShirt from "../../icons/catalog/shirts/hanes.jpg";
import hanesSecShirt from "../../icons/catalog/shirts/hanes2.jpg";
import boysShirt from "../../icons/catalog/shirts/boys.jpg";
import hanesThirdShirt from "../../icons/catalog/shirts/hanes3.jpg";
import nicShirt from "../../icons/catalog/shirts/nic.jpg";
import desigualShirt from "../../icons/catalog/shirts/desigual.jpg";
import desigualSecShirt from "../../icons/catalog/shirts/desigual2.jpg";
import velvetShirt from "../../icons/catalog/shirts/velvet.jpg";

// Fake api
const data = [
  {
    title: "DOKOTOO",
    text: "Women's 2022 Floral Print Mini Dress",
    image: dokotooDress,
    price: 29,
    category: "Dresses",
    country: "Turkey",
    relPrice: "Low",
  },
  {
    title: "MOLERANI",
    text: "Women's Casual Plain Loose Dress",
    image: moleraniDress,
    price: 40,
    category: "Dresses",
    country: "Finland",
    relPrice: "Medium",
  },
  {
    title: "BELONGSCI",
    text: "Women's Dress Sweet & Cute V-Neck Mini Dress",
    image: belongsciDress,
    price: 35,
    category: "Dresses",
    country: "Sweden",
    relPrice: "Medium",
  },
  {
    title: "ELESCAT",
    text: "Women Summer Dress Beach Casual Plus Size Tunic",
    image: elescatDress,
    price: 30,
    category: "Dresses",
    country: "Ukraine",
    relPrice: "Low",
  },
  {
    title: "TRALIBEE",
    text: "Women's Pleated Swing Dress with Pockets",
    image: tralibeeDress,
    price: 35,
    category: "Dresses",
    country: "Poland",
    relPrice: "Medium",
  },
  {
    title: "FOLUNSI",
    text: "Women's Short Sleeve Pleated Casual Dress",
    image: folunsiDress,
    price: 20,
    category: "Dresses",
    country: "Finland",
    relPrice: "Low",
  },
  {
    title: "BEIMUC",
    text: "Women's Long Winter Dresses with Pockets Side Button",
    image: beimucDress,
    price: 22,
    category: "Dresses",
    country: "Finland",
    relPrice: "Low",
  },
  {
    title: "ANGASHION",
    text: "Women's Floral Print Dress Casual Dresses",
    image: angashionDress,
    price: 55,
    category: "Dresses",
    country: "Ukraine",
    relPrice: "High",
  },
  {
    title: "DICKIES",
    text: "Women's Perfect Shape Denim Skirt",
    image: dickiesSkirt,
    price: 40,
    category: "Skirts",
    country: "Poland",
    relPrice: "Medium",
  },
  {
    title: "DOUBLJU",
    text: "Women's Waist Band Maxi Skirt with Pocket",
    image: doubljuSkirt,
    price: 65,
    category: "Skirts",
    country: "Turkey",
    relPrice: "High",
  },
  {
    title: "DAILY",
    text: "Ritual Women's Terry Cotton and Modal Skirt",
    image: dailySkirt,
    price: 25,
    category: "Skirts",
    country: "Turkey",
    relPrice: "Low",
  },
  {
    title: "CAPEZIO",
    text: "Women's Circle Skirt",
    image: capezioSkirt,
    price: 30,
    category: "Skirts",
    country: "Turkey",
    relPrice: "Medium",
  },
  {
    title: "GENERIC",
    text: "Flowy Dress Printing Tiered Summer Skirt",
    image: adidasSkirt,
    price: 50,
    category: "Skirts",
    country: "Turkey",
    relPrice: "High",
  },
  {
    title: "GENERIC",
    text: "Flowy Dress Printing Tiered Summer Pleated Puffy Skirt",
    image: genericSkirt,
    price: 68,
    category: "Skirts",
    country: "Ukraine",
    relPrice: "High",
  },
  {
    title: "ELASTIC",
    text: "With Pockets Summer A-Line Tiered Beach Skirts",
    image: elasticSkirt,
    price: 56,
    category: "Skirts",
    country: "Ukraine",
    relPrice: "High",
  },
  {
    title: "BEACH",
    text: "Skirts Beach Line Holiday Daybed Skirt",
    image: beachSkirt,
    price: 42,
    category: "Skirts",
    country: "Sweden",
    relPrice: "Medium",
  },
  {
    title: "HANES",
    text: "Women's Perfect-T Long V-neck T-shirt",
    image: hanesShirt,
    price: 12,
    category: "Shirts",
    country: "Sweden",
    relPrice: "Low",
  },
  {
    title: "HANES",
    text: "Women's Shirred V-Neck T-Shirt",
    image: hanesSecShirt,
    price: 14,
    category: "Shirts",
    country: "Hungary",
    relPrice: "Low",
  },
  {
    title: "ALLWEIS",
    text: "The Boys of Fall Sweatshirt Women Halloween",
    image: boysShirt,
    price: 14,
    category: "Shirts",
    country: "Poland",
    relPrice: "Low",
  },
  {
    title: "HANES",
    text: "Women's Short Sleeve V-Neck Graphic T-Shirt",
    image: hanesThirdShirt,
    price: 15,
    category: "Shirts",
    country: "Slovakia",
    relPrice: "Low",
  },
  {
    title: "NIC+ZOE",
    text: "Women's Punchy Plaid Shirt",
    image: nicShirt,
    price: 30,
    category: "Shirts",
    country: "Slovakia",
    relPrice: "Medium",
  },
  {
    title: "DESIGUAL",
    text: "Women's Casual",
    image: desigualShirt,
    price: 70,
    category: "Shirts",
    country: "Hungary",
    relPrice: "High",
  },
  {
    title: "DESIGUAL",
    text: "Women's Casual",
    image: desigualSecShirt,
    price: 75,
    category: "Shirts",
    country: "Slovakia",
    relPrice: "High",
  },
  {
    title: "VELVET",
    text: "Women's Mulholland Shirt",
    image: velvetShirt,
    price: 45,
    category: "Shirts",
    country: "Sweden",
    relPrice: "Medium",
  },
];

export default data;
