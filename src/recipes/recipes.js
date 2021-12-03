export default recipes = [
  //hamburguesa (Modelo)
  {
    'id': 1,
    'name': "Hamburgesa",
    'description': "Hamburgesa del Valhalla",
    'favorite': true,
    'recent': 1,
    'ingredients' : [ 
      {
      'name' : "Pan de hamburgesa",
      'quantity': 30,
      'Unit': 'g',
      },
      {
        'name' : "carne",
        'quantity': 220,
        'unit': 'g',
      },
      {
        'name' : 'lechuga',
        'quantity': 2,
        'unit':'slices',
      },
      {
        'name' : "jitomate",
        'quantity': 1,
        'unit':'slice',
      },
      {
        'name' : "cebolla",
        'quantity': 2,
        'unit ': 'slice',
      },
      {
        'name' : "pepinillos",
        'quantity': 4,
        'unit ': 'slice',
      },
      {
        'name' : "aderezo especial",
        'quantity': 30,
        'unit ': 'g',
      },
      {
        'name' : "mezcla de quesos",
        'quantity': 30,
        'unit ': 'g',
      },
      {
        'name' : "tocino",
        'quantity': 30,
        'unit ': 'g',
      },
     
    ],
    'image': require("../assets/img/burger.png"),
    'tag': "TRENDING",
  },
  //pizza LE FALTA LA INFO REAL (Agregarsela)
  {
    'id': 2,
    'name': "Pizza",
    'description': "Pizza estilo Nápoles",
    'favorite': true,
    'recent': 1,
    'ingredients' : [ 
      {
      'name' : "harina",
      'quantity': 450,
      'Unit': 'g',
      },
      {
        'name' : "levadura prensada",
        'quantity': 2.5,
        'Unit': 'g',
      },
      {
        'name' : "agua",
        'quantity': 250,
        'Unit': 'ml',
      }, 
      {
        'name' : "sal",
        'quantity': 12,
        'Unit': 'ml',
      },
      {
        'name' : "aceite de oliva",
        'quantity': 1,
        'Unit': 'spoon',
      },
      {
        'name' : "tomate triturado",
        'quantity': 400,
        'unit': 'g',
      },
      {
        'name' : 'Mozzarella',
        'quantity': 250,
        'unit':'g',
      },
      {
        'name' : "Hojas de albahaca fresca",
        'quantity': 15,
        'unit ':"slices",
      },
    ],
    'image': require("../assets/img/pizza.png"),
    'tag': "TRENDING",
  },
  //Ramen LE FALTA LA INFO REAL (Agregarsela)
  {
    'id': 3,
    'name': "Hamburgesa",
    'description': "Hamburgesa del Valhalla",
    'favorite': true,
    'recent': 1,
    'ingredients' : [ 
      {
      'name' : "Pan de hamburgesa",
      'quantity': 30,
      'Unit': 'g',
      },
      {
        'name' : "carne",
        'quantity': 100,
        'unit': 'g',
      },
      {
        'name' : 'Mozzarella en barra',
        'quantity': 100,
        'unit':'g',
      },
      {
        'name' : "mozzarella fresca de búfala",
        'quantity': 150,
        'unit':'g',
      },
      {
        'name' : "harina de fuerza",
        'quantity': 500,
        'unit ':"g",
      },
    ],
    'image': require("../assets/img/ramen.png"),
    'tag': "TRENDING",
  },
  //sandwich LE FALTA LA INFO REAL (Agregarsela)
  {
    'id': 4,
    'name': "Hamburgesa",
    'description': "Hamburgesa del Valhalla",
    'favorite': true,
    'recent': 1,
    'ingredients' : [ 
      {
      'name' : "Pan de hamburgesa",
      'quantity': 30,
      'Unit': 'g',
      },
      {
        'name' : "carne",
        'quantity': 100,
        'unit': 'g',
      },
      {
        'name' : 'Mozzarella en barra',
        'quantity': 100,
        'unit':'g',
      },
      {
        'name' : "mozzarella fresca de búfala",
        'quantity': 150,
        'unit':'g',
      },
      {
        'name' : "harina de fuerza",
        'quantity': 500,
        'unit ':"g",
      },
    ],
    'image': require("../assets/img/sandwich.png"),
    'tag': "TRENDING",
  },
  //huevo
  {
    'id': 5,
    'name': "huevo",
    'description': "Huevito con jamon",
    'favorite': true,
    'recent': 1,
    'ingredients' : [ 
      {
      'name' : "Huevo",
      'quantity': 3,
      'Unit': 'eggs',
      },
      {
        'name' : "jamon",
        'quantity': 100,
        'unit': 'g',
      },
      {
        'name' : 'pimienta',
        'quantity': 10,
        'unit':'g',
      },
    ],
    'image': require("../assets/img/huevo.png"),
    'tag': "TRENDING",
  },
];