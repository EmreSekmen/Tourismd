const places = [
    {
        id: 1,
        name: "Tokyo",
        location: "Tokyo, Japonya",
        image: "/Tourismd/Fotoğraflar/Tokyo.jpg",
        rating: "★★★★☆",
        category: "metropolis",
        description: "Tokyo is the vibrant capital of Japan, where futuristic skyscrapers meet ancient temples. From world-famous districts like Shibuya and Akihabara to peaceful gardens and incredible cuisine, Tokyo offers an unforgettable travel experience."
    },
    {
        id: 2,
        name: "Miami",
        location: "Miami, USA",
        image: "/Tourismd/Fotoğraflar/Miami.jpg",
        rating: "★★★★☆",
        category: "beach",
        description: "Miami is a vibrant coastal city known for its sunny beaches, colorful nightlife, and Art Deco architecture. Whether you're relaxing by the ocean or exploring Little Havana, Miami has something for every traveler."
    },
    {
        id: 3,
        name: "Zonguldak",
        location: "Zonguldak, Türkiye",
        image: "/Tourismd/Fotoğraflar/Zonguldak.jpg",
        rating: "★★★★☆",
        category: "nature",
        description: "Located on Turkey's Black Sea coast, Zonguldak is famous for its lush forests, dramatic cliffs, and rich mining history. It's a peaceful destination for travelers who enjoy nature and coastal scenery."
    },
    {
        id: 4, name:
            "Machu Picchu",
        location: "Peru",
        image: "/Tourismd/Fotoğraflar/Machu Picchu.jpg",
        rating: "★★★★☆",
        category: "historical",
        description: "Machu Picchu is one of the world's most iconic archaeological sites, hidden high in the Andes Mountains of Peru. This ancient Inca city offers breathtaking views and an unforgettable glimpse into history."
    },
    {
        id: 5,
        name: "Paris",
        location: "Paris, France",
        image: "/Tourismd/Fotoğraflar/Paris.jpg",
        rating: "★★★★☆",
        category: "romantic",
        description: "Paris, the capital of France, is celebrated for its art, fashion, architecture, and romantic atmosphere. From the Eiffel Tower to charming cafés, every street has a story to tell."
    },
    {
        id: 6,
        name: "Vegas",
        location: "Las Vegas, USA",
        image: "/Tourismd/Fotoğraflar/Vegas.jpg",
        rating: "★★★★☆",
        category: "nightlife",
        description: "Las Vegas is the entertainment capital of the world, famous for its luxury resorts, casinos, spectacular shows, and vibrant nightlife. Beyond the Strip, you'll also find unique desert landscapes nearby."

    },
    {
        id: 7,
        name: "Venice",
        location: "Venice, Italy",
        image: "/Tourismd/Fotoğraflar/Venedik.jpg",
        rating: "★★★★☆",
        category: "romantic",
        description: "Venice is a unique Italian city built on canals instead of roads. Gondola rides, historic bridges, and beautiful architecture make Venice one of the world's most memorable destinations."


    },
    {
        id: 8,
        name: "Santorini",
        location: "Santorini, Greece",
        image: "/Tourismd/Fotoğraflar/santorini.jpg",
        rating: "★★★★☆",
        category: "Island",
        description: "Santorini is a stunning Greek island known for its whitewashed houses, blue-domed churches, and breathtaking sunsets. It is one of the most photographed destinations in the world."

    },
    {
        id: 9,
        name: "Athens",
        location: "Athens, Greece",
        image: "/Tourismd/Fotoğraflar/Athens.jpg",
        rating: "★★★★☆",
        category: "historical",
        description: "Athens is the historic capital of Greece and the birthplace of democracy. Ancient landmarks like the Acropolis stand alongside lively neighborhoods filled with cafés, restaurants, and local culture."

    },
    {
        id: 10,
        name: "Crete",
        location: "Crete, Greece",
        image: "/Tourismd/Fotoğraflar/Crete.jpg",
        rating: "★★★★☆",
        category: "Island",
        description: "Crete is the largest Greek island, offering beautiful beaches, ancient ruins, and picturesque mountain villages. It combines rich history with Mediterranean charm."

    },
    {
        id: 11,
        name: "Rhodes",
        location: "Rhodes, Greece",
        image: "/Tourismd/Fotoğraflar/Rhodes.jpg",
        rating: "★★★★☆",
        category: "Island",
        description: "Rhodes is a beautiful Greek island famous for its medieval Old Town, crystal-clear waters, and sunny coastline. Visitors can enjoy both historical landmarks and relaxing beach holidays."

    },
    {
        id:12,
        name: "Ankara",
        location: "Ankara, Turkey",
        image: "/Tourismd/Fotoğraflar/Ankara.jpg",
        rating: "★★★★☆",
        category: "metropolis",
        description: "Ankara is the capital of Turkey, blending modern city life with centuries of history. From Anıtkabir to museums and vibrant cultural districts, Ankara offers a unique perspective on the country's heritage."
        
    },
    {
        id: 101,
        name: "Shibuya",
        location: "Tokyo, Japan",
        image: "/Tourismd/Fotoğraflar/Shibuya.jpg",
        rating: "★★★★☆",
        category: "landmark",
        parentId: 1,
        
    },
    {
        id: 102,
        name: "Tokyo Tower",
        location: "Tokyo, Japan",
        image: "/Tourismd/Fotoğraflar/TokyoTower.jpg",
        rating: "★★★★☆",
        category: "landmark",
        parentId: 1,
    },
    {
      id: 103,
      name: "Akihabara",
      location: "Tokyo, Japan",
      image: "/Tourismd/Fotoğraflar/Akihabara.jpg",
      rating: "★★★★☆",
      category: "landmark",
      parentId: 1,
    },
    {  
        id: 121,
        name: "Kafkas Pide",
        location: "Zonguldak, Ereğli",
        image: "/Tourismd/Fotoğraflar/KafkasPide.jpg",
        rating: "★★★★☆",
        category: "landmark",
        parentId: 3
    },
    {
        id: 122,
        name: "Hasan Kuru",
        location: "Zonguldak, Ereğli",
        image: "/Tourismd/Fotoğraflar/HasanKuru.jpg",
        rating: "★★★★☆",
        category: "landmark",
        parentId: 3,
    },
    {
        id: 123,
        name: "Marina Cafe",
        location: "Zonguldak, Ereğli",
        image: "/Tourismd/Fotoğraflar/Marina.jpg",
        rating: "★★★★☆",
        category: "landmark",
        parentId: 3,
    }
    
]




const logs = [
    
{
   id: 1,
   placeId: 1,
   user: "Emre",
   rating: "★★★★★",
   review: "Amazing city! Akihabara was my favorite place.",
   date: "2 Days ago",
},
{
    id: 2,
    placeId: 1,
    user: "Sarah",
    rating: "★★★★☆",
    review: "Loved Tokyo, especially the food and nightlife.",
    date: "1 week ago"
},
]