const locations = [
    {
        name: "Altmarkt",
        coords: [51.0491019, 13.7352104],
        date: "Feb 1945",
        info: "During the bombing raids, the historic Altmarkt (Old Market) was completely destroyed. " +
            "Reconstruction with a modified square layout began in 1953.",
        imageUrl: "images/Altmarkt.jpg",
        sources: [
            { label: "City of Dresden Portal", url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/altmarkt.php#?searchkey=Altmarkt"}
        ],
        shape: {
            type: "polygon",
            coords: [[51.049087, 13.738511], [51.050082, 13.738618], [51.050219, 13.737110], [51.049152, 13.737016]]
        }
    },
    {
        name: "Frauenkirche",
        coords: [51.0519, 13.7415],
        date: "13 Feb 1945",
        info: "\"Church of Our Lady\" was constructed between 1726 and 1743 by George Bahr. " +
            "After the air raid, the building stood for one day. It toppled finally since the sandstone " +
            "foundation could not withstand the high temperatures. After Germany's reunification, it was rebuilt " +
            "in the 1990s.",
        imageUrl: "images/Frauenkirche.jpg",
        sources: [
            {
                label: "City of Dresden Portal",
                url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/frauenkirche.php#?searchkey=Frauenkirche"
            }
        ]
    },
    {
        name: "Taschenberg Palace",
        coords: [51.052206, 13.735355],
        date: "16 April 1945",
        info: "This historic building is to stand in ruins for 50 years after the bombing. Reconstruction began in 1993." +
            " On 31 March 1995, it was officially recognized as rebuilt as the Hotel Tauschenburgpalis Kempinski Dresden.",
        imageUrl: "images/Taschenbergpalis.jpg",
        sources: [
            {
                label: "Kempinski",
                url: "https://www.kempinski.com/en/hotel-taschenbergpalais/history/30-years-taschenbergpalais"
            }
        ]
    },
    {
        name: "Schlossplatz, Cathedral of the Holy Trinity",
        coords: [51.053555, 13.738012],
        date: "7-8 May 1945",
        info: "After the citizens had been expecting the city to fall for weeks, it was eventually captured" +
            " by the Red Army's 1st Ukrainian Front. On this day, a mine-clearing unit marked this building as cleared " +
            "of mines in Cyrillic writing and signed it. Four of these inscriptions remain at various places around the exterior" +
            " of the cathedral.",
        imageUrl: "images/Schlossplatz.jpg",
        sources: [
            {
                label: "City of Dresden Portal",
                url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/kathedrale.php"
            },
            {
                label: "GRAVUREN. Mahndepots in Dresden",
                url: "https://mahndepots-dresden.de/orte/ort57/"
            }
        ]
    }
];