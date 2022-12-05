const movies = [
    {
      "titre" : "13: Game of Death",
      "realisateur" : "Chookiat Sakveerakul",
      "description" : "After losing his job, his car and his money, Phuchit, Krissada Sukosol, races against time to complete 13 tasks ordered by an anonymous caller who promised 100,000,000 Thai Baht upon completion.",
      "dureeTotale" : 114,
      "imageUrl" : "13_game_of_death.jpg",
      "view": 114,
      "years": 1997,
      "_id":"70632d43-001c-489a-b376-ed9ef516a5a4",
      "bgImage": "13_game_of_death.jpg"
    },
    {
      "titre" : "Alien",
      "realisateur" : "Ridley Scott",
      "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "dureeTotale" : 117,
      "imageUrl" : "alien.jpg",
      "view": 114,
      "years": 2001,
      "_id":"8633cb16-21cf-4ce3-ae09-f9571b46e381",
      "bgImage":"alien.jpg"
    },
    {
      "titre" : "Magnolia",
      "realisateur" : "Paul Thomas Anderson",
      "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
      "dureeTotale" : 188,
      "imageUrl" : "magnolia.jpg",
      "view": 100,
      "years": 2014,
      "_id":"3e51fa7d-8695-4bc2-b26d-d06e7dfa6a7a",
      "bgImage":"magnolia.jpg"
    },
    {
      "titre" : "Donnie Darko",
      "realisateur" : "Richard Kelly",
      "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "dureeTotale" : 113,
      "imageUrl" : "donnie_darko.jpg",
      "view": 50,
      "years": 1998,
      "_id":"6ab1f4f2-edf9-43d2-baf2-3713f4740fc5",
      "bgImage":"donnie_darko.jpg"
    },
    {
      "titre" : "Dobermann",
      "realisateur" : "Jan Kounen",
      "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
      "dureeTotale" : 94,
      "imageUrl" : "dobermann.jpg",
      "view": 94,
      "years": 2010,
      "_id":"42ec3b5e-280f-4afc-bfe0-c49d31fb84f5",
      "bgImage":"dobermann.jpg"
      

    },
    {
      "titre" : "Starship Troopers",
      "realisateur" : "Paul Verhoeven",
      "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
      "dureeTotale" : 129,
      "imageUrl" : "starship_troopers.jpg",
      "view": 100,
      "years": 2018,
      "_id":"1d43f0f2-89d1-40a8-b93a-18bdeb37a536",
      "bgImage":"starship_troopers.jpg"
    },

    {
      "titre" : "La Ligne verte",
      "realisateur" : "Frank Darabont",
      "description" : "Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales.",
      "dureeTotale" : 189,
      "imageUrl" : "la_ligne_verte.jpg",
      "view": 20,
      "years": 1993,
      "_id":"a318e141-aa53-4f47-8d28-0a5cb3c50cca",
      "bgImage":"p2_la_ligne_verte"
    },
    {
      // "titre" : "Forrest Gump",
      "realisateur" : " Robert Zemeckis",
      "description" : "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.",
      "dureeTotale" : 140,
      "imageUrl" : "Forrest_Gump.jpg",
      "view": 40,
      "years": 2004,
      "_id":"04cca444-67e7-40cf-9bd2-259b015b2b97",
      "bgImage":"p2_forrest_gump.jpg"
    },
    {
      "titre" : "La Liste de Schindler",
      "realisateur" : " Steven Spielberg",
      "description" : "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.",
      "dureeTotale" : 195,
      "imageUrl" : "La_Liste_de_Schindler.jpg",
      "view": 54,
      "years": 2019,
      "_id":"04e3eb97-fee6-4479-8884-8b11ebe7a558",
      "bgImage":"p2_la _liste_de_Schindler.jpg"
      
    },

    {
      "titre" :"12 hommes en colère",
      "realisateurr" : "Sidney Lumet",
      "description" : "Lors d'un procès, un juré émet l'hypothèse que l'homme qu'il doit juger n'est peut-être pas coupable. Il va tenter de convaincre les onze autres jurés.",
      "dureeTotale" : 95,
      "imageUrl" : "12_hommes_en_colere.jpg",
      "view": 85,
      "years": 2011,
      "_id":"87fe9803-adde-47b4-95d5-ab6195e9f533",
      "bgImage": "12_hommes_en_colere.jpg"
      
    },

    {
      "titre" :"Le Parrain",
      "realisateur" : " Francis Ford Coppola",
      "description" : "En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone marie sa fille à un bookmaker. Sollozzo, 'parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue...",
      "dureeTotale" : 175,
      "imageUrl" : "le_parrain_trilogie.jpg",
      "view": 100,
      "years": 1995,
      "_id":"59b53b2e-2b14-4010-83a0-d075e1d446e0",
      "bgImage":"p2_le_parrain.jpg"
    },
    {
      "titre" :"Les Evadés",
      "realisateur" : "Frank Darabont",
      "description" : "Condamné à perpétuité pour le meurtre de sa femme et de son amant, un banquier s'accroche à l'espoir et se lie d'amitié avec un autre détenu pour survivre en prison.",
      "dureeTotale" : 142,
      "imageUrl" : "Les_Evadés.jpg",
      "view": 142,
      "years": 2016,
      "_id":"a872f276-c207-4650-8280-ed87d628426d",
      "bgImage":"Les_Evadés.jpg"
      
     

    }

];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




