const express = require("express");
const router = express.Router();

router.get("/text_categories", (req, res, next) => {
  const {
    query: { language }
  } = req;
  const categories =
    language === "en"
      ? [
          "abortion",
          "Brexit",
          "Britain 🇬🇧",
          "Theresa May",
          "pineapple pizza 🍍🍕"
        ]
      : [
          "Sebastián Piñera",
          "Michelle Bachelet",
          "Arturo Vidal",
          "Alexis Sánchez",
          "Augusto Pinochet",
          "Movimiento Feminista",
          "Aborto",
          "Inmigración",
          "Delincuencia",
          "Karol Dance",
          "Pensiones",
          "Desigualdades",
          "Sequía",
          "Latinoamérica"
        ];
  res.json({ data: categories });
});

router.get("/dummy_data", (req, res, next) => {
  const data = [
    { "id": 0, "title": "Rice" },
    { "id": 1, "title": "Pasta" },
    { "id": 2, "title": "Smashed potatoes" },
    { "id": 3, "title": "Cucumbers" }
  ];
})

module.exports = router;
