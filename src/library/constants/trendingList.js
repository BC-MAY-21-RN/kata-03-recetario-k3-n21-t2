import { Burguer, Huevo, Pizza, Ramen, Sandwich  } from '../images'


 export const trendingList = [
  {
    "id": 1,
    "name": "Hamburguesa",
    "nameImg" : "burguer",
    "description": "Hamburguesa del Valhalla",
    "favorite": true,
    "recent": 1,
    "ingredients" : [ 
      {
      "name" : "Pan de hamburgesa",
      "quantity": 30,
      "Unit": "g"
      },
      {
        "name" : "Carne",
        "quantity": 220,
        "unit": "g"
      },
      {
        "name" : "Lechuga",
        "quantity": 2,
        "unit":"slices"
      },
      {
        "name" : "Jitomate",
        "quantity": 1,
        "unit":"slice"
      },
      {
        "name" : "Cebolla",
        "quantity": 2,
        "unit ": "slice"
      },
      {
        "name" : "Pepinillos",
        "quantity": 4,
        "unit": "slice"
      },
      {
        "name" : "Aderezo especial",
        "quantity": 30,
        "unit": "g"
      },
      {
        "name" : "Mezcla de quesos",
        "quantity": 30,
        "unit": "g"
      },
      {
        "name" : "Tocino",
        "quantity": 30,
        "unit": "g"
      }
     
    ],
    "image": Burguer,
    "tag": "TRENDING"
  },
  {
    "id": 2,
    "name": "Pizza",
    "nameImg" : "pizza",
    "description": "Pizza estilo Napoles",
    "favorite": true,
    "recent": 1,
    "ingredients" : [ 
      {
      "name" : "Harina",
      "quantity": 450,
      "Unit": "g"
      },
      {
        "name" : "Levadura prensada",
        "quantity": 2.5,
        "Unit": "g"
      },
      {
        "name" : "Agua",
        "quantity": 250,
        "Unit": "ml"
      }, 
      {
        "name" : "Sal",
        "quantity": 12,
        "Unit": "ml"
      },
      {
        "name" : "Aceite de oliva",
        "quantity": 1,
        "Unit": "cucharaditas"
      },
      {
        "name" : "Tomate triturado",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name" : "Mozzarella",
        "quantity": 250,
        "unit":"g"
      },
      {
        "name" : "Hojas de albahaca fresca",
        "quantity": 15,
        "unit ":"rebandas"
      }
    ],
    "image": Pizza,
    "tag": "TRENDING"
  },
  {
    "id": 3,
    "name": "Ramen",
    "nameImg" : "ramen",
    "description": "Sopa hecha con caldo de carne ",
    "favorite": true,
    "recent": 1,
    "ingredients" : [ 
      {
      "name" : "Huevos",
      "quantity": 2,
      "Unit": "piezas"
      },
      {
        "name" : "Fideos ramen",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name" : "Carne de cerdo",
        "quantity": 50,
        "unit":"g"
      },
      {
        "name" : "Verduras",
        "quantity": 100,
        "unit":"g"
      },
      {
        "name" : "Aceite de oliva",
        "quantity": 1,
        "unit":"cucharadita"
      },
      {
        "name" : "Salsa de soya",
        "quantity": 2,
        "unit":"cucharadita"
      },
      {
        "name" : "Dientes de ajo",
        "quantity": 2,
        "unit":"pieces"
      }
    ],
    "image": Ramen,
    "tag": "TRENDING"
  },
  {
    "id": 4,
    "name": "Sandwich",
    "nameImg" : "sandwich",
    "description": "Sandwich de jamon con queso",
    "favorite": true,
    "recent": 1,
    "ingredients" : [ 
      {
      "name" : "Pan de sandwich",
      "quantity": 2,
      "Unit": "piezas"
      },
      {
        "name" : "Jamon de pavo",
        "quantity": 50,
        "unit": "g"
      },
      {
        "name" : "Queso manchego",
        "quantity": 30,
        "unit": "g"
      },
      {
        "name" : "Tocino",
        "quantity": 30,
        "unit":"g"
      },
      {
        "name" : "Aderezo especial",
        "quantity": 20,
        "unit":"g"
      }
    ],
    "image": Sandwich,
    "tag": "TRENDING"
  },
  {
    "id": 5,
    "name": "Huevo con jamon",
    "nameImg" : "huevo",
    "description": "Huevito con jamon",
    "favorite": true,
    "recent": 1,
    "ingredients" : [ 
      {
      "name" : "Huevo",
      "quantity": 3,
      "Unit": "eggs"
      },
      {
        "name" : "Jamon",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name" : "Pimienta",
        "quantity": 0.1,
        "unit":"g"
      },
      {
        "name" : "Sal",
        "quantity": 0.1,
        "unit":"g"
      }
    ],
    "image": Huevo,
    "tag": "TRENDING"
  }
]
  


