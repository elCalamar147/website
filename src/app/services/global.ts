import { ProductoModel } from "../models/producto.model"

//Ruta del BackEnd donde consultar la BBDD
export var Global = {
	url: "http://localhost:3700/api/"
}

export var Imagenes = {
	imgCervezas : "../../../assets/img/cervezas.jpg",
	imgGinebras : "../../../assets/img/ginebras.jpg",
	imgLicores : "../../../assets/img/licores.jpg",
	imgRefrescos : "../../../assets/img/refrescos.jpg",
	imgRones : "../../../assets/img/ron.jpg",
	imgSangVerm: "../../../assets/img/san-ver.jpg",
	imgVinos: "../../../assets/img/vinos.jpg",
	imgVozkas: "../../../assets/img/vozkas.jpg",
	imgWhiskys: "../../../assets/img/whiskys.jpg"
}

export var CartaCompleta: Array<ProductoModel> = [
//	BEBIDAS -> 1X
//	COMIDAS -> 2X


//	CERVEZAS (10)
	{ _id: 0, descElemento: "Copa de cerveza 33cl", imp1:2.50 , imp2: 0, tipo: 0 },
	{ _id: 0, descElemento: "Tercio Mahou 5 estrellas", imp1:2.75 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Tercio Mahou Maestra", imp1:3.25 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Tercio Mahou 5 estrellas sin gluten", imp1:2.75 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Tercio Estrella Galicia", imp1:2.75 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Tercio SIN", imp1:2.75 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Tercio Radler", imp1:2.75 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Jarra de Cerveza 0,5L", imp1:4 , imp2: 0, tipo: 0  },
	{ _id: 0, descElemento: "Tercio Alhambra reserva 1925", imp1:3.25 , imp2: 0, tipo: 0  },
	
//	GINEBRAS (11)
	{ _id: 0, descElemento: "Larios", imp1: 5.5, imp2: 4.5, tipo: 1 },
	{ _id: 0, descElemento: "Beefreater", imp1: 7, imp2: 6, tipo: 1 },
	{ _id: 0, descElemento: "Larios 12", imp1: 7, imp2: 6, tipo: 1 },
	{ _id: 0, descElemento: "Barcelo", imp1: 7, imp2: 6, tipo: 1 },
	{ _id: 0, descElemento: "Puerto de indias", imp1: 8.5, imp2: 7.5, tipo: 1 },
	{ _id: 0, descElemento: "Puertos de indias strawberry", imp1: 8.5, imp2: 7.5, tipo: 1 },
	{ _id: 0, descElemento: "Bombay Sapphire", imp1: 9.5, imp2: 8.5, tipo: 1 },
	{ _id: 0, descElemento: "Martin Miller’s", imp1: 10, imp2: 8, tipo: 1 },
	{ _id: 0, descElemento: "Seagram’s", imp1: 7, imp2: 6, tipo: 1 },
	
//	LICORES (12)
	{ _id: 0, descElemento: "Orujo (blanco, hierbas o crema)", imp1:3 , imp2: 1.5, tipo: 2 },
	{ _id: 0, descElemento: "Jägermeister", imp1: 3 , imp2: 1.5, tipo: 2 },
	{ _id: 0, descElemento: "Carlos I", imp1: 8.5 , imp2: 2.5, tipo: 2 },
	{ _id: 0, descElemento: "Magno", imp1: 3 , imp2: 1.5, tipo: 2 },
	{ _id: 0, descElemento: "Castellana", imp1: 3 , imp2: 2, tipo: 2 },
	{ _id: 0, descElemento: "Baileys", imp1: 4 , imp2: 1.5, tipo: 2 },
	{ _id: 0, descElemento: "Veterano", imp1: 3 , imp2: 1.5, tipo: 2 },
	{ _id: 0, descElemento: "Ponche Caballero", imp1: 3 , imp2: 1.5, tipo: 2 },
	{ _id: 0, descElemento: "Pacharán", imp1: 3 , imp2: 1.5, tipo: 2 },
	
//	REFRESCOS (13)
	{ _id: 0, descElemento: "Aquarius (naranja o limón)", imp1:2.50, imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Coca Cola (normal, light, zero)", imp1:2.50, imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Fanta (naranja o limón)", imp1:2.50, imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Mosto", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Nestea", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Sprite", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Tónica", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Zumos (naranja, piña o melocotón)", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Zumo de naranja Natural", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Agua con gas", imp1:2.50 , imp2: 0, tipo: 3 },
	{ _id: 0, descElemento: "Agua 0,5 L", imp1:2.50 , imp2: 0, tipo: 3 },
	
//	RON (14)
	{ _id: 0, descElemento: "Bacardi", imp1: 6, imp2: 5, tipo: 4 },
	{ _id: 0, descElemento: "Cacique", imp1: 6, imp2: 5, tipo: 4 },
	{ _id: 0, descElemento: "Brugal", imp1: 6, imp2: 5, tipo: 4 },
	{ _id: 0, descElemento: "Barcelo", imp1: 6, imp2: 5, tipo: 4 },
	{ _id: 0, descElemento: "Havana Club 7 años", imp1: 10, imp2: 9, tipo: 4 },
	
//	SANGRIA Y VERMUTH (15)
	{ _id: 0, descElemento: "Martini (rojo o blanco)", imp1:3, imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Yzaguirre", imp1:3, imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Copa tinto de verano", imp1:2.50, imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Jarra 0,5L de tinto de verano", imp1:4 , imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Jarra 1L de tinto de verano", imp1:8 , imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Copa de sangría", imp1:3 , imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Jarra 0,5L de sangría", imp1:4.50 , imp2: 0, tipo: 5 },
	{ _id: 0, descElemento: "Jarra 1L de sangría", imp1:9 , imp2: 0, tipo: 5 },
	
//	VINOS (16)
	{ _id: 0, descElemento: "Copa Rioja crianza", imp1:2.50, imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella de Rioja crianza", imp1:13, imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Copa Ribera de Duero", imp1:2.75, imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella de Ribera de Duero", imp1:16.50 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella Rioja reserva", imp1:18 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Copa Rueda", imp1:2.50 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella Rueda", imp1:14 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Copa Albariño", imp1:3, imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella Albariño", imp1:15 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Copa rosado Navarro", imp1:2.50 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella rosado Navarro", imp1:14 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Copa de Tío Pepe", imp1:4 , imp2: 0, tipo: 6 },
	{ _id: 0, descElemento: "Botella de Tío Pepe", imp1:20 , imp2: 0, tipo: 6 },
	
//	VOZKAS (17)
	{ _id: 0, descElemento: "Eristoff", imp1: 6, imp2: 5, tipo: 7 },
	{ _id: 0, descElemento: "Smirnoff", imp1: 6, imp2: 5, tipo: 7 },
	{ _id: 0, descElemento: "Absolute", imp1: 7, imp2: 6.5, tipo: 7 },
	
//	WHISKYS (18)
	{ _id: 0, descElemento: "JB", imp1: 6, imp2: 5, tipo: 8 },
	{ _id: 0, descElemento: "Ballantines", imp1: 6, imp2: 5, tipo: 8 },
	{ _id: 0, descElemento: "DYC", imp1: 6, imp2: 5, tipo: 8 },
	{ _id: 0, descElemento: "Jhonnie Walker Red Label", imp1: 6, imp2: 5, tipo: 8 },
	{ _id: 0, descElemento: "Jhonnie Walker Black Label", imp1: 10, imp2: 9, tipo: 8 },
	{ _id: 0, descElemento: "Jack Daniel’s", imp1: 9, imp2: 8, tipo: 8 },
	{ _id: 0, descElemento: "Chivas Regas", imp1: 10, imp2: 9, tipo: 8 },
	{ _id: 0, descElemento: "Macallan", imp1: 20, imp2: 18, tipo: 8 }
]