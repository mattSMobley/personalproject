var destinations = [
{name: "York, England",
  types: ['culture'],
  months: ['july', 'august'],
  about: "Nowhere in northern England says 'medieval' quite like York, a city of extraordinary cultural and historical wealth that has lost little of its pre-industrial lustre. A magnificent circuit of 13th-century walls enclose a medieval spider's web of narrow streets. At its heart lies the immense, awe-inspiring York Minster, one of the most beautiful Gothic cathedrals in the world. York's long history and rich heritage is woven into virtually every brick and beam, and the modern, tourist-oriented city – with its myriad museums, restaurants, cafes and traditional pubs – is a carefully maintained heir to that heritage. Try to avoid the inevitable confusion by remembering that around these parts, gate means street and bar means gate."
},
{name: "Kotor, Montenegro",
  types: ['sea','beach','mountains'],
  months: ['may','june','july','august','september'],
  about: "Wedged between brooding mountains and a moody corner of the bay, this dramatically beautiful town is perfectly at one with its setting. Its sturdy walls – started in the 9th century and tweaked until the 18th – arch steeply up the slopes behind it. From a distance they’re barely discernible from the mountain’s grey hide, but at night they’re spectacularly lit, reflecting in the water to give the town a golden halo. Within those walls lie labyrinthine marbled lanes where churches, shops, bars and restaurants surprise you on hidden piazzas."
},
{name: "Abu Dhabi, U.A.E.",
  types: ['desert','city','beach'],
  months: ['january','february','march','december'],
  about: "The world's largest hand-loomed carpet, the fastest roller coaster, the highest high tea, the tower with the greatest lean, the largest cluster of cultural buildings of the 21st century – UAE capital Abu Dhabi isn't afraid to challenge world records. Welcome to an exciting city where nothing stands still…except perhaps the herons in its mangroves. For those looking to engage with Gulf culture, Abu Dhabi offers opportunities to understand the UAE's history through museums, exhibitions and tours. But thankfully Emirati heritage isn't boxed and mothballed; it's also experienced through strolls around the dhow harbour, haggling in markets and absorbing the atmosphere at sheesha cafes.."
},
{name: "Plymouth, England",
  types: ['sea'],
  months: ['june','july','august','september'],
  about: "For decades, some have dismissed Plymouth as sprawling and ugly, pointing to architectural eyesores and sometimes palpable poverty. But the arrival of high-profile chefs Hugh Fearnley-Whittingstall and Mitch Tonks, and ongoing waterfront regeneration begs a rethink. Yes the city, an important Royal Naval port, suffered WWII bomb damage; and today it is still sometimes more gritty than pretty, but Plymouth is also packed with possibilities: swim in an art-deco lido; tour a gin distillery; learn to kayak; roam an aquarium; take a boat trip across the bay; then see a top-class theatre show and party till dawn. And the ace in the pack? Plymouth Hoe – a cafe-dotted, wide grassy headland offering captivating views of a boat-studded bay."
},
{name: "Amsterdam, The Netherlands",
  types: ['culture','sea'],
  months: ['may','june','july','august'],
  about: "Seventeenth-century buildings. Joint-smoking alien sculptures. Few cities meld history with modern urban flair like Amsterdam. This picturesque city is full of colorful homes, canals and bridges. Rent a bike, take a canal tour, or just sit with the locals on one of the many excellent restaurant terraces. Amsterdam has something for everyone, and should definitely be on your bucket list."
},
{name: "Barcelona, Spain",
  types: ['city','culture','beach'],
  months: ['april','may','june','july','august','september'],
  about: "Barcelona is an enchanting seaside city with boundless culture, fabled architecture, and a world-class drinking and dining scene. With all it's parks, museums, cafes, beaches, and shops, you'll need several days to truly experience Barcelona. This tourist-oriented city has become one of the most popular tourist destinations in Europe thanks to it's numerous attractions, rich culture, and excellent nightlife scene."
},
{name: "Vienna, Austria",
  types: ['city','culture'],
  months: ['june','july','august'],
  about: "Vienna is packed with imperial history; at the same time it has exciting contemporary museums, lively eating and nightlife scenes, and many quiet corners to explore. It's hard to imagine a more livable city than Vienna. This is a metropolis where regulars sit in cosy coffee houses and offer credible solutions to world chaos over the noble bean; where Beisln (bistro pubs) serve delicious brews, wines and traditional food; where talented chefs are taking the capital in new culinary directions; and where an efficient transport system will ferry you across town from a restaurant to a post-dinner drink in no time at all. It's safe, it has lots of bicycle tracks and it even has its own droll sense of humour."
},
{name: "Lisbon, Portugal",
  types: ['sea','beach'],
  months: ['april','may','june','july','august','september','october'],
  about: "Spread across steep hillsides that overlook the Rio Tejo, Lisbon has captivated visitors for centuries. Windswept vistas reveal the city in all its beauty: Roman and Moorish ruins, white-domed cathedrals, grand plazas lined with sun-drenched cafes. Just outside Lisbon, there’s more – enchanting woodlands, gorgeous beaches and seaside villages – all ripe for discovery.."
},
{name: "Puerto Rico",
  types: ['culture','beach','rainforest'],
  months: ['january','february','march','april','december'],
  about: "With endless sand, swashbuckling history and wildly diverse tropical terrain, locals fittingly call this sun-washed medley of Spanish and American influences the 'Island of Enchantment. The eastern part of Puerto Rico contains lush rainforests, as well as some of the best beaches in Puerto Rico. Head to the island of Culembra for beauty and seclusion, or travel to Vieques to view a once in a lifetime sight: a bioluminescent bay."
},
{name: "Daintree, Australia",
  types: ['beach','rainforest','mountains'],
  months: ['february','march','april','may','june','september','october'],
  about: "The Daintree represents many things: World Heritage rainforest, a river, a reef, a village and the home of its traditional custodians, the Kuku Yalanji people. It encompasses the coastal lowland area between the Daintree and Bloomfield Rivers, where the rainforest meets the coast. It’s a fragile, ancient ecosystem, once threatened by logging but now protected as a national park."
},
{name: "Kyoto, Japan",
  types: ['city','culture','sea'],
  months: ['april','may','october'],
  about: "Kyoto is old Japan writ large: quiet temples, sublime gardens, colourful shrines and geisha scurrying to secret liaisons. While the rest of Japan has adopted modernity with abandon, the old ways are hanging on in Kyoto. Take a morning stroll through the textile district of Nishijin and watch the old Kyoto ladies emerge from their machiya (traditional townhouses) to ladle water onto their stoops. Visit an old shōtengai (shopping street) and admire the ancient speciality shops: tofu sellers, fishmongers, pickle vendors and tea merchants. Then join the locals at a local sentō (public bath) to soak away the cares of the day."
},
{name: "Isla Mujeres, Mexico",
  types: ['beach'],
  months: ['january','february','march','april','november','december'],
  about: "Sure, there are quite a few ticky-tacky tourist shops, but folks still get around by golf cart and the crushed-coral beaches are even better than those of Cozumel and Holbox. As for the calm turquoise water of Isla Mujeres, well, you really just have to see it for yourself. There’s just enough here to keep you entertained: snorkel or scuba dive, visit a turtle farm or put on your sunglasses and settle in with that book you've been dying to finish. Come sunset, there are plenty of dining options, and the nightlife scene moves at a relaxed island pace."
},
{name: "Reykjavik, Iceland",
  types: ['sea','culture'],
  months: ['june','july','august'],
  about: "Reykjavik bears the distinction of being the world’s northernmost capital, and for many Icelandic visitors it also serves as a gateway to the rugged adventure options beyond. Recharge after outdoor pursuits in one of the many geothermal springs or luxurious indoor spas. We appreciate Reykjavik’s open-minded and energetic culture that includes a hip and internationally recognized music and culture scene, great food and notoriously enthusiastic nightlife."
},
{name: "Vancouver, Canada",
  types: ['sea','mountains'],
  months: ['june','july','august'],
  about: "Vancouver was founded as “Gastown” by an Englishman with a penchant for beer and storytelling. Today Gastown is a historic section of the Canadian metropolis, and the lively pubs still reflect the area’s former status as a sort of community drinking center. The city’s forests, grand parks, and impressive suspension bridge beckon travelers to explore them, as do the city’s shops and museums. Relive the glory of the 2010 Winter Games with visits to Olympic venues and the marvelous Olympic Cauldron."
},
{name: "Salvador, Brazil",
  types: ['city','culture','beach'],
  months: ['january','february','march','october','november','december'],
  about: "Brazil's former capital is renowned for its African-influenced cuisine, music and architecture. Known as 'the Capital of Joy,' because of its exuberant week-long Carnaval celebrations, Salvador brims with contemporary music and art amid architecture that has gone untouched since the 17th century."
},
{name: "Santiago, Chile",
  types: ['city','mountains'],
  months: ['january','february','november','december'],
  about: "Santiago is one of those metropolitan joys where the more you look, the more you find. Funky cafes and dance clubs dot Bellavista, Forest Park art collections range from pre-Columbian to contemporary, and architecture runs the gamut from the 16th-century San Francisco Church to mirrored office towers. Shop with the locals at Mall Panora¡mico and give your palate meals to remember with hearty Chilean fare."
},
{name: "Monteverde, Costa Rica",
  types: ['beach','rainforest'],
  months: ['january','february','march','april','december'],
  about: "Monteverde is a town in mountainous northwestern Costa Rica. It’s renowned for its biodiverse cloud forests, and for outdoor pursuits from hiking to zip-lining. Famous Monteverde Cloud Forest Reserve shelters countless wildlife species, including jaguars, ocelots and the colorfully plumed quetzal. The reserve’s well-marked trails cut through ferns and orchids, and way overhead, hanging bridges allow walks amid the forest canopy."
},
{name: "Dubrovnik, Croatia",
  types: ['sea','beach'],
  months: ['june','july','august','september'],
  about: "Dubrovnik has recovered from the war damage it suffered during the 1990s, and visitors have returned to this tranquil city. Nestled between the Adriatic and the Dinaric Alps, it’s an accessible and affordable city break for many European travelers. The pedestrian-only Old Town is especially charming."
},
{name: "Munich, Germany",
  types: ['city','culture'],
  months: ['june','july','august'],
  about: "Munich exudes Bavarian charm. Beer fanatics should head immediately to the Hofbräuhaus, a hops heaven that’s been churning out the good stuff since 1589. The drinking is downright legendary during Oktoberfest, a celebration of local beers and German specialty foods. Emulate world-class athletes at the Olympiapark, where skating on the Olympic ice rink will make you feel like a champion. The promenade of Marienplatz is perfect for people watching and gawking at the Glockenspiele of City Hall."
},
{name: "Brussels, Belgium",
  types: ['city','culture'],
  months: ['june','july','august','september'],
  about: "Unassuming Brussels is the capital of Belgium, Flanders and Europe. Medieval Grand-Place, is indeed grand, with many 17th-century buildings and daily flower markets. Reopened in 2006, the Atomium, Brussels' Eiffel Tower, provides great views, inside and out. Architecture fans should visit Musee Horta, home of Belgian master architect Victor Horta. St. Gery's clubs and bars are packed year-round. Seafood eateries abound in Ste. Catherine. Walk, rather than get snarled up in traffic, in the narrow streets."
},
{name: "Brisbane, Australia",
  types: ['city','culture','beach'],
  months: ['april','may','june','july','august','september','october','november'],
  about: "Australia’s third-largest city, Brisbane is the hub of Queensland culture, offering a peek at the past and a glimpse into the future. Visit the historic Windmill and Old Commissariat Store, built by convicts in 1828, or fast-forward to the present (and beyond) with a trip to the new Gallery of Modern Art. Mingle with locals atop Mount Coot-tha, cruise the Brisbane River to South Bank’s sandy beach on the City Cat and make sure to fill the cuteness quota at Lone Pine Koala Sanctuary, home to koalas and kangaroos. "
},
{name: "Colmar, France",
  types: ['culture'],
  months: ['may','june','july','august','september'],
  about: "Colmar is technically in France, but feels very German. The Alsace region of France, where Colmar is located, is famous for its cuisine and white wines. Beautiful, iconic wood-framed buildings line flowery canals in this relaxing region, where ambiance is everything."
},
{name: "Edinburgh, Scotland",
  types: ['culture'],
  months: ['july','august'],
  about: "Steeped in Celtic and medieval history, Edinburgh is a cultural tapestry that’s largely visually defined by hills, cathedrals, and the bold stone turrets of Edinburgh Castle. The city is also festival-happy - it's the site of several annual celebrations of art, music, theater, and comedy. Cheer on your favorite team at a football or rugby match, then relax over a pint in a local pub. A Scotch Whisky tour is a must, as is pinching your nose and digging bravely into a steaming plate of haggis."
},
{name: "Bergen, Norway",
  types: ['sea','mountains'],
  months: ['july','august'],
  about: "Surrounded by seven hills and seven fjords, Bergen is an utterly beguiling city. The beautiful Unesco World Heritage–listed Bryggen is its centrepiece, and nature, be that mountains, fjords or sea, is never far away. But you'll also discover a dynamic cultural life, one a city 10 times its size would be proud of. Dive into its booming local food and coffee scene, fascinating art collections and excellent music venues."
},
{name: "St. Maarten",
  types: ['beach'],
  months: ['january','february','march','april','november','december'],
  about: "Philipsburg is the capital of Dutch St. Maarten, a Caribbean island divided into Dutch and French (Saint Martin) sides. Bargain seekers flock to the duty-free and sales-tax-free stores of Philipsburg's mile-long commercial district. Visitors also enjoy the city's art galleries, historic forts, casinos and zoo, as well as Great Bay Beach and its boardwalk. Offshore, on the 12 Metre Challenge, guests can work as part of the crew on one of five boats used in the 1987 America's Cup competition."
},
{name: "The Azores Islands",
  types: ['sea','beach','mountains'],
  months: ['march','april','may','june','july','august','september'],
  about: "The nine islands that make up the Azores are in fact the peaks of some of the world's tallest mountains, reaching from deep beneath the Atlantic. The once-uninhabited, volcanic archipelago now hosts thousands of tourists every year who flock to the islands for sun, sand and verdant mountain scenery. From the beaches of Praia da Vitoria to the bustling marina of Horta, to the bubbling volcanic ground ovens of Furnas, these islands offer unparalleled--and unusual--adventures to discover."
},
{name: "The Canary Islands",
  types: ['culture','sea','beach','mountains'],
  months: ['march','april','may','june','july','august','september'],
  about: "Tribal Terenife still shows influence from the aboriginal Gaunches people. Visitors clamber to conquer Mount Teide (Spain’s tallest peak) and to stretch out on the sands of Los Gigantes. Squawk hello to the playful parrots of Loro Park, or brave the petrifying drive to beautiful Masca Valley. For a true taste of Terenife, sample fresh farmhouse cheese and local bananas. A piece of delicate calado canario lace makes a special souvenir."
},
{name: "Grand Canyon, U.S.A.",
  types: ['desert','mountains'],
  months: ['april','may','september','october'],
  about: "The Grand Canyon is on almost every traveler's bucket list. Indeed, Theodore Roosevelt called it 'the one great sight which every American should see.' The Bright Angel and South Kaibab Trails offer stunning views, but if hiking's not your cup of tea, rent a bicycle or take a scenic drive through the park."
},
{name: "Maldives",
  types: ['beach'],
  months: ['january','february','march','april'],
  about: "Want to make your co-workers insanely jealous? Just casually drop 'I’m vacationing in the Maldives this year' into conversation, preferably in the dead of winter. Or better yet, go there without mentioning it to anyone—then send them a 'Wish you were here!' postcard."
},
{name: "Queenstown, New Zealand",
  types: ['sea','mountains'],
  months: ['january','february','march','april','december'],
  about: "Staggering beauty and heart-pumping thrills await in the resort town of Queenstown, which is also known for its Hobbits—much of the Lord of the Rings trilogy was filmed in the area. Outdoor enthusiasts flock to Queenstown for the kayaking, bungee jumping, jetboating, white-water rafting, hiking and skiing. More mild-mannered adventurers can take a quiet cruise through nearby Milford Sound, part of the Fjordland National Park World Heritage area, or sample South Island pinot noir from one of the region's 75 wineries."
},
{name: "Phuket, Thailand",
  types: ['beach','rainforest'],
  months: ['january','february','november','december'],
  about: "Thailand’s largest island is an international magnet for beach lovers and serious divers, who enthusiastically submerge themselves in the Andaman Sea. Blue lagoons and salmon sunsets make for a dream-like atmosphere, and indeed, a vacation here can feel a bit surreal. Watersports are the most popular activities, though once you’ve had enough sun there’s still plenty to explore at the island’s aquariums, gardens, and Buddhist temples."
},
{name: "Cusco, Peru",
  types: ['culture','mountains'],
  months: ['april','may','september','october'],
  about: "Incan majesty and Andean baroque exist side-by-side in Cusco's stone streets, epitomized by the Qoriacancha palace and the church of Santo Domingo flanking the Plaza de Armas. In this high-altitude melting pot of Amerindian and mestizo culture, you'll find extraordinary textiles, lively summer festivals and archeological wonders. Travelers frequently stay here on a trip to Machu Picchu"
},
{name: "Valencia, Spain",
  types: ['culture','beach'],
  months: ['june','july','august','september'],
  about: "Valencia usually plays second-fiddle to Barcelona in eastern Spain, but travelers quickly find out just how much Valencia has to offer. It is the birthplace of paella, has beautiful beaches and Roman architecture, and is very easy on your wallet. While the city contains many monuments, Valencia’s modern crown jewel is the City of Arts and Sciences, a futuristic complex of museums, cinemas, theaters, and more."
},
{name: "Prague, Czech Republic",
  types: ['city','culture'],
  months: ['may','june','july','august'],
  about: "The bohemian allure and fairytale features of Prague make it a perfect destination for beach-weary vacationers who want to immerse themselves in culture. You could devote an entire day to exploring Prazsky hrad (Prague Castle), then refueling over a hearty dinner at a classic Czech tavern. Spend some time wandering the Old Town Square before heading over to gape at The Old Town Hall and Astronomical Clock. Prague’s best bars are found in cellars, where historic pubs set the scene for a night of traditional tippling."
},
{name: "Hanoi, Vietnam",
  types: ['city','culture'],
  months: ['march','april','october','november'],
  about: "The charming Vietnamese capital has aged well, preserving the Old Quarter, monuments and colonial architecture, while making room for modern developments alongside. Hanoi may have shrugged off several former names, including Thang Long, or 'ascending dragon,' but it hasn't forgotten its past, as sites such as Ho Chi Minh's Mausoleum and Hoa Lo Prison attest. Lakes, parks, shady boulevards and more than 600 temples and pagodas add to the appeal of this city, which is easily explored by taxi."
},
{name: "Zermatt, Switzerland",
  types: ['mountains'],
  months: ['june','july','august'],
  about: "When most people think of Zermatt, they think of one thing: The Matterhorn. This ultimate Swiss icon looms over Zermatt, first drawing visitors here in the 1860s. The village of Zermatt itself is lovely and car-free, with old-fashioned brown chalets and winding alleys. (Don’t worry, you don’t have to walk everywhere—there are electric vehicles and horse-drawn cabs.) Skiing in the region often lasts through early summer, but when the weather’s warmer, it’s a great time to hike."
},
{name: "Marseille, France",
  types: ['sea','beach'],
  months: ['may','june','july','august','september'],
  about: "Travelers visit the port city of Marseille, the second largest city in France, for the meeting of style and history. The bay, flanked by Fort Saint-Nicolas, and Fort Saint-Jean shelters the Castle of If, from Count of Monte Cristo fame. Watched over by the basilica Notre-Dame-de-la-Garde, the city's pedestrian zones and shopping areas (including the colorful French-African quarter) mix with historical sites. Something you won't want to miss on your trip to Marseille, are the calanques - beautiful turquoise water in small craggy inlets."
},
{name: "Cinque Terre, Italy",
  types: ['culture','sea'],
  months: ['may','june','july','august','september'],
  about: "You'll find rugged beauty and a slow pace in the Cinque Terre. Named for the five towns of Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore, this portion of the Italian Riviera is a UNESCO World Heritage Site. Cars aren't allowed, so take local trains or ferries to go from town to town—or walk one of the spectacular trails that connect them."
},
{name: "Budapest, Hungary",
  types: ['city','culture'],
  months: ['june','july','august','september'],
  about: "Over 15 million gallons of water bubble daily into Budapest's 118 springs and boreholes. The city of spas offers an astounding array of baths, from the sparkling Gellert Baths to the vast 1913 neo-baroque Szechenyi Spa to Rudas Spa, a dramatic 16th-century Turkish pool with original Ottoman architecture. The 'Queen of the Danube' is also steeped in history, culture and natural beauty. Get your camera ready for the Roman ruins of the Aquincum Museum, Heroes' Square and Statue Park, and the 300-foot dome of St. Stephen's Basilica."
},
{name: "Copenhagen, Denmark",
  types: ['culture','sea'],
  months: ['june','july','august'],
  about: "Copenhagen was once a Viking fishing settlement, and you can still find traces of the Norse explorers here. Visit reconstructed villages, the remains of a 1,000-year-old castle, and museums dedicated to the notorious raiders. Copenhagen also features a blend of modern architecture and historical artifacts such as the Round Tower observatory – a wonderful example of 17th-century architecture. Art galleries, narrow streets, canals, parks, and Baroque churches round out the city’s cultural attractions."
},
{name: "Goreme, Turkey",
  types: ['desert','culture'],
  months: ['july','august','september'],
  about: "A town literally carved into the volcanic rock, Goreme is the gateway to the Goreme National Park, a vast UNESCO World Heritage Site that houses spectacular 10th- and 11th-century cave churches. The park itself is known for its chimney rock formations and is very popular with backpackers. It’s also a great area to sample Turkish cuisine and wine."
},
{name: "Siem Reap, Cambodia",
  types: ['culture','rainforest'],
  months: ['january','december'],
  about: "When the morning light washes over the overgrown temples and ruins of Angkor Wat, a simple Siem Reap sunrise becomes a profound event. The ancient structures are contained within one of the largest religious complexes in the world. The complex and the 12th century Angkor Thom royal city are considered the main reasons to visit Siem Reap. Get a lesson in national history at the Cambodian Cultural Village, and a lesson in bargaining at the Angkor Night Market, a bonanza of shopping stalls, food vendors, and bars."
},
{name: "Marrakesh, Morocco",
  types: ['desert','culture'],
  months: ['may','june','september','october'],
  about: "The 'Red City' of Marrakesh is a magical place, brimming with markets, gardens, palaces, and mosques. Exploring the intimate courtyards and snaking alleyways of the historic Medina can easily eat up a day. Find inner peace at the serene Jardin Majorelle or take in the beauty of one of the city’s historic mosques (taking note that, unless you are Muslim, you are not allowed to enter)."
},
{name: "Cape Town, South Africa",
  types: ['city','sea','beach','culture','mountains'],
  months: ['february','march','april','may','june','july','august','september','october'],
  about: "Cape Town glistens at the southern toe of the African continent. Tourist brochure-views at Blaauwberg Beach and Kirstenbosch National Botanical Gardens are within easy driving distance of 'The Mother City' The Cape of Good Hope Nature Reserve provides sweeping sea vistas, hiking trails and wildlife encounters. On a more somber note, travelers can visit Robben Island, the prison where Nelson Mandela was held for 27 years."
},
{name: "Istanbul, Turkey",
  types: ['city','sea'],
  months: ['february','march','april','may','june','july','august','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Valparaiso, Chile",
  types: ['city','culture','beach','mountains'],
  months: ['mountains','city','culture'],
  about: "New destination. The info section is under construction."
},
{name: "Fernando de Noronha",
  types: ['beach'],
  months: ['january','august','september','october','november','december'],
  about: "New destination. The info section is under construction."
},
{name: "Buenos Aires, Argentina",
  types: ['beach','city'],
  months: ['april','may','june','september','october','november'],
  about: "New destination. The info section is under construction."
},
{name: "Ubud, Indonesia",
  types: ['beach','rainforest','culture'],
  months: ['april','may','june','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Victoria Falls",
  types: ['rainforest'],
  months: ['march','april','may','june','july','august'],
  about: "New destination. The info section is under construction."
},
{name: "Lord Howe Island",
  types: ['beach'],
  months: ['september','october','november','december','january','february','march','april','may'],
  about: "New destination. The info section is under construction."
},
{name: "Hobart, Tasmania",
  types: ['sea','culture'],
  months: ['december','january','february','march'],
  about: "New destination. The info section is under construction."
},
{name: "Galle, Sri Lanka",
  types: ['sea','culture'],
  months: ['january','february','march','july','august','september'],
  about: "New destination. The info section is under construction."
},
{name: "Galapagos Islands",
  types: ['beach'],
  months: ['december','january','february','march','april','may','june'],
  about: "New destination. The info section is under construction."
},
{name: "Andaman Islands",
  types: ['beach'],
  months: ['november','december','january','february','march','april'],
  about: "New destination. The info section is under construction."
},
{name: "Denver, Colorado",
  types: ['city','mountains'],
  months: ['march','april','may','june','july','august','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Baja California",
  types: ['mountains','desert','beach'],
  months: ['january','february','march','april','may','october','november','december'],
  about: "New destination. The info section is under construction."
},
{name: "Zanzibar, Tanzania",
  types: ['beach'],
  months: ['january','february','june','july','august','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Ljubljana, Slovenia",
  types: ['architecture','mountains'],
  months: ['april','may','august','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Bocas del Toro, Panama",
  types: ['beach','rainforest'],
  months: ['february','march','april','may','september','october','november'],
  about: "New destination. The info section is under construction."
},
{name: "Uyuni, Bolivia",
  types: ['desert'],
  months: ['february','march','august','september'],
  about: "New destination. The info section is under construction."
},
{name: "Namib Desert",
  types: ['desert'],
  months: ['may','june','july','august','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Perth, Australia",
  types: ['desert','beach'],
  months: ['january','february','march','april','october','november','december'],
  about: "New destination. The info section is under construction."
},
{name: "Moab, Utah",
  types: ['desert'],
  months: ['may','june','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Manaus, Brazil",
  types: ['rainforest','culture'],
  months: ['may','june','july','august'],
  about: "New destination. The info section is under construction."
},
{name: "Kuching, Malaysia",
  types: ['rainforest','culture','sea','beach'],
  months: ['may','june','september','october'],
  about: "New destination. The info section is under construction."
},
{name: "Las Vegas, Nevada",
  types: ['desert','culture','city'],
  months: ['january','february','march','april','november','december'],
  about: "New destination. The info section is under construction."
},
{name: "Sharm El Sheikh, Egypt",
  types: ['desert','beach'],
  months: ['november','december','january','february','march','april'],
  about: "New destination. The info section is under construction."
}];
