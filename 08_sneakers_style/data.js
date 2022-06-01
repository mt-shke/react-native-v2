const PRODUITS = [
    {
        id: "1",
        brand: "Lidl",
        title: "Taglia",
        desc: "Baskets TGL EU ",
        price: "249",
        likes: "2",
        size: "45",
        stocked: "true",
        photo: require("./src/assets/img/1.png"),
    },
    {
        id: "2",
        brand: "Nike",
        title: "Air max 96 supreme",
        desc: "La première Air Max lifestyle de Nike vous offre style et confort à travers la Nike Air Max 270",
        price: "220",
        likes: "8",
        size: "41",
        stocked: "true",
        photo: require("./src/assets/img/2.png"),
    },
    {
        id: "3",
        brand: "Nike",
        title: "AIR HUARACHE 'OLIVE'",
        desc: "La Nike Air Huarache Ultra est une version repensée, plus confortable et plus flexible que sa grande soeur.",
        price: "210",
        likes: "21",
        size: "45",
        stocked: "true",
        photo: require("./src/assets/img/3.png"),
    },
    {
        id: "4",
        brand: "Nike",
        title: "AF1 bronx",
        desc: "Nike Sportswear rend hommage au « Bronx » avec une Air More Money inédite inspirée du célèbre quartier new yorkais",
        price: "180",
        likes: "47",
        size: "40",
        stocked: "false",
        photo: require("./src/assets/img/4.png"),
    },
    {
        id: "5",
        brand: "Balenciaga",
        title: "sneaker speed recycled",
        desc: "Sneaker Speed Recycled en maille recyclée noire avec semelle extérieure blanche et noire",
        price: "270",
        likes: "15",
        size: "45",
        stocked: "true",
        photo: require("./src/assets/img/5.png"),
    },
    {
        id: "6",
        brand: "Nike",
        title: "Jordan 1 High Hyper Royal",
        desc: "Inspirée de la première AJ1, la chaussure Air Jordan 1 Mid propose aux fans des Jordan rétro de suivre les traces de la grandeur.",
        price: "350",
        likes: "4",
        size: "42",
        stocked: "true",
        photo: require("./src/assets/img/6.png"),
    },
    {
        id: "7",
        brand: "Emporio Armani",
        title: "Sock sneakers montantes en maille lurex",
        desc: "Emporio Armani revisite les sock sneakers. S’inspirant des chaussettes de sport, ce modèle offre fonctionnalité et ",
        price: "120",
        likes: "4",
        size: "43",
        stocked: "false",
        photo: require("./src/assets/img/7.png"),
    },
    {
        id: "8",
        brand: "Adidas",
        title: "Yeezy boost 350v2 Sand Taupe",
        desc: "La populaire lowtop se pare d’une tige en Primeknit beige, rappelant légèrement le coloris Antlia, contrastée par une bande latérale bleutée ainsi que par une doublure bleue claire",
        price: "300",
        likes: "2",
        size: "44",
        stocked: "false",
        photo: require("./src/assets/img/8.png"),
    },
    {
        id: "9",
        brand: "Nike",
        title: "Air max 97 off White mentha",
        desc: "Revendiquez votre côté rebelle avec votre Nike Air Max Plus, un modèle Air novateur qui offre une stabilité optimale et un amorti exceptionnel. ",
        price: "800",
        likes: "4",
        size: "45",
        stocked: "true",
        photo: require("./src/assets/img/9.png"),
    },
    {
        id: "10",
        brand: "Alexander McQueen",
        title: "Alexander McQueen Baskets oversize en cuir",
        desc: "Les classiques baskets basses d'Alexander McQueen sont ici revisitées avec d'imposantes semelles en caoutchouc blanc. Ce modèle a été fabriqué à partir de cuir noir et arbore un logo doré sur le talon.",
        price: "300",
        likes: "6",
        size: "42",
        stocked: "true",
        photo: require("./src/assets/img/10.png"),
    },
    // {
    //     id: "11",
    //     brand: "Nike",
    //     title: "AF1 ART BROKEN SWOOSH",
    //     desc: "Nous nous sommes amusé à détacher le symbole Nike et à le découper pour le repositionner en morceaux de toutes les couleurs. Ne soyez pas surpris on va vous regarder dans les chaussures.",
    //     price: "134",
    //     likes: "12",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/nike/artBroken_1.png"),
    // },
    // {
    //     id: "12",
    //     brand: "Nike",
    //     title: "AF1 BANSKSY FILLE AU BALLONS",
    //     desc: "Ce modèle street Art Bansksy rend hommage aux maux de la société avec une approche graphique unique.",
    //     price: "129",
    //     likes: "4",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/nike/filleAuBallon_1.png"),
    // },
    // {
    //     id: "13",
    //     brand: "Nike",
    //     title: "AF1 BLUE SKY LV",
    //     desc: "Un hommage à la marque Louis Vuitton avec des couleurs douces.",
    //     price: "129",
    //     likes: "2",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/nike/blueSky_2.png"),
    // },
    // {
    //     id: "14",
    //     brand: "Nike",
    //     title: "AF1 BURBERRY LION",
    //     desc: "Ce modèle Burberry et lion est superbe pour les amoureux de custom et son succès est au rendez vous.",
    //     price: "139",
    //     likes: "7",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/nike/burberryLion_1.png"),
    // },
    // {
    //     id: "15",
    //     brand: "Adidas",
    //     title: "STAN SMITH HARRY POTTER",
    //     desc: "Avec ce thème Harry Potter préparez votre balai !",
    //     price: "134",
    //     likes: "27",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/adidas/harryPotter_1.png"),
    // },
    // {
    //     id: "16",
    //     brand: "Adidas",
    //     title: "STAN SMITH MICHEL ANGE LA CRÉATION D'ADAM",
    //     desc: "Avec ce thème Grand Maître vous affichez votre gout pour la culture",
    //     price: "174",
    //     likes: "14",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/adidas/michelAnge_1.png"),
    // },
    // {
    //     id: "17",
    //     brand: "Adidas",
    //     title: "STAN SMITH TINTIN 2.0",
    //     desc: "Avec ce thème Tintin 2.0 encore une raison d'afficher votre amour pour le monde d'Hergé",
    //     price: "134",
    //     likes: "5",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/adidas/tintin_1.png"),
    // },
    // {
    //     id: "18",
    //     brand: "Adidas",
    //     title: "COLOR GEOMETRIC",
    //     desc: "Avec ce thème Multicolors vous serez pour des années à la mode",
    //     price: "134",
    //     likes: "39",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/adidas/colorGeometric_1.png"),
    // },
    // {
    //     id: "19",
    //     brand: "Converse",
    //     title: "ASTROWORLD",
    //     desc: "Ce modèle Astroword est le hommage à l'artiste Travis Scott et son album du même nom.",
    //     price: "109",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/converse/astroworld_1.png"),
    // },
    // {
    //     id: "20",
    //     brand: "Converse",
    //     title: "CDG",
    //     desc: 'Ce modèle d\'inspiration "Comme des Garçons" est unique et fera tourner les têtes de vos amis et relations',
    //     price: "99",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/converse/CDG_1.png"),
    // },
    // {
    //     id: "21",
    //     brand: "Converse",
    //     title: "GROOT",
    //     desc: "Ce modèle Marvel est un classique efficace !",
    //     price: "99",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/converse/groot_1.png"),
    // },
    // {
    //     id: "22",
    //     brand: "Converse",
    //     title: "WAVE",
    //     desc: "Ce modèle WAVE ont une forte présence et vous ne vous laisserez surfer sur la vague du succès.",
    //     price: "119",
    //     size: "toutes tailles",
    //     stocked: "true",
    //     photo: require("./src/assets/img/converse/wave_1.png"),
    // },
];

export default PRODUITS;
