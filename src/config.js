const author = "Anon";
const projectName = "MOMO";
const projectDescription = "This is a description";
const baseUri = "momoURI";
const startIndex = 0;
const format = {
  width: 460,
  height: 460,
};
const fileType = "png";

const races = [
  {
    name: "mama",
    quantity: 500, //if mainQuantity is greater than 0 this "quantity" becomes a weight
    layersOrder: [
      { name: "background" },
      { name: "body" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "tattoo" },
    ],
  },
  {
    name: "momo",
    quantity: 500, //if mainQuantity is greater than 0 this "quantity" becomes a weight
    layersOrder: [
      { name: "background" },
      { name: "body" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "tattoo" },
    ],
  },
];
// rarity level start from 0 to -> 999.... mining 0 is the most rare
const rarityWeight = [
  { rarityType: "super-rare", weight: 5 },
  { rarityType: "rare", weight: 25 },
  { rarityType: "common", weight: 70 },
];

function getURI(id) {
  return `ipfs://${baseUri}/${id}.${fileType}`;
}
module.exports = {
  author,
  projectName,
  projectDescription,
  getURI,
  format,
  fileType,
  races,
  rarityWeight,
  startIndex,
};
