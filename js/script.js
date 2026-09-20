(function () {
  "use strict";

  // ============================================================
  // FOOTER YEAR
  // ============================================================

  function updateYear() {
    var yearEl = document.getElementById("year");

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }


  // ============================================================
  // TRANSLATIONS
  // ============================================================

  var translations = {
    es: {
      nav: [
        "Tapas",
        "Ensaladas",
        "Piadinas",
        "Pasta",
        "Patatas gratinadas",
        "Pizzas",
        "Hamburguesas",
        "Bocadillos",
        "Combinados",
        "Sandwiches",
        "Postres",
        "Bebidas"
      ],

      heroTag:
        "Nacemos en Benetússer con el objetivo de convertirnos en el punto de encuentro de familias, amigos y amantes del buen comer. Creemos que una pizza, una comida, unas tapas o unos buenos bocatas, no solo se cocinan, se comparten. Por eso, en nuestro local cada detalle está pensado para que te sientas como en casa, ya sea disfrutando de un almuerzo, de una comida, de un tardeo con amigos o una cena familiar o con amigos cualquier día de la semana, o recogiendo tu pedido recién salido del horno para disfrutarlo en casa. Contamos con una magnífica y tranquila terraza en la calle. Sobre todo te ofrecemos cercanía y buen ambiente, además de buenos y ricos llantares que disfrutar en tus mejores momentos. Seguro que volverás.",

      heroLogoAlt:
        "Bello Rincón — Bar, Cafetería, Tapería, Pizzeria",

      buttons: {
        call: "Llamar",
        viewMenu: "Ver la carta",
        callNow: "Llamar ahora",
        reserve: "Llamar para reservar",
        directions: "Cómo llegar"
      },

      introTitle: "La carta",

      introText:
        "Todo lo que preparamos, en un solo sitio: desde una tapa rápida hasta una pizza para compartir. Toca una categoría arriba para ir directo a lo que te apetece.",

      sections: {
        tapas: {
          title: "Tapas",
          dishes: [
            ["Mini pinchos de carne", "5 unidades."],
            ["Tellinas", ""],
            ["Tequeños", ""],
            ["Jalapeños", "6 unidades."],
            ["Provolone con pan casero", ""],
            ["Provolone trufa con pan casero", ""],
            ["Calamares", ""],
            ["Gambas rebozadas", ""],
            ["Orejas de cerdo con salsa de perejil", ""],
            ["Alitas BBQ con patatas", "6 unidades."],
            ["Camembert frito con mermelada", ""],
            ["Pan con tomate, ajoaceite", ""],
            ["Pulpo a la plancha", ""],
            ["Nuggets con patatas", ""],
            ["Aros de cebolla", ""],
            ["Patatas bravas", ""],
            ["Patatas fritas", ""],
            ["Frituras de pescado", ""],
            ["Puntilla", ""],
            ["Pollo frito", ""],
            ["Croquetas del día", "Precio por unidad."],
            ["Mejillones tigre", "Precio por unidad."],
            ["Sepia", ""],
            ["Champiñones salteados", ""],
            ["Jamón y queso", ""]
          ]
        },

        ensaladas: {
          title: "Ensaladas",
          dishes: [
            ["Kika", "Lechuga, tomate, crema de aguacate, pollo frito, kikos, rúcula y balsámico."],
            ["César", "Lechuga, tomate, picatostes, bacon, parmesano y pollo."],
            ["Cabra", "Lechuga, tomate, bacon, queso de cabra y salsa de mostaza y miel."],
            ["Ensalada valenciana", "Lechuga, tomate, atún, huevo a la plancha, aceitunas, cebolla y picatostes."],
            ["Ensalada Bello Rincón", "Mezclum, tomate en rodajas, aguacate, pasas, nueces, parmesano y balsámico."]
          ]
        },

        piadinas: {
          title: "Piadinas",
          dishes: [
            ["Atlántica", "Mozzarella, jamón serrano, tomate, rúcula y parmesano."],
            ["Milano", "Mozzarella, queso de cabra, york y rúcula."],
            ["Tasty", "Lechuga, tomate, tiras de pollo rebozado, mozzarella y salsa de yogur."],
            ["Atún", "Atún, cebolla morada, rúcula y mozzarella."],
            ["Barbacoa", "Salsa barbacoa, mozzarella, carne picada, york y bacon."],
            ["Black trufa", "Trufa, parmesano, bacon, rúcula, mozzarella y nata."],
            ["Sobrasada", "Sobrasada, queso, huevo, rúcula y bacon."],
            ["Del cheff", "Verduras salteadas, mozzarella, tomate, rúcula y crema de aguacate."],
            ["Piadina de pollo", "Pechuga de pollo, cebolla caramelizada, salsa de aguacate y rúcula."]
          ]
        },

        patatas: {
          title: "Patatas gratinadas",
          dishes: [
            ["Bello Rincón", "Bacon y nata con salsa blanca."],
            ["Patatas 4 quesos", "Bacon, nata y quesos especiales."],
            ["Patatas carbonara", "Salsa carbonara, bacon, nata, huevo y queso."],
            ["Patatas black", "Salsa de trufa, nata, champiñón, bacon y queso."],
            ["Patatas barbacoa", "Carne de pollo, queso y salsa barbacoa."]
          ]
        },

        pizzas: {
          title: "Pizzas",
          note: "Precio pequeña / mediana.",
          dishes: [
            ["Margarita", "Tomate, orégano, mozzarella y queso."],
            ["Pepperoni", "Tomate, orégano, mozzarella, queso, cebolla, pepperoni y olivas."],
            ["Bacon", "Tomate, orégano, mozzarella, queso y bacon."],
            ["Jamón", "Tomate, orégano, mozzarella, queso y jamón york."],
            ["Queen jamón", "Tomate, orégano, mozzarella, queso, jamón serrano, rúcula y olivas."],
            ["Pizza Bello Rincón", "Tomate, orégano, mozzarella, queso, salsa carbonara, nueces, bacon y queso de cabra."],
            ["Parmigiana", "Tomate, mozzarella, berenjena frita, parmesano y balsámico."],
            ["Pizza Milano I", "Tomate, orégano, mozzarella, queso, salami, jamón york, champiñón y huevo."],
            ["Cuatro estaciones", "Tomate, orégano, mozzarella, queso, salami, champiñón, pimiento y jamón."],
            ["Cuatro quesos", "Tomate, orégano, mozzarella, queso y 4 quesos especiales."],
            ["Vegetariana", "Tomate, orégano, mozzarella, queso, verdura salteada y pimientos."],
            ["Casa barbacoa", "Tomate, orégano, mozzarella, queso, salsa barbacoa, pollo asado y champiñón."],
            ["Atún I", "Tomate, orégano, mozzarella, queso, atún, cebolla y ajo."],
            ["Hawaiana", "Tomate, orégano, mozzarella, queso, jamón york y piña."],
            ["Calzone", "Tomate, orégano, mozzarella, queso, jamón york, champiñón y atún."],
            ["Avanti", "Tomate, orégano, mozzarella, queso, champiñón, huevo y pepperoni."],
            ["Pollo con patatas fritas", "Tomate, orégano, mozzarella, queso, pollo y patatas fritas."],
            ["Pizza Napoli", "Tomate, orégano, mozzarella, queso, cebolla, atún, anchoas, gamba y ajo."],
            ["Barbacoa", "Orégano, mozzarella, queso, salsa barbacoa, jamón york, bacon y cebolla."],
            ["Carbonara", "Tomate, orégano, mozzarella, queso, nata, bacon y cebolla."],
            ["Carbonara 2", "Tomate, orégano, mozzarella, queso, salsa carbonara, champiñón y huevo."],
            ["Boloñesa", "Tomate, orégano, mozzarella, queso, salsa boloñesa, jamón york y bacon."],
            ["Italiana", "Tomate, orégano, mozzarella, queso, jamón york y champiñón."],
            ["Diablo", "Tomate, orégano, mozzarella, queso, pimiento picante, olivas y salami."],
            ["Pizza al gusto", "Tomate, orégano, mozzarella, queso y 3 ingredientes a elegir."],
            ["Pizza cabra", "Tomate, orégano, mozzarella, queso de cabra, cebolla confitada y mermelada."],
            ["Bishmark", "Tomate, queso, mozzarella, orégano, york y huevo."],
            ["Del chef", "Crema de aguacate, mozzarella, gouda, verdura, ternera, tomate y rúcula."]
          ]
        },

        hamburguesas: {
          title: "Hamburguesas",
          note: "Todas acompañadas de patatas. Elige tu salsa: blanca, mahonesa, ketchup, BBQ, mostaza o mostaza y miel.",
          dishes: [
            ["Normal", "Carne de ternera, lechuga, tomate, cebolla confitada y queso."],
            ["Barbique", "Carne de ternera, lechuga, bacon, barbacoa, queso y cebolla confitada."],
            ["Hamburguesa de pollo", "Lechuga, tomate, cebolla confitada y queso."],
            ["Black Angus", "Carne angus, lechuga, tomate, cebolla confitada, queso, bacon y huevo."],
            ["Hamburguesa del chef", "Doble de ternera, lechuga, tomate, cebolla confitada y queso."],
            ["Truffle Angus", "Carne Angus, lechuga, bacon, crema de trufa negra, huevo a la plancha, queso y tomate."]
          ],
          comboTitle: "Menú hamburguesa",
          comboText:
            "Doble de carne, bacon, cebolla confitada, lechuga, tomate y queso. Con patatas y refresco o caña."
        },

        bocadillos: {
          title: "Bocadillos",
          dishes: [
            ["Calamar", ""],
            ["Puntilla", ""],
            ["Jamón york", "Jamón york, lechuga, tomate y queso."],
            ["Tortilla francesa", "Elige salsa: alioli, mayonesa o tomate."],
            ["Sobrasada", "Sobrasada, bacon, queso y cebolla confitada."],
            ["Chivito", "Lomo, bacon, lechuga, tomate y huevo."],
            ["Catalana", "Tomate, aceite de oliva y jamón."],
            ["Sepia", "Con salsa Mery, mayonesa o alioli."]
          ]
        },

        combinados: {
          title: "Platos combinados",
          dishes: [
            ["Pechuga", "Pechuga, patatas, huevo y ensalada."],
            ["Lomo", "Lomo, patatas, huevo y ensalada."],
            ["Huevos rotos con jamón y patatas", ""],
            ["Entrecot con patatas y ensalada", ""]
          ]
        },

        sandwiches: {
          title: "Sandwiches",
          dishes: [
            ["Sandwich", "Jamón york y queso."],
            ["Atún sandwich", "Queso y atún."]
          ]
        },

        postres: {
          title: "Postres",
          dishes: [
            ["Helado", ""],
            ["Tiramisú", ""],
            ["Profiteroles de nata", ""],
            ["Tarta del día", ""]
          ]
        },

        bebidas: {
          title: "Bebidas",
          dishes: [
            ["Coca Cola Normal", ""],
            ["Coca Cola Zero", ""],
            ["Cerveza", ""],
            ["Agua grande", ""],
            ["Agua pequeña", ""],
            ["Fanta limón", ""],
            ["Fanta naranja", ""],
            ["Aquarius limón", ""],
            ["Aquarius naranja", ""],
            ["Trina", ""],
            ["Nestea", ""],
            ["Zumo de piña", ""],
            ["Zumo de melocotón", ""]
          ]
        }
      },

      almuerzos: {
        title: "Almuerzos",
        time: "De 09:00 a 12:00",
        entero: "Entero",
        medio: "Medio"
      },

      pasta: {
        title: "Pasta italiana",
        note: "Compón tu plato en dos pasos.",
        step1: "Elige tu pasta",
        step2: "Elige tu salsa",
        pastas: ["Macarrones", "Espaguetis", "Tortellini"],
        sauces: [
          ["Carbonara", "nata, bacon, champiñón, parmesano y cebolla."],
          ["Tartufata", "nata, bacon, champiñón, parmesano y trufa."],
          ["Pomodoro", "salsa de tomate y queso parmesano."],
          ["Boloñesa", "tomate, carne picada y queso."],
          ["Salsa de champiñón", "nata, champiñón, parmesano y cebolla."],
          ["4 quesos", "mezcla de quesos especiales."]
        ]
      },

      allergens: {
        title: "Alérgenos",
        intro: "Los números junto a cada plato indican los alérgenos que contiene, según la información de nuestra carta:",
        items: [
          "Mostaza",
          "Granos de sésamo",
          "Gluten",
          "Altramuces",
          "Frutos de cáscara",
          "Cacahuetes",
          "Huevos",
          "Pescado",
          "Moluscos",
          "Lácteos",
          "Soja",
          "Apio",
          "Sulfitos",
          "Crustáceos"
        ],
        footnote:
          "Un plato sin números no tiene alérgenos destacados en nuestra carta, pero siempre puede contener trazas. Si tienes alguna alergia o intolerancia, confírmalo con nuestro personal antes de pedir. Precios sujetos a cambios sin previo aviso."
      },

      info: {
        title: "Visítanos",
        phone: "Teléfono",
        hours: "Horario",
        days: "Lunes a domingo",
        mornings: "Mañanas",
        afternoons: "Tardes"
      },

      footer:
        "Bar · Cafetería · Tapería · Pizzeria",

      rights:
        "Todos los derechos reservados."
    },


    en: {
      nav: [
        "Tapas",
        "Salads",
        "Piadinas",
        "Pasta",
        "Gratinated potatoes",
        "Pizzas",
        "Burgers",
        "Baguette sandwiches",
        "Combination plates",
        "Sandwiches",
        "Desserts",
        "Drinks"
      ],

      heroTag:
        "We opened in Benetússer with the aim of becoming a meeting place for families, friends and lovers of good food. We believe that a pizza, a meal, some tapas or a good sandwich are not only cooked, they are meant to be shared. That is why every detail of our restaurant is designed to make you feel at home, whether you are enjoying a late breakfast, lunch, an afternoon with friends, a family dinner or a dinner with friends any day of the week, or picking up your freshly baked order to enjoy at home. We also have a wonderful and peaceful outdoor terrace. Above all, we offer a friendly atmosphere and delicious food to enjoy during your best moments. We are sure you will come back.",

      heroLogoAlt:
        "Bello Rincón — Bar, Café, Tapas & Pizzeria",

      buttons: {
        call: "Call",
        viewMenu: "View menu",
        callNow: "Call now",
        reserve: "Call to reserve",
        directions: "Get directions"
      },

      introTitle: "Our menu",

      introText:
        "Everything we prepare, all in one place: from a quick tapa to a pizza to share. Tap a category above to go straight to what you fancy.",

      sections: {
        tapas: {
          title: "Tapas",
          dishes: [
            ["Mini meat skewers", "5 pieces."],
            ["Small clams", ""],
            ["Tequeños", ""],
            ["Jalapeños", "6 pieces."],
            ["Provolone with homemade bread", ""],
            ["Truffle provolone with bread", ""],
            ["Squid", ""],
            ["Breaded prawns", ""],
            ["Pork ears with parsley sauce", ""],
            ["BBQ chicken wings with fries", "6 pieces."],
            ["Fried Camembert with jam", ""],
            ["Bread with tomato and aioli", ""],
            ["Grilled octopus", ""],
            ["Nuggets with fries", ""],
            ["Onion rings", ""],
            ["Patatas bravas", ""],
            ["French fries", ""],
            ["Fried fish", ""],
            ["Fried baby squid", ""],
            ["Fried chicken", ""],
            ["Croquettes of the day", "Price per piece."],
            ["Tiger mussels", "Price per piece."],
            ["Cuttlefish", ""],
            ["Sautéed mushrooms", ""],
            ["Ham and cheese", ""]
          ]
        },

        ensaladas: {
          title: "Salads",
          dishes: [
            ["Kika", "Lettuce, tomato, avocado cream, fried chicken, corn nuts, rocket and balsamic."],
            ["Caesar", "Lettuce, tomato, croutons, bacon, Parmesan and chicken."],
            ["Goat cheese", "Lettuce, tomato, bacon, goat cheese and honey mustard sauce."],
            ["Valencian salad", "Lettuce, tomato, tuna, fried egg, olives, onion and croutons."],
            ["Bello Rincón salad", "Mixed leaves, sliced tomato, avocado, raisins, walnuts, Parmesan and balsamic."]
          ]
        },

        piadinas: {
          title: "Piadinas",
          dishes: [
            ["Atlántica", "Mozzarella, Serrano ham, tomato, rocket and Parmesan."],
            ["Milano", "Mozzarella, goat cheese, ham and rocket."],
            ["Tasty", "Lettuce, tomato, breaded chicken strips, mozzarella and yogurt sauce."],
            ["Tuna", "Tuna, red onion, rocket and mozzarella."],
            ["BBQ", "BBQ sauce, mozzarella, minced meat, ham and bacon."],
            ["Black Truffle", "Truffle, Parmesan, bacon, rocket, mozzarella and cream."],
            ["Sobrasada", "Sobrasada, cheese, egg, rocket and bacon."],
            ["Chef's", "Sautéed vegetables, mozzarella, tomato, rocket and avocado cream."],
            ["Chicken piadina", "Chicken breast, caramelized onion, avocado sauce and rocket."]
          ]
        },

        patatas: {
          title: "Gratinated potatoes",
          dishes: [
            ["Bello Rincón", "Bacon and cream with white sauce."],
            ["Four-cheese potatoes", "Bacon, cream and special cheeses."],
            ["Carbonara potatoes", "Carbonara sauce, bacon, cream, egg and cheese."],
            ["Black potatoes", "Truffle sauce, cream, mushrooms, bacon and cheese."],
            ["BBQ potatoes", "Chicken, cheese and BBQ sauce."]
          ]
        },

        pizzas: {
          title: "Pizzas",
          note: "Small / medium price.",
          dishes: [
            ["Margherita", "Tomato, oregano, mozzarella and cheese."],
            ["Pepperoni", "Tomato, oregano, mozzarella, cheese, onion, pepperoni and olives."],
            ["Bacon", "Tomato, oregano, mozzarella, cheese and bacon."],
            ["Ham", "Tomato, oregano, mozzarella, cheese and ham."],
            ["Queen Ham", "Tomato, oregano, mozzarella, cheese, Serrano ham, rocket and olives."],
            ["Bello Rincón Pizza", "Tomato, oregano, mozzarella, cheese, carbonara sauce, walnuts, bacon and goat cheese."],
            ["Parmigiana", "Tomato, mozzarella, fried aubergine, Parmesan and balsamic."],
            ["Milano Pizza I", "Tomato, oregano, mozzarella, cheese, salami, ham, mushrooms and egg."],
            ["Four Seasons", "Tomato, oregano, mozzarella, cheese, salami, mushrooms, peppers and ham."],
            ["Four Cheeses", "Tomato, oregano, mozzarella, cheese and 4 special cheeses."],
            ["Vegetarian", "Tomato, oregano, mozzarella, cheese, sautéed vegetables and peppers."],
            ["House BBQ", "Tomato, oregano, mozzarella, cheese, BBQ sauce, roast chicken and mushrooms."],
            ["Tuna I", "Tomato, oregano, mozzarella, cheese, tuna, onion and garlic."],
            ["Hawaiian", "Tomato, oregano, mozzarella, cheese, ham and pineapple."],
            ["Calzone", "Tomato, oregano, mozzarella, cheese, ham, mushrooms and tuna."],
            ["Avanti", "Tomato, oregano, mozzarella, cheese, mushrooms, egg and pepperoni."],
            ["Chicken with fries", "Tomato, oregano, mozzarella, cheese, chicken and fries."],
            ["Napoli Pizza", "Tomato, oregano, mozzarella, cheese, onion, tuna, anchovies, prawns and garlic."],
            ["BBQ", "Oregano, mozzarella, cheese, BBQ sauce, ham, bacon and onion."],
            ["Carbonara", "Tomato, oregano, mozzarella, cheese, cream, bacon and onion."],
            ["Carbonara 2", "Tomato, oregano, mozzarella, cheese, carbonara sauce, mushrooms and egg."],
            ["Bolognese", "Tomato, oregano, mozzarella, cheese, Bolognese sauce, ham and bacon."],
            ["Italian", "Tomato, oregano, mozzarella, cheese, ham and mushrooms."],
            ["Diablo", "Tomato, oregano, mozzarella, cheese, hot pepper, olives and salami."],
            ["Pizza to your taste", "Tomato, oregano, mozzarella, cheese and 3 ingredients of your choice."],
            ["Goat cheese pizza", "Tomato, oregano, mozzarella, goat cheese, caramelized onion and jam."],
            ["Bishmark", "Tomato, cheese, mozzarella, oregano, ham and egg."],
            ["Chef's", "Avocado cream, mozzarella, Gouda, vegetables, beef, tomato and rocket."]
          ]
        },

        hamburguesas: {
          title: "Burgers",
          note: "All served with fries. Choose your sauce: white sauce, mayonnaise, ketchup, BBQ, mustard or honey mustard.",
          dishes: [
            ["Classic", "Beef, lettuce, tomato, caramelized onion and cheese."],
            ["Barbique", "Beef, lettuce, bacon, BBQ sauce, cheese and caramelized onion."],
            ["Chicken burger", "Lettuce, tomato, caramelized onion and cheese."],
            ["Black Angus", "Angus beef, lettuce, tomato, caramelized onion, cheese, bacon and egg."],
            ["Chef's burger", "Double beef, lettuce, tomato, caramelized onion and cheese."],
            ["Truffle Angus", "Angus beef, lettuce, bacon, black truffle cream, fried egg, cheese and tomato."]
          ],
          comboTitle: "Burger meal",
          comboText:
            "Double beef, bacon, caramelized onion, lettuce, tomato and cheese. Served with fries and a soft drink or small draft beer."
        },

        bocadillos: {
          title: "Baguette sandwiches",
          dishes: [
            ["Squid", ""],
            ["Fried baby squid", ""],
            ["Ham", "Ham, lettuce, tomato and cheese."],
            ["Omelette", "Choose your sauce: aioli, mayonnaise or tomato."],
            ["Sobrasada", "Sobrasada, bacon, cheese and caramelized onion."],
            ["Chivito", "Pork loin, bacon, lettuce, tomato and egg."],
            ["Catalana", "Tomato, olive oil and ham."],
            ["Cuttlefish", "With Mery sauce, mayonnaise or aioli."]
          ]
        },

        combinados: {
          title: "Combination plates",
          dishes: [
            ["Chicken breast", "Chicken breast, fries, egg and salad."],
            ["Pork loin", "Pork loin, fries, egg and salad."],
            ["Broken eggs with ham and fries", ""],
            ["Steak with fries and salad", ""]
          ]
        },

        sandwiches: {
          title: "Sandwiches",
          dishes: [
            ["Sandwich", "Ham and cheese."],
            ["Tuna sandwich", "Cheese and tuna."]
          ]
        },

        postres: {
          title: "Desserts",
          dishes: [
            ["Ice cream", ""],
            ["Tiramisu", ""],
            ["Cream profiteroles", ""],
            ["Cake of the day", ""]
          ]
        },

        bebidas: {
          title: "Drinks",
          dishes: [
            ["Coke", ""],
            ["Coke Zero", ""],
            ["Beer", ""],
            ["Large water", ""],
            ["Small water", ""],
            ["Lemon Fanta", ""],
            ["Orange Fanta", ""],
            ["Lemon Aquarius", ""],
            ["Orange Aquarius", ""],
            ["Trina", ""],
            ["Nestea", ""],
            ["Pineapple juice", ""],
            ["Peach juice", ""]
          ]
        }
      },

      almuerzos: {
        title: "Almuerzos",
        time: "From 09:00 to 12:00",
        entero: "Full",
        medio: "Half"
      },

      pasta: {
        title: "Italian pasta",
        note: "Build your dish in two steps.",
        step1: "Choose your pasta",
        step2: "Choose your sauce",
        pastas: ["Macaroni", "Spaghetti", "Tortellini"],
        sauces: [
          ["Carbonara", "cream, bacon, mushrooms, Parmesan and onion."],
          ["Tartufata", "cream, bacon, mushrooms, Parmesan and truffle."],
          ["Pomodoro", "tomato sauce and Parmesan cheese."],
          ["Bolognese", "tomato, minced meat and cheese."],
          ["Mushroom sauce", "cream, mushrooms, Parmesan and onion."],
          ["Four cheeses", "a blend of special cheeses."]
        ]
      },

      allergens: {
        title: "Allergens",
        intro: "The numbers next to each dish indicate the allergens it contains, according to the information on our menu:",
        items: [
          "Mustard",
          "Sesame seeds",
          "Gluten",
          "Lupin",
          "Tree nuts",
          "Peanuts",
          "Eggs",
          "Fish",
          "Molluscs",
          "Milk",
          "Soybeans",
          "Celery",
          "Sulphites",
          "Crustaceans"
        ],
        footnote:
          "A dish without numbers has no highlighted allergens on our menu, but it may still contain traces. If you have any allergy or intolerance, please confirm it with our staff before ordering. Prices are subject to change without prior notice."
      },

      info: {
        title: "Visit us",
        phone: "Phone",
        hours: "Opening hours",
        days: "Monday to Sunday",
        mornings: "Mornings",
        afternoons: "Evenings"
      },

      footer:
        "Bar · Café · Tapas · Pizzeria",

      rights:
        "All rights reserved."
    }
  };


  // ============================================================
  // ALLERGENS
  // ============================================================

  function translateAllergenTitles(lang) {
    var allergens = document.querySelectorAll(".allergens");
    var names = translations[lang].allergens.items;

    allergens.forEach(function (element) {
      var numbers = element.textContent
        .split("·")
        .map(function (value) {
          return value.trim();
        })
        .filter(Boolean);

      var translatedNames = numbers.map(function (number) {
        var index = parseInt(number, 10) - 1;
        return names[index] || number;
      });

      element.title =
        (lang === "es" ? "Alérgenos: " : "Allergens: ") +
        translatedNames.join(", ");
    });
  }


  function translateAllergenLegend(lang) {
    var legend = document.querySelector(".allergen-legend");

    if (!legend) return;

    var data = translations[lang].allergens;

    var title = legend.querySelector("h3");
    var paragraphs = legend.querySelectorAll(":scope > p");
    var items = legend.querySelectorAll(".legend-list li");
    var footnote = legend.querySelector(".menu-footnote");

    if (title) {
      title.textContent = data.title;
    }

    if (paragraphs[0]) {
      paragraphs[0].textContent = data.intro;
    }

    items.forEach(function (item, index) {
      var number = item.querySelector("span");

      if (!number || !data.items[index]) return;

      item.innerHTML = "";

      item.appendChild(number);
      item.appendChild(
        document.createTextNode(" " + data.items[index])
      );
    });

    if (footnote) {
      footnote.textContent = data.footnote;
    }
  }


  // ============================================================
  // TRANSLATE SECTION
  // ============================================================

  function translateSection(sectionId, data) {
    var section = document.getElementById(sectionId);

    if (!section || !data) return;

    var title = section.querySelector(".section-head h2");

    if (title) {
      title.textContent = data.title;
    }

    var note = section.querySelector(".section-note");

    if (note && data.note) {
      note.textContent = data.note;
    }

    var dishes = section.querySelectorAll(".dish");

    dishes.forEach(function (dish, index) {
      var dishData = data.dishes[index];

      if (!dishData) return;

      var name = dish.querySelector(".dish-name");
      var desc = dish.querySelector(".dish-desc");

      if (name) {
        name.textContent = dishData[0];
      }

      if (desc) {
        desc.textContent = dishData[1];
      }
    });
  }


  // ============================================================
  // TRANSLATE PASTA
  // ============================================================

  function translatePasta(lang) {
    var section = document.getElementById("pasta");

    if (!section) return;

    var data = translations[lang].pasta;

    var title = section.querySelector(".section-head h2");
    var note = section.querySelector(".section-note");
    var steps = section.querySelectorAll(".builder-step");
    var chips = section.querySelectorAll(".chip b");
    var sauces = section.querySelectorAll(".sauce-item");

    if (title) {
      title.textContent = data.title;
    }

    if (note) {
      note.textContent = data.note;
    }

    if (steps[0]) {
      var step1 = steps[0].querySelector("h3");

      if (step1) {
        step1.textContent = data.step1;
      }
    }

    if (steps[1]) {
      var step2 = steps[1].querySelector("h3");

      if (step2) {
        step2.textContent = data.step2;
      }
    }

    chips.forEach(function (chip, index) {
      if (data.pastas[index]) {
        chip.textContent = data.pastas[index];
      }
    });

    sauces.forEach(function (item, index) {
      var sauce = data.sauces[index];

      if (!sauce) return;

      var name = item.querySelector("b");
      var description = item.querySelector("span");

      if (name) {
        name.textContent = sauce[0];
      }

      if (description) {
        description.textContent = sauce[1];
      }
    });
  }


  // ============================================================
  // SET LANGUAGE
  // ============================================================

  function setLanguage(lang) {
    if (lang !== "es" && lang !== "en") {
      lang = "es";
    }

    var data = translations[lang];

    document.documentElement.lang = lang;


    // ----------------------------------------------------------
    // Language buttons
    // ----------------------------------------------------------

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      var buttonLang = button.getAttribute("data-lang");
      var active = buttonLang === lang;

      button.classList.toggle("active", active);
      button.setAttribute(
        "aria-pressed",
        active ? "true" : "false"
      );
    });


    // ----------------------------------------------------------
    // Navigation
    // ----------------------------------------------------------

    document.querySelectorAll(".cat-pill").forEach(function (pill, index) {
      if (data.nav[index]) {
        pill.textContent = data.nav[index];
      }
    });


    // ----------------------------------------------------------
    // Header
    // ----------------------------------------------------------

    var callLabel = document.querySelector(".call-label");

    if (callLabel) {
      callLabel.textContent = data.buttons.call;
    }


    // ----------------------------------------------------------
    // Hero buttons
    // ----------------------------------------------------------

    var heroPrimary = document.querySelector(".hero-actions .btn-primary");

    if (heroPrimary) {
      heroPrimary.textContent = data.buttons.viewMenu;
    }

    var heroGhost = document.querySelector(".hero-actions .btn-ghost");

    if (heroGhost) {
      heroGhost.textContent = data.buttons.callNow;
    }


    // ----------------------------------------------------------
    // Hero
    // ----------------------------------------------------------

    var heroTag = document.querySelector(".hero-tag");

    if (heroTag) {
      heroTag.textContent = data.heroTag;
    }

    var heroLogo = document.querySelector(".hero-logo");

    if (heroLogo) {
      heroLogo.alt = data.heroLogoAlt;
    }


    // ----------------------------------------------------------
    // Intro
    // ----------------------------------------------------------

    var introTitle = document.querySelector(".intro h1");
    var introText = document.querySelector(".intro p");

    if (introTitle) {
      introTitle.textContent = data.introTitle;
    }

    if (introText) {
      introText.textContent = data.introText;
    }

    // ----------------------------------------------------------
    // Almuerzos
    // ----------------------------------------------------------

    var almuerzos = document.querySelector(".almuerzos");
    
    if (almuerzos) {
      var almuerzosData = data.almuerzos;
    
      var almuerzosTitle =
        almuerzos.querySelector(".almuerzos-title h2");
    
      var almuerzosTime =
        almuerzos.querySelector(".almuerzos-time");
    
      var almuerzoEntero =
        almuerzos.querySelector(".almuerzo-entero");
    
      var almuerzoMedio =
        almuerzos.querySelector(".almuerzo-medio");
    
      if (almuerzosTitle) {
        almuerzosTitle.textContent = almuerzosData.title;
      }
    
      if (almuerzosTime) {
        almuerzosTime.textContent = almuerzosData.time;
      }
    
      if (almuerzoEntero) {
        almuerzoEntero.textContent = almuerzosData.entero;
      }
    
      if (almuerzoMedio) {
        almuerzoMedio.textContent = almuerzosData.medio;
      }
    }

    // ----------------------------------------------------------
    // Menu
    // ----------------------------------------------------------

    Object.keys(data.sections).forEach(function (sectionId) {
      translateSection(
        sectionId,
        data.sections[sectionId]
      );
    });


    // ----------------------------------------------------------
    // Pasta
    // ----------------------------------------------------------

    translatePasta(lang);


    // ----------------------------------------------------------
    // Burger combo
    // ----------------------------------------------------------

    var comboTitle = document.querySelector(".combo-text h3");
    var comboText = document.querySelector(".combo-text p");

    if (comboTitle) {
      comboTitle.textContent =
        data.sections.hamburguesas.comboTitle;
    }

    if (comboText) {
      comboText.textContent =
        data.sections.hamburguesas.comboText;
    }


    // ----------------------------------------------------------
    // Allergens
    // ----------------------------------------------------------

    translateAllergenTitles(lang);
    translateAllergenLegend(lang);


    // ----------------------------------------------------------
    // Info
    // ----------------------------------------------------------

    var info = document.querySelector(".info");

    if (info) {
      var infoTitle = info.querySelector("h2");

      var blocks = info.querySelectorAll(".info-block");

      if (infoTitle) {
        infoTitle.textContent = data.info.title;
      }

      if (blocks[0]) {
        var phoneTitle = blocks[0].querySelector("h3");

        if (phoneTitle) {
          phoneTitle.textContent = data.info.phone;
        }
      }

      if (blocks[1]) {
        var hoursTitle = blocks[1].querySelector("h3");
        var days = blocks[1].querySelector(".hours-days");
        var rows = blocks[1].querySelectorAll(".hours-row");

        if (hoursTitle) {
          hoursTitle.textContent = data.info.hours;
        }

        if (days) {
          days.textContent = data.info.days;
        }

        if (rows[0]) {
          var morning = rows[0].querySelector("span:first-child");

          if (morning) {
            morning.textContent = data.info.mornings;
          }
        }

        if (rows[1]) {
          var afternoon = rows[1].querySelector("span:first-child");

          if (afternoon) {
            afternoon.textContent = data.info.afternoons;
          }
        }
      }
    }


    // ----------------------------------------------------------
    // Info buttons
    // ----------------------------------------------------------

    var reserveButton =
      document.querySelector(".info-actions .btn-primary");

    if (reserveButton) {
      reserveButton.textContent = data.buttons.reserve;
    }

    var directionsButton =
      document.querySelector(".info-actions .btn-ghost");

    if (directionsButton) {
      directionsButton.textContent = data.buttons.directions;
    }


    // ----------------------------------------------------------
    // Mobile buttons
    // ----------------------------------------------------------

    var mobileCall =
      document.querySelector(".mobile-cta .cta-call");

    if (mobileCall) {
      mobileCall.textContent = data.buttons.call;
    }

    var mobileMap =
      document.querySelector(".mobile-cta .cta-map");

    if (mobileMap) {
      mobileMap.textContent = data.buttons.directions;
    }


    // ----------------------------------------------------------
    // Accessibility
    // ----------------------------------------------------------

    var skipLink =
      document.querySelector(".visually-hidden");

    if (skipLink) {
      skipLink.textContent =
        lang === "es"
          ? "Ir a la carta"
          : "Go to menu";
    }

    var categoryNav =
      document.querySelector(".category-nav");

    if (categoryNav) {
      categoryNav.setAttribute(
        "aria-label",
        lang === "es"
          ? "Categorías de la carta"
          : "Menu categories"
      );
    }


    // ----------------------------------------------------------
    // Footer
    // ----------------------------------------------------------

    var footer = document.querySelector(".site-footer");

    if (footer) {
      var footerParagraphs =
        footer.querySelectorAll("p");

      if (footerParagraphs[0]) {
        footerParagraphs[0].innerHTML =
          "<strong>Bello Rincón</strong> — " +
          data.footer;
      }

      if (footerParagraphs[1]) {
        footerParagraphs[1].innerHTML =
          "© <span id=\"year\">" +
          new Date().getFullYear() +
          "</span> Bello Rincón. " +
          data.rights;
      }
    }


    // ----------------------------------------------------------
    // Page metadata
    // ----------------------------------------------------------

    if (lang === "es") {

      document.title =
        "Bello Rincón — Bar, Cafetería, Tapería y Pizzeria";

      var descriptionES =
        document.querySelector(
          'meta[name="description"]'
        );

      if (descriptionES) {
        descriptionES.setAttribute(
          "content",
          "Bello Rincón: bar, cafetería, tapería y pizzeria. Pizzas al horno, pasta italiana, hamburguesas, tapas y mucho más. Consulta la carta completa y llama para reservar."
        );
      }

    } else {

      document.title =
        "Bello Rincón — Bar, Café, Tapas & Pizzeria";

      var descriptionEN =
        document.querySelector(
          'meta[name="description"]'
        );

      if (descriptionEN) {
        descriptionEN.setAttribute(
          "content",
          "Bello Rincón: bar, café, tapas and pizzeria. Oven-baked pizzas, Italian pasta, burgers, tapas and much more. Check our full menu and call to reserve."
        );
      }
    }


    // ----------------------------------------------------------
    // Save language
    // ----------------------------------------------------------

    try {
      localStorage.setItem(
        "belloRinconLanguage",
        lang
      );
    } catch (error) {
      // Ignore localStorage errors.
    }


    updateYear();
  }


  // ============================================================
  // LANGUAGE BUTTON EVENTS
  // ============================================================

  document.querySelectorAll(".lang-btn").forEach(function (button) {

    button.addEventListener("click", function () {

      var lang =
        button.getAttribute("data-lang");

      if (lang === "es" || lang === "en") {
        setLanguage(lang);
      }

    });

  });


  // ============================================================
  // INITIAL LANGUAGE
  // ============================================================

  var initialLanguage = "es";

  try {
    var savedLanguage =
      localStorage.getItem(
        "belloRinconLanguage"
      );

    if (
      savedLanguage === "es" ||
      savedLanguage === "en"
    ) {
      initialLanguage = savedLanguage;
    }

  } catch (error) {
    initialLanguage = "es";
  }

  setLanguage(initialLanguage);


  // ============================================================
  // ACTIVE CATEGORY PILL WHILE SCROLLING
  // ============================================================

  var sections =
    Array.prototype.slice.call(
      document.querySelectorAll(
        ".menu-section[id]"
      )
    );

  var pills =
    Array.prototype.slice.call(
      document.querySelectorAll(".cat-pill")
    );

  var track =
    document.getElementById(
      "categoryTrack"
    );


  if (
    sections.length &&
    pills.length &&
    "IntersectionObserver" in window
  ) {

    var pillById = {};

    pills.forEach(function (pill) {

      var id =
        pill.getAttribute("href")
          .replace("#", "");

      pillById[id] = pill;

    });


    var setActive = function (id) {

      pills.forEach(function (pill) {
        pill.classList.remove("is-active");
      });

      var active =
        pillById[id];

      if (!active) return;

      active.classList.add("is-active");


      if (track) {

        var trackRect =
          track.getBoundingClientRect();

        var pillRect =
          active.getBoundingClientRect();

        var offset =
          pillRect.left -
          trackRect.left -
          trackRect.width / 2 +
          pillRect.width / 2;

        track.scrollBy({
          left: offset,
          behavior: "smooth"
        });

      }

    };


    var headerOffset = 120;


    var observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }

          });

        },
        {
          rootMargin:
            "-" +
            headerOffset +
            "px 0px -65% 0px",

          threshold: 0
        }
      );


    sections.forEach(function (section) {
      observer.observe(section);
    });

  }

})();
