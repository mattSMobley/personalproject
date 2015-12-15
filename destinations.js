var destinations = [
{name: "York, England",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Just two hours north of London by rail, the city of York holds 1900 years' worth of history in its ancient walls. The Romans built the city in 71 AD, and the Vikings captured it in 866 AD. Stop by the Yorkshire Museum and Gardens for a look at what the Roman and Vikings left behind (they must have packed light when they left). From there, move on to the York Castle Museum for a not-so-quick overview of the most recent 400 years."
},
{name: "Kotor, Montenegro",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Located on a beautiful bay on the coast of Montenegro, Kotor is a city steeped in tradition and history, with remarkable scenic views. A UNESCO World Heritage site, the old city was built between the 12th and 14th centuries and is filled with medieval architecture and historic monuments. Extending over four kilometers, the city walls that have protected Kotor for centuries lead up to the fortress of Saint Ivan."
},
{name: "Abu Dhabi, U.A.E.",
  desert: true,
  city: true,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: false,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "Atmospheric backstreets paint a very different picture to first impressions of Abu Dhabi. The often slick and modern capital of the U.A.E. presents a fascinating mixture of tradition and progression. Tracing its rich history back to around 3000 B.C., Abu Dhabi maintains a more distinctly Arabian ambiance than glitzy Dubai. Taxis are a safe, reliable way to get around sites such as The Corniche Park, the White Fort, the Heritage Village, which offers glimpses into Bedouin life, and the Women's Craft Centre."
},
{name: "Plymouth, England",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "The 'about' section for Plymouth, England isn't available right now. Thank you for your patience while this problem is being rectified."
},
{name: "Amsterdam, The Netherlands",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "This city, full of colorful homes, canals and bridges, is one of Europe's most picturesque capitals. Must-sees on any visitor's itinerary include the Anne Frank House, the Van Gogh Museum and the world's only floating flower market. Rent a bike and join thousands of locals navigating Amsterdam's labyrinthine streets, or just take in the sights on foot. For an unusual and memorable alternative to hotels, consider staying in a houseboat."
},
{name: "Barcelona, Spain",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: true,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Barcelona feels a bit surreal – appropriate, since Salvador Dali spent time here and Spanish Catalan architect Antoni Gaudí designed several of the city’s buildings. Stepping into Gaudí’s Church of the Sacred Family is a bit like falling through the looking glass - a journey that you can continue with a visit to Park Güell. Sip sangria at a sidewalk café in Las Ramblas while watching flamboyant street performers, then create your own moveable feast by floating from tapas bar to tapas bar."
},
{name: "Vienna, Austria",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "In Vienna, the coffee house isn’t just a hangout: it’s an institution. Lingering over a newspaper with a pastry and a strong espresso drink is, according to UNESCO, officially a Viennese cultural pastime. Walk off your slice of Sachertorte with a self-guided tour of the city’s stunning traditional, Secessionist, and modern architecture, such as the Imperial Palace, the State Opera House, the Kirche am Steinhof, or the Kunsthistorisches Museum, an exercise in ornate geometry."
},
{name: "Lisbon, Portugal",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: true,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: true,
  november: false,
  december: false,
  about: "The museums of Lisbon celebrate the rich history and culture of this Portuguese capital city. The Maritime Museum is perfect for kids (and grown-ups!) who adore all things nautical, while the Casa-Museu Dr. Anastácio Gonçalves is a hidden gem of colorful artwork. To fully appreciate the city’s dramatic stone architecture you can take a guided walking tour, or customize your own tour, making sure to visit the Padrao dos Descobrimentos, the Mosteiro dos Jeronimos, and the UNESCO World Heritage site the Torre de Belem."
},
{name: "Eastern Puerto Rico",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "The 'about' section for Eastern Puerto Rico isn't available right now. Thank you for your patience while this problem is being rectified."
},
{name: "Daintree, Australia",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: true,
  january: false,
  february: true,
  march: true,
  april: true,
  may: true,
  june: true,
  july: false,
  august: false,
  september: true,
  october: true,
  november: false,
  december: false,
  about: "The 'about' section for Daintree, Australia isn't available right now. Thank you for your patience while this problem is being rectified."
},
{name: "Kyoto, Japan",
  desert: false,
  city: true,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: false,
  july: false,
  august: false,
  september: false,
  october: true,
  november: false,
  december: false,
  about: "The shrines and temples of Kyoto offer a rare link between modern life in the city and its very ancient past. The Shimogamo Shrine dates to the 6th century and seems suspended in time, its serenity and spiritual power still palpable. Visit Fushimi Inari Shrine, then see the life-sized Thousand Armed Kannon statues of Sanjūsangen-dō. Enjoy traditional geisha performances, then savor a tranquil meal at a restaurant overlooking the Kamo River."
},
{name: "Isla Mujeres, Mexico",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: true,
  december: true,
  about: "Isla Mujeres offers a wide variety of tempting options for beach lovers, and is a relative bargain. Snorkel with tropical fish amid coral reefs, skim the blue waters by kayak or boat, or windsurf along the shores of soft, sandy beaches. On land, you can sunbathe, dine on seafood, dance to Latin rhythms, tour on a moped or belly up to the bar for fresh, delicious drinks."
},
{name: "Reykjavik, Iceland",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Reykjavik bears the distinction of being the world’s northernmost capital, and for many Icelandic visitors it also serves as a gateway to the rugged adventure options beyond. Recharge after outdoor pursuits in one of the many geothermal springs or luxurious indoor spas. We appreciate Reykjavik’s open-minded and energetic culture that includes a hip and internationally recognized music and arts scene, great food and notoriously enthusiastic nightlife."
},
{name: "Vancouver, Canada",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Vancouver was founded as “Gastown” by an Englishman with a penchant for beer and storytelling. Today Gastown is a historic section of the Canadian metropolis, and the lively pubs still reflect the area’s former status as a sort of community drinking center. The city’s forests, grand parks, and impressive suspension bridge beckon travelers to explore them, as do the city’s shops and museums. Relive the glory of the 2010 Winter Games with visits to Olympic venues and the marvelous Olympic Cauldron."
},
{name: "Salvador, Brazil",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: false,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: true,
  november: true,
  december: true,
  about: "Brazil's former capital is renowned for its African-influenced cuisine, music and architecture. Known as 'the Capital of Joy,' because of its exuberant week-long Carnaval celebrations, Salvador brims with contemporary music and art amid architecture that has gone untouched since the 17th century."
},
{name: "Santiago, Chile",
  desert: false,
  city: true,
  arts: false,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  january: true,
  february: true,
  march: false,
  april: false,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "Santiago is one of those metropolitan joys where the more you look, the more you find. Funky cafes and dance clubs dot Bellavista, Forest Park art collections range from pre-Columbian to contemporary, and architecture runs the gamut from the 16th-century San Francisco Church to mirrored office towers. Shop with the locals at Mall Panora¡mico and give your palate meals to remember with hearty Chilean fare."
},
{name: "Monteverde, Costa Rica",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "The 'about' section for Monteverde, Costa Rica isn't available right now. Thank you for your patience while this problem is being rectified."
},
{name: "Dubrovnik, Croatia",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Dubrovnik has recovered from the war damage it suffered during the 1990s, and visitors have returned to this tranquil city. Nestled between the Adriatic and the Dinaric Alps, it’s an accessible and affordable city break for many European travelers. The pedestrian-only Old Town is especially charming."
},
{name: "Munich, Germany",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Munich exudes Bavarian charm. Beer fanatics should head immediately to the Hofbräuhaus, a hops heaven that’s been churning out the good stuff since 1589. The drinking is downright legendary during Oktoberfest, a celebration of local beers and German specialty foods. Emulate world-class athletes at the Olympiapark, where skating on the Olympic ice rink will make you feel like a champion. The promenade of Marienplatz is perfect for people watching and gawking at the Glockenspiele of City Hall."
},
{name: "Brussels, Belgium",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Unassuming Brussels is the capital of Belgium, Flanders and Europe. Medieval Grand-Place, is indeed grand, with many 17th-century buildings and daily flower markets. Reopened in 2006, the Atomium, Brussels' Eiffel Tower, provides great views, inside and out. Architecture fans should visit Musee Horta, home of Belgian master architect Victor Horta. St. Gery's clubs and bars are packed year-round. Seafood eateries abound in Ste. Catherine. Walk, rather than get snarled up in traffic, in the narrow streets."
},
{name: "Brisbane, Australia",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: true,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: true,
  november: true,
  december: false,
  about: "Australia’s third-largest city, Brisbane is the hub of Queensland culture, offering a peek at the past and a glimpse into the future. Visit the historic Windmill and Old Commissariat Store, built by convicts in 1828, or fast-forward to the present (and beyond) with a trip to the new Gallery of Modern Art. Mingle with locals atop Mount Coot-tha, cruise the Brisbane River to South Bank’s sandy beach on the City Cat and make sure to fill the cuteness quota at Lone Pine Koala Sanctuary, home to koalas and kangaroos. "
},
{name: "Colmar, France",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "The 'about' section for Colmar, France isn't available right now. Thank you for your patience while this problem is being rectified."
},
{name: "Edinburgh, Scotland",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Steeped in Celtic and medieval history, Edinburgh is a cultural tapestry that’s largely visually defined by hills, cathedrals, and the bold stone turrets of Edinburgh Castle. The city is also festival-happy - it's the site of several annual celebrations of art, music, theater, and comedy. Cheer on your favorite team at a football or rugby match, then relax over a pint in a local pub. A Scotch Whisky tour is a must, as is pinching your nose and digging bravely into a steaming plate of haggis."
},
{name: "Bergen, Norway",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "The colorful Norwegian city of Bergen is also a gateway to majestic fjords. Bryggen Hanseatic Wharf will give you a sense of the local culture – take some time to snap photos of the Hanseatic commercial buildings, which look like scenery from a movie set. Don’t breathe too deeply when you visit the outdoor fish market, a reminder of the city’s role in early fish trade. Ferry across a fjord to Lysøen, where the former villa of 19th-century composer Ole Bull will captivate you with fairytale charm."
},
{name: "Philipsburg, Sint Maarten",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: true,
  december: true,
  about: "Philipsburg is the capital of Dutch St. Maarten, a Caribbean island divided into Dutch and French (Saint Martin) sides. Bargain seekers flock to the duty-free and sales-tax-free stores of Philipsburg's mile-long commercial district. Visitors also enjoy the city's art galleries, historic forts, casinos and zoo, as well as Great Bay Beach and its boardwalk. Offshore, on the 12 Metre Challenge, guests can work as part of the crew on one of five boats used in the 1987 America's Cup competition."
},
{name: "The Azores Islands",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: true,
  april: true,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "The nine islands that make up the Azores are in fact the peaks of some of the world's tallest mountains, reaching from deep beneath the Atlantic. The once-uninhabited, volcanic archipelago now hosts thousands of tourists every year who flock to the islands for sun, sand and verdant mountain scenery. From the beaches of Praia da Vitoria to the bustling marina of Horta, to the bubbling volcanic ground "ovens" of Furnas, these islands offer unparalleled--and unusual--adventures to discover."
},
{name: "The Canary Islands",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: true,
  april: true,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Tribal Terenife still shows influence from the aboriginal Gaunches people. Visitors clamber to conquer Mount Teide (Spain’s tallest peak) and to stretch out on the sands of Los Gigantes. Squawk hello to the playful parrots of Loro Park, or brave the petrifying drive to beautiful Masca Valley. For a true taste of Terenife, sample fresh farmhouse cheese and local bananas. A piece of delicate calado canario lace makes a special souvenir."
},
{name: "Grand Canyon, U.S.A.",
  desert: true,
  city: false,
  arts: false,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: true,
  may: true,
  june: false,
  july: false,
  august: false,
  september: true,
  october: true,
  november: false,
  december: false,
  about: "The Grand Canyon is on almost every traveler's bucket list. Indeed, Theodore Roosevelt called it 'the one great sight which every American should see.' The Bright Angel and South Kaibab Trails offer stunning views, but if hiking's not your cup of tea, rent a bicycle or take a scenic drive through the park."
},
{name: "Maldives",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Want to make your co-workers insanely jealous? Just casually drop 'I’m vacationing in the Maldives this year' into conversation, preferably in the dead of winter. Or better yet, go there without mentioning it to anyone—then send them a 'Wish you were here!' postcard."
},
{name: "Queenstown, New Zealand",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "Staggering beauty and heart-pumping thrills await in the resort town of Queenstown, which is also known for its Hobbits—much of the Lord of the Rings trilogy was filmed in the area. Outdoor enthusiasts flock to Queenstown for the kayaking, bungee jumping, jetboating, white-water rafting, hiking and skiing. More mild-mannered adventurers can take a quiet cruise through nearby Milford Sound, part of the Fjordland National Park World Heritage area, or sample South Island pinot noir from one of the region's 75 wineries."
},
{name: "Phuket, Thailand",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: true,
  rainforest: true,
  mountains: true,
  january: true,
  february: true,
  march: false,
  april: false,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: true,
  december: true,
  about: "Thailand’s largest island is an international magnet for beach lovers and serious divers, who enthusiastically submerge themselves in the Andaman Sea. Blue lagoons and salmon sunsets make for a dream-like atmosphere, and indeed, a vacation here can feel a bit surreal. Watersports are the most popular activities, though once you’ve had enough sun there’s still plenty to explore at the island’s aquariums, gardens, and Buddhist temples."
},
{name: "Cusco, Peru",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: true,
  may: true,
  june: false,
  july: false,
  august: false,
  september: true,
  october: true,
  november: false,
  december: false,
  about: "Incan majesty and Andean baroque exist side-by-side in Cusco's stone streets, epitomized by the Qoriacancha palace and the church of Santo Domingo flanking the Plaza de Armas. In this high-altitude melting pot of Amerindian and mestizo culture, you'll find extraordinary textiles, lively summer festivals and archeological wonders."
},
{name: "Valencia, Spain",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "You’ll find plenty of orange trees here, but the fruit known as the 'Valencia orange' was actually developed in California. Travelers interested in local food should focus on paella instead. While the city contains many monuments, Valencia’s modern crown jewel is the City of Arts and Sciences, a futuristic complex of museums, cinemas, theaters, and more."
},
{name: "Prague, Czech Republic",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "The bohemian allure and fairytale features of Prague make it a perfect destination for beach-weary vacationers who want to immerse themselves in culture. You could devote an entire day to exploring Prazsky hrad (Prague Castle), then refueling over a hearty dinner at a classic Czech tavern. Spend some time wandering the Old Town Square before heading over to gape at The Old Town Hall and Astronomical Clock. Prague’s best bars are found in cellars, where historic pubs set the scene for a night of traditional tippling."
},
{name: "Hanoi, Vietnam",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: true,
  november: true,
  december: false,
  about: "The charming Vietnamese capital has aged well, preserving the Old Quarter, monuments and colonial architecture, while making room for modern developments alongside. Hanoi may have shrugged off several former names, including Thang Long, or 'ascending dragon,' but it hasn't forgotten its past, as sites such as Ho Chi Minh's Mausoleum and Hoa Lo Prison attest. Lakes, parks, shady boulevards and more than 600 temples and pagodas add to the appeal of this city, which is easily explored by taxi."
},
{name: "Zermatt, Switzerland",
  desert: false,
  city: false,
  arts: false,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "When most people think of Zermatt, they think of one thing: The Matterhorn. This ultimate Swiss icon looms over Zermatt, first drawing visitors here in the 1860s. The village of Zermatt itself is lovely and car-free, with old-fashioned brown chalets and winding alleys. (Don’t worry, you don’t have to walk everywhere—there are electric vehicles and horse-drawn cabs.) Skiing in the region often lasts through early summer, but when the weather’s warmer, it’s a great time to hike."
},
{name: "Marseille, France",
  desert: false,
  city: false,
  arts: false,
  sea: true,
  beach: true,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Travelers visit the port city of Marseille, the third largest city in France, for the meeting of style and history. The bay, flanked by Fort Saint-Nicolas, and Fort Saint-Jean shelters the Castle of If, from Count of Monte Cristo fame. Watched over by the basilica Notre-Dame-de-la-Garde, the city's pedestrian zones and shopping areas (including the colorful French-African quarter) mix with historical sites.Travelers looking for a fun time go to the OK Corral, a cowboy theme amusement park."
},
{name: "Cinque Terre, Italy",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: true,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "You'll find rugged beauty and a slow pace in the Cinque Terre. Named for the five towns of Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore, this portion of the Italian Riviera is a UNESCO World Heritage Site. Cars aren't allowed, so take local trains or ferries to go from town to town—or walk one of the spectacular trails that connect them."
},
{name: "Budapest, Hungary",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "Over 15 million gallons of water bubble daily into Budapest's 118 springs and boreholes. The city of spas offers an astounding array of baths, from the sparkling Gellert Baths to the vast 1913 neo-baroque Szechenyi Spa to Rudas Spa, a dramatic 16th-century Turkish pool with original Ottoman architecture. The "Queen of the Danube" is also steeped in history, culture and natural beauty. Get your camera ready for the Roman ruins of the Aquincum Museum, Heroes' Square and Statue Park, and the 300-foot dome of St. Stephen's Basilica."
},
{name: "Copenhagen, Denmark",
  desert: false,
  city: false,
  arts: true,
  sea: true,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: true,
  july: true,
  august: true,
  september: false,
  october: false,
  november: false,
  december: false,
  about: "Copenhagen was once a Viking fishing settlement, and you can still find traces of the Norse explorers here. Visit reconstructed villages, the remains of a 1,000-year-old castle, and museums dedicated to the notorious raiders. Copenhagen also features a blend of modern architecture and historical artifacts such as the Round Tower observatory – a wonderful example of 17th-century architecture. Art galleries, narrow streets, canals, parks, and Baroque churches round out the city’s cultural attractions."
},
{name: "Goreme, Turkey",
  desert: true,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: true,
  august: true,
  september: true,
  october: false,
  november: false,
  december: false,
  about: "A town literally carved into the volcanic rock, Goreme is the gateway to the Goreme National Park, a vast UNESCO World Heritage Site that houses spectacular 10th- and 11th-century cave churches. The park itself is known for its chimney rock formations and is very popular with backpackers. It’s also a great area to sample Turkish cuisine and wine."
},
{name: "Siem Reap, Cambodia",
  desert: false,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: true,
  mountains: false,
  january: true,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "When the morning light washes over the overgrown temples and ruins of Angkor Wat, a simple Siem Reap sunrise becomes a profound event. The ancient structures are contained within one of the largest religious complexes in the world. The complex and the 12th century Angkor Thom royal city are considered the main reasons to visit Siem Reap. Get a lesson in national history at the Cambodian Cultural Village, and a lesson in bargaining at the Angkor Night Market, a bonanza of shopping stalls, food vendors, and bars."
},
{name: "Marrakech, Morocco",
  desert: true,
  city: false,
  arts: true,
  sea: false,
  beach: false,
  rainforest: false,
  mountains: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: true,
  june: true,
  july: false,
  august: false,
  september: true,
  october: true,
  november: false,
  december: false,
  about: "The 'Red City' of Marrakesh is a magical place, brimming with markets, gardens, palaces, and mosques. Exploring the intimate courtyards and snaking alleyways of the historic Medina can easily eat up a day. Find inner peace at the serene Jardin Majorelle or take in the beauty of one of the city’s historic mosques (taking note that, unless you are Muslim, you are not allowed to enter)."
},
{name: "Cape Town, South Africa",
  desert: false,
  city: true,
  arts: true,
  sea: false,
  beach: true,
  rainforest: false,
  mountains: true,
  january: true,
  february: true,
  march: true,
  april: true,
  may: false,
  june: false,
  july: false,
  august: false,
  september: false,
  october: false,
  november: false,
  december: true,
  about: "Cape Town glistens at the southern toe of the African continent. Tourist brochure-views at Blaauwberg Beach and Kirstenbosch National Botanical Gardens are within easy driving distance of 'The Mother City' The Cape of Good Hope Nature Reserve provides sweeping sea vistas, hiking trails and wildlife encounters. On a more somber note, travelers can visit Robben Island, the prison where Nelson Mandela was held for 27 years."
}];
