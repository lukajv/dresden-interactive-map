/*
    ----TEMPLATE----
{
        name: "",
        coords: [],
        date: "",
        info: "",
        imageUrl: "",
        sources: [
            {
                label: "",
                url: ""
            }
        ]
        shape: {
            type: "",
        }
}
 */


const locations = [{
    name: "Altmarkt", //coords: [51.0491019, 13.7352104],
    date: "Feb 1945",
    info: "During the bombing raids, the historic Altmarkt (Old Market) was completely destroyed. "
        + "Reconstruction with a modified square layout began in 1953.",
    imageUrl: "images/Altmarkt.jpg",
    sources: [{
        label: "City of Dresden Portal",
        url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/altmarkt.php#?searchkey=Altmarkt"
    }],
    shape: {
        type: "polygon",
        coords: [[51.049087, 13.738511], [51.050082, 13.738618], [51.050219, 13.737110], [51.049152, 13.737016]]
    }
}, {
    name: "Frauenkirche",
    coords: [51.0519, 13.7415],
    date: "13 Feb 1945",
    info: "\"Church of Our Lady\" was constructed between 1726 and 1743 by George Bähr. "
        + "After the air raid, the building stood for one day. It toppled finally since the sandstone "
        + "foundation could not withstand the high temperatures. After Germany's reunification, it was rebuilt "
        + "in the 1990s.",
    imageUrl: "images/Frauenkirche.jpg",
    sources: [{
        label: "City of Dresden Portal",
        url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/frauenkirche.php#?searchkey=Frauenkirche"
    }]
}, {
    name: "Taschenberg Palace",
    coords: [51.052206, 13.735355],
    date: "16 April 1945",
    info: "This historic building is to stand in ruins for 50 years after the bombing. Reconstruction began in 1993."
        + " On 31 March 1995, it was officially recognized as rebuilt as the Hotel Tauschenburgpalis Kempinski Dresden.",
    imageUrl: "images/Taschenbergpalis.jpg",
    sources: [{
        label: "Kempinski",
        url: "https://www.kempinski.com/en/hotel-taschenbergpalais/history/30-years-taschenbergpalais"
    }]
}, {
    name: "Schlossplatz, Cathedral of the Holy Trinity",
    coords: [51.053555, 13.738012],
    date: "7-8 May 1945",
    info: "After the citizens had been expecting the city to fall for weeks, it was eventually captured"
        + " by the Red Army's 1st Ukrainian Front. On this day, a mine-clearing unit marked this building as cleared "
        + "of mines in Cyrillic writing and signed it. Four of these inscriptions remain at various places around the exterior"
        + " of the cathedral.",
    imageUrl: "images/Schlossplatz.jpg",
    sources: [{
        label: "City of Dresden Portal",
        url: "https://www.dresden.de/de/tourismus/sehen/sehenswuerdigkeiten/altstadt/kathedrale.php"
    }, {
        label: "GRAVUREN. Mahndepots in Dresden",
        url: "https://mahndepots-dresden.de/orte/ort57/"
    }]
}, {
    name: "Sternplatz",
    coords: [51.046882, 13.725907],
    date: "13 Feb 1945",
    info: "Planning documents at the city's \"Emergency Comittee to Combat Emegencies\" in 1943"
        + " identified Sternplatz as one of the 100+ sites to bury dead bodies from air raids. On the"
        + " night of the bombing, the buildings surrounding Sternplatz were leveled by fire and eventually destroyed.",
    imageUrl: "images/Sternplatz.jpg",
    sources: [{
        label: "City of Dresden Portal",
        url: "https://www.dresden.de/de/stadtraum/umwelt/gruenes-dresden/gruenanlagen-parks/sternplatz.php"
    }, {
        label: "GRAVUREN. Mahndepots in Dresden",
        url: "https://mahndepots-dresden.de/orte/ort29/"
    }],
    shape: {
        type: "circle", radius: 50
    }
}, {
    name: "Weiße Gasse 5/7",
    coords: [51.049482, 13.740446],
    date: "1956",
    info: "The Weiße Gasse is a pedestrian zone which was part of the reconstruction after the war, which"
        + " began in 1953. At the end of the year in 1956, buildings Weiße Gasse 5 and 7 were completed. Upon completion,"
        + " an inscription could be found on the keystone. \"EVERY STONE OF THE NEW CITY CARRIES THE LETTERS INVISIBLY: PEACE\"",
    imageUrl: "images/WeiszeGasse.jpg",
    sources: [{
        label: "GRAVUREN. Mahndepots in Dresden",
        url: "https://mahndepots-dresden.de/orte/ort70/"
    }, {
        label: "Gastro Guide",
        url: "https://www.gastroguide.de/restaurant/182524/restaurant-foerster-s/dresden/"
    }]
}, {
    name: "Metal Trail of Remembrance",
    coords: [51.049635, 13.737939],
    date: "19 Jan 2024",
    info: "On this date, a new information steele was erected in the square "
        + "as a replacement for the old one which was damaged "
        + "in 2023. It speaks about the 6,865 people who were burned in the"
        + " square due to the overloaded cemetaries, and how they were"
        + " buried together at Heidefriedhof cemetary in a mass grave.\n\n"
        + "The full information steele can be read at the provided source"
        + " link.",
    imageUrl: "images/MetalTrail.jpg",
    sources: [{
        label: "VisitDresden",
        url: "https://www.visit-dresden-elbland.de/en/poi/metal-trail-of-remembrance-on-the-altmarkt-in-dresden"
    }]
},
    {
        name: "Heinrichstraße 2",
        coords: [51.059285, 13.742369],
        date: "13 Feb 1945",
        info: "On this evening, under the air-raids, wardens employed under"
            + " the firm Koch & Sterzel were on duty at the Mickten Works."
            + "Since the first air raid did not damage the works, the"
            + " wardens formed a fire brigade to help others. While on the"
            + " way to the Ministry of the Interior, the sirens again"
            + " sounded for the second wave. They had to head back.\n\n"
            + "Again the works remained undamaged, and they again went to"
            + " help. As they were crossing Heinrichstraße, they were asked"
            + " to help. After finding a fire hydrant, and several hours,"
            + " they succeeded and were the only fire fighters in Hauptstraße."
            + "\n\n Since fuel for the pump used to extinguish the fire was"
            + " depleted, they returned to work the next morning.",
        //imageUrl: "",
        sources: [
            {
                label: "GRAVUREN. Mahndepots in Dresden",
                url: "https://mahndepots-dresden.de/orte/ort35/"
            }
        ]
    },
    {
        name: "Königsufer, Ministry of the Interior",
        coords: [51.055780, 13.744640],
        date: "21 July 1944",
        info: "One day after the failed assasination of Hitler, significant"
            + " numbers of all units of the Dresden garrison were forced"
            + " into a show of dedication for the Führer. The Dresdeners"
            + " were receptive, and NSDAP, the Hitler Youth, and other"
            + " groups marched in demonstration.\n\n"
            + "Now this building is being renewed. They plan to combine"
            + " \"History and Modernity\" to preserve the current layout and"
            + " structure while modernizing the inside.",
        imageUrl: "Konigsufer.jpg",
        sources: [
            {
                label: "GRAVUREN. Mahndepots in Dresden",
                url: "https://mahndepots-dresden.de/orte/ort14/"
            },
            {
                label: "City of Dresden Portal",
                url: "https://www.dresden.de/de/stadtraum/zentrale-projekte/koenigsufer-neustaedter-markt.php"
            }
        ]
    },
    {
        name: "Neustadter Bahnhof",
        coords: [51.065340, 13.740956],
        date: "Oct 1944",
        info: "During this time, on average, 19,600 soldiers and officers"
            + " would pass through this railway station daily. The engines"
            + " of around half the trains were changed at the station, and"
            + " the other half recieved food and medical care. Wehrmacht"
            + " care stations were established at both of Dresden's large"
            + " railway stations.\n\n"
            + "Opened in 1901, the station initially replaced the previous"
            + " Leipziger and Schlesicher Bahnhof stations, consolidating"
            + " the rail traffic on the northern side.",
        imageUrl: "NeustadtBahnhof.jpeg",
        sources: [
            {
                label: "Mapy",
                url: "https://mapy.com/en/turisticka?source=osm&id=1067625402&x=13.7411284&y=51.0655621&z=18"
            },
            {
                label: "GRAVUREN. Mahndepots in Dresden",
                url: "https://mahndepots-dresden.de/orte/ort2/"
            }
        ]
    },
    {
        name: "Tieckstraße 14",
        coords: [51.061897, 13.753286],
        date: "13 Feb 1945",
        info: "Primary School No. 49, in Tieckstraße 14, served more than"
            + " 1,000 piles of straw as beds for refugees. On the evening of"
            + " the 13th, 750 new refugees had arrived. They were forced to"
            + " evacuate a burning building to the vocational school across"
            + " the way. On the morning of the 14th, military vehicles"
            + " arrived and evacuted all the civilians."
            + "\n\nThe school was completely gutted by fire and left"
            + " destroyed.",
        //imageUrl: "",
        sources: [
            {
                label: "GRAVUREN. Mahndepots in Dresden",
                url: "https://mahndepots-dresden.de/orte/ort25/"
            }
        ]
    }
    ];
