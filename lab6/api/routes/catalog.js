const express = require("express");
const catalogRouter = express.Router();

const catalogClothes = [
  {
    id: 1,
    title: "DOKOTOO",
    text: "Women's 2022 Floral Print Dress",
    price: 29,
    category: "Dresses",
    country: "Turkey",
    relPrice: "Low",
    left: 120,
    color: "Pink",
    imageSrc:
      "https://dy9ihb9itgy3g.cloudfront.net/products/4660/54906/54906__d_f.740.jpg",
  },
  {
    id: 2,
    title: "MOLERANI",
    text: "Women's Casual Plain Loose Dress",
    price: 40,
    category: "Dresses",
    country: "Finland",
    relPrice: "Medium",
    left: 100,
    color: "Green",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0711/2373/products/monica-off-the-shoulder-gown-emerald-green-monica-off-the-shoulder-gown-emerald-green-bridesmaid-dress-dresses-29075301630017_600x.jpg?v=1662630357",
  },
  {
    id: 3,
    title: "BELONGSCI",
    text: "Women's Dress Sweet & Cute Mini",
    price: 35,
    category: "Dresses",
    country: "Sweden",
    relPrice: "Medium",
    left: 115,
    color: "Blue",
    imageSrc:
      "https://www.na-kd.com/globalassets/gathered_detail_strap_mini_dress_1659-000129-0047_02.jpg?ref=AD05C89CA4",
  },
  {
    id: 4,
    title: "ELESCAT",
    text: "Women Summer Dress Beach Tunic",
    price: 30,
    category: "Dresses",
    country: "Ukraine",
    relPrice: "Low",
    left: 130,
    color: "Red",
    imageSrc:
      "https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2021/10/47002-0236-scaled.jpg",
  },
  {
    id: 5,
    title: "TRALIBEE",
    text: "Women's Skirt with Pockets",
    price: 35,
    category: "Skirts",
    country: "Poland",
    relPrice: "Medium",
    left: 90,
    color: "Yellow",
    imageSrc:
      "https://media1.popsugar-assets.com/files/thumbor/GD9QrliX-3MsBtvHwf3MekvwroI/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2021/04/22/898/n/1922564/0ef7e1c46081ddb70c03e1.15128160_/i/Cute-Skirts-Amazon.jpg",
  },
  {
    id: 6,
    title: "FOLUNSI",
    text: "Women's Short Casual Skirt",
    price: 20,
    category: "Skirts",
    country: "Finland",
    relPrice: "Low",
    left: 85,
    color: "Dark",
    imageSrc:
      "https://www.bodenimages.com/productimages/r1aproductlarge/22wwin_r0218_blk_m01.jpg",
  },
  {
    id: 7,
    title: "BEIMUC",
    text: "Women's Summer Shirt",
    price: 22,
    category: "Shirts",
    country: "Finland",
    relPrice: "Low",
    left: 150,
    color: "Pink",
    imageSrc:
      "https://stylesatlife.com/wp-content/uploads/2017/04/collection-of-pink-and-white-women-shirt.jpg.webp",
  },
  {
    id: 8,
    title: "ANGASHION",
    text: "Women's Floral Print Shirt",
    price: 55,
    category: "Shirts",
    country: "Ukraine",
    relPrice: "High",
    left: 180,
    color: "Light",
    imageSrc:
      "https://www.countryroad.com.au/ProductImages_Display/MEDIUM/1/115949_536848_354986.jpg",
  },
];

// GET all
catalogRouter.get("/", (req, res) => {
  res.send(catalogClothes);
});

// GET by id
catalogRouter.get("/:id", (req, res) => {
  const item = catalogClothes.find((i) => i.id === parseInt(req.params.id));

  if (!item) return res.status(404).send("There are no clothes with this id");
  res.send(item);
});

// GET by category
catalogRouter.get("/category/:category", (req, res) => {
  const clothes = catalogClothes.filter(
    (c) =>
      c.relPrice.toLowerCase() === req.params.category.toLowerCase() ||
      c.country.toLowerCase() === req.params.category.toLowerCase() ||
      c.category.toLowerCase() === req.params.category.toLowerCase()
  );

  res.send(clothes);
});

module.exports = catalogRouter;
