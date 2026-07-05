// House manual content, bilingual (fi/en).
// Each section: id, icon key (see icons.js), color accent, optional hero `image`
// (path under images/, shown at the top of the detail view), title, teaser
// (card subtitle), and body blocks. Block types:
//   { type: 'p', text }               plain paragraph
//   { type: 'callout', text }         highlighted important instruction
//   { type: 'heading', text }         sub-heading inside a section
//   { type: 'steps', items: [...] }   ordered step list (each item: { text, note? })
//   { type: 'note', text }            secondary/soft note (e.g. tips, not critical)

const HOUSE = {
  fi: {
    name: 'Rauhanvillantie 4',
    tagline: 'Ohjekirja',
    welcomeTitle: 'Tervetuloa huvilalle!',
    welcomeText:
      'Tämä ohjekirja sisältää käyttöohjeet talon laitteille ja tiloille. Tärkeimmät ' +
      'muistettavat asiat on korostettu kussakin osiossa.',
    searchPlaceholder: 'Etsi ohjeista…',
    backLabel: 'Takaisin',
    importantLabel: 'Tärkeää',
    noResults: 'Ei hakutuloksia.',
    bannerAlt: 'Rauhanvillantie 4 kesäisenä päivänä',
  },
  en: {
    name: 'Rauhanvillantie 4',
    tagline: 'House Manual',
    welcomeTitle: 'Welcome to the villa!',
    welcomeText:
      'This manual contains usage instructions for the house’s devices and spaces. ' +
      'The most important things to remember are highlighted in each section.',
    searchPlaceholder: 'Search the manual…',
    backLabel: 'Back',
    importantLabel: 'Important',
    noResults: 'No results found.',
    bannerAlt: 'Rauhanvillantie 4 on a summer day',
  },
};

const SECTIONS = [
  {
    id: 'hot-tub',
    icon: 'hotTub',
    accent: 'coral',
    image: 'images/hot-tub.jpg',
    title: { fi: 'Palju', en: 'Hot Tub' },
    teaser: {
      fi: 'Lämmitys, suodatus ja huolto',
      en: 'Heating, filtration and care',
    },
    body: {
      fi: [
        { type: 'p', text: 'Paljun saa lämmitettyä polttopuilla, joita löytyy saunan vierestä kääntöpaikalta. Normaali käyttölämpötila on noin 36–37 °C. Kesäkuumalla vesi on mukavampaa haaleampana.' },
        { type: 'p', text: 'Paljussa on patruunasuodatin, joka suodattaa vettä. Paljuvettä desinfioidaan lisäksi kemiallisesti (esimerkiksi aktiivihapella tai kloorilla), jotta vesi pysyy käyttökunnossa vaihtamatta esimerkiksi koko viikonlopun. Pidemmässä käytössä paljua tulisi myös puhdistaa roskasta sekä monitoroida vedenlaatua. Kysy tarvittaessa.' },
        { type: 'callout', text: 'Turvallisen käytön varmistamiseksi pidä desinfiointitabletit paljussa ja anna suodattimen käydä koko ajan.' },
        { type: 'p', text: 'Paljun pesu, täyttö ja huolto sisältyvät paljumaksuun.' },
        { type: 'callout', text: 'Uloskirjautuessa / kylpemisen lopettaessa, voit vain nostaa kannen paikalleen.' },
      ],
      en: [
        { type: 'p', text: 'The hot tub can be heated with firewood, which can be found at the parking lot next to the sauna. The normal operating temperature is about 36–37 °C. In summer heat, the water is more comfortable at a rather lukewarm temperature.' },
        { type: 'p', text: 'The hot tub has a cartridge filter that filters the water. The water is also chemically disinfected (for example with active oxygen or chlorine), so it remains in good condition without changing, for example, for the whole weekend. For longer use, the hot tub should also be cleaned of debris and the water quality should be monitored. Ask if necessary.' },
        { type: 'callout', text: 'For safe operation, keep the disinfectant tablets in the hot tub and leave the filter running at all times.' },
        { type: 'p', text: 'Cleaning, filling and maintenance of the hot tub are included in the hot tub fee.' },
        { type: 'callout', text: 'When checking out / finishing bathing, you can simply lift the cover back into place.' },
      ],
    },
  },
  {
    id: 'fireplaces',
    icon: 'flame',
    accent: 'coral',
    image: 'images/fireplaces.jpg',
    title: { fi: 'Tulipesät', en: 'Fireplaces' },
    teaser: {
      fi: 'Terassin kevyttakka ja olohuoneen varaava takka',
      en: 'Terrace fireplace and the living-room heat-storing fireplace',
    },
    body: {
      fi: [
        { type: 'heading', text: 'Terassin takka' },
        { type: 'p', text: 'Terassin takka on ns. kevyttakka, joka lämmittää nopeasti.' },
        { type: 'callout', text: 'Aloita lämmittäminen pienellä määrällä puuta, jotta takka ja lasi lämpenevät ilman lämpöshokkia. Varmista, että piipussa oleva pelti on auki-asennossa (vedettynä ulos).' },
        { type: 'heading', text: 'Olohuoneen takka' },
        { type: 'p', text: 'Olohuoneen takka on varaava takka.' },
        { type: 'callout', text: 'Sillä ei ole mahdollista nopeasti nostaa talon lämpötilaa – lämmityksen vaikutus tuntuu yleensä vasta tuntien päästä tai seuraavana päivänä.' },
        { type: 'heading', text: 'Olohuoneen takan sytyttäminen' },
        {
          type: 'steps',
          items: [
            { text: 'Varmista, että takan päällä oleva pelti on vedetty ulos kuvan mukaiseen asentoon.', note: 'HUOM: savupelti on takan päällä, ei hormin toisella puolella.' },
            { text: 'Varmista, että kiertoilmapelti on auki-asennossa. Käännä takan vasemmalla puolella oleva pelti auki kääntämällä sitä vastapäivään.', note: 'Sammutuspeite roikkuu kiertoilmapellin kahvassa – avataksesi sen, käännä vastapäivään.' },
            { text: 'Voit nyt tehdä takkaan tulen. Vetoa voi helpottaa terassin oven raottaminen.' },
          ],
        },
        { type: 'note', text: 'Kun takka on kunnolla syttynyt, käännä kiertoilmapelti takaisin kiinni-asentoon myötäpäivään. Kiertoilmapelti kierrättää palokaasut koko takan kautta ja lämmittää tehokkaammin. Auki ollessaan palokaasut poistuvat suoraan piippuun – parantaen vetoa sytytysvaiheessa, mutta huonontaen polttoainetaloutta.' },
      ],
      en: [
        { type: 'heading', text: 'Terrace fireplace' },
        { type: 'p', text: 'The terrace fireplace is a lightweight fireplace which provides fast heat.' },
        { type: 'callout', text: 'Start heating with a small set of firewood, to allow the fireplace and glass to warm up without heat shock. Make sure the chimney damper is open (pulled out).' },
        { type: 'heading', text: 'Living room fireplace' },
        { type: 'p', text: 'The living room fireplace is a heat-storing fireplace.' },
        { type: 'callout', text: 'It is not possible to use it for quick heating of the house — the heat from the fireplace starts warming only after multiple hours, or even the next day.' },
        { type: 'heading', text: 'Starting the living-room fire' },
        {
          type: 'steps',
          items: [
            { text: 'Make sure the chimney damper is pulled out to the open position shown in the picture.', note: 'NOTE: the damper is above the fireplace, not on the back side of the chimney.' },
            { text: 'Make sure the circulation damper is set to open. The handle is on the left side of the fireplace — turn it counter-clockwise to open it.', note: 'A firefighting blanket hangs on the circulation damper handle. Turn counter-clockwise to open the damper.' },
            { text: 'You can now start a fire in the fireplace. Slightly opening the terrace door can help improve the draft.' },
          ],
        },
        { type: 'note', text: 'When the fire has properly started, close the circulation damper by turning it clockwise. It reroutes exhaust gases through the whole brick fireplace, extracting more heat. When open, gases go straight out the chimney — improving draft for fire-starting, but giving worse fuel efficiency.' },
      ],
    },
  },
  {
    id: 'kitchen',
    icon: 'kitchen',
    accent: 'coral',
    image: 'images/kitchen.jpg',
    title: { fi: 'Keittiö', en: 'Kitchen' },
    teaser: {
      fi: 'Liesi, liesituuletin ja astianpesukone',
      en: 'Stove, extractor hood and dishwasher',
    },
    body: {
      fi: [
        { type: 'p', text: 'Keittiö on lähes täysin varusteltu. Mikroaaltouuni löytyy, mutta ilmafritturia ei vielä ole.' },
        { type: 'callout', text: 'Aterimet löytyvät sisävetolaatikosta lieden vasemmalta puolelta, ylemmän vetolaatikon takaa.' },
        { type: 'p', text: 'Liesi on erittäin voimakas — tasot yli 9 ja P (pika) polttavat ruoan helposti pohjaan. Liesi lämmittää myös kattilat ja pannut hyvin nopeasti.' },
        { type: 'callout', text: 'Liesituuletin toimii käden heilautuksella tai — huomattavasti helpommin — keittiön pöydällä (lieden lähettyvillä) olevalla kaukosäätimellä.' },
        { type: 'callout', text: 'Astianpesukoneen tabletteja löytyy joko uunin yläpuolella olevasta kaapista tai pesualtaan alla olevasta kaapista.' },
      ],
      en: [
        { type: 'p', text: 'The kitchen is almost fully equipped. There is a microwave, but still no air fryer.' },
        { type: 'callout', text: 'Cutlery can be found in the inner drawer on the left side of the stove, behind the upper drawer.' },
        { type: 'p', text: 'The stove is very powerful — levels above 9 and P (boost) quickly burn food. It also heats pots and pans very quickly.' },
        { type: 'callout', text: 'The extractor hood works by waving your hand, or — much easier — with the remote control on the kitchen table, near the stove.' },
        { type: 'callout', text: 'Dishwasher tablets can be found either in the cabinet above the oven or in the cupboard under the sink.' },
      ],
    },
  },
  {
    id: 'ventilation',
    icon: 'wind',
    accent: 'teal',
    title: { fi: 'Ilmanvaihto', en: 'Ventilation' },
    teaser: {
      fi: 'Toimii automaattisesti — älä avaa ikkunoita',
      en: 'Runs automatically — don’t open the windows',
    },
    body: {
      fi: [
        { type: 'p', text: 'Ilmanvaihto toimii koneellisesti ja tehostuu automaattisesti esimerkiksi suihkun aikana ja jälkeen. Tuuletusta ikkunan kautta ei pääsääntöisesti tarvita.' },
        { type: 'callout', text: 'Älä jätä ikkunoita auki uloskirjautuessa, riippumatta sisäilman laadusta!' },
      ],
      en: [
        { type: 'p', text: 'The ventilation works mechanically and increases automatically, for example during and after a shower. Ventilation through the window is generally not needed.' },
        { type: 'callout', text: 'Do not leave the windows open when checking out, regardless of the indoor air quality!' },
      ],
    },
  },
  {
    id: 'glass-terrace',
    icon: 'sun',
    accent: 'teal',
    image: 'images/glass-terrace.jpg',
    title: { fi: 'Lasiterassi', en: 'Glass Terrace' },
    teaser: {
      fi: 'Lämpenee nopeasti auringossa',
      en: 'Heats up fast in the sun',
    },
    body: {
      fi: [
        { type: 'p', text: 'Lasiterassi lämpenee kesällä ja auringossa todella paljon ja nopeasti.' },
        { type: 'callout', text: 'Pitääksesi talon kesällä viileänä (ja hyttyset/kärpäset ulkona), vältä terassin oven pitämistä auki pidempiä jaksoja.' },
        { type: 'p', text: 'Yläkerran ilmalämpöpumppu ei riitä viilentämään taloa, jos terassin ovi on auki.' },
      ],
      en: [
        { type: 'p', text: 'The glass terrace heats up really quickly and a lot in the summer and on sunny days.' },
        { type: 'callout', text: 'To keep the house cool in summer (and keep mosquitoes/flies out), avoid leaving the terrace door open for long periods.' },
        { type: 'p', text: 'The air conditioning upstairs will not be enough to cool the house if the terrace door is open.' },
      ],
    },
  },
  {
    id: 'climate',
    icon: 'thermometer',
    accent: 'teal',
    title: { fi: 'Viilennys ja lämmitys', en: 'Cooling & Heating' },
    teaser: {
      fi: 'Ilmalämpöpumppu ja lattialämmitys',
      en: 'Air-source heat pump and underfloor heating',
    },
    body: {
      fi: [
        { type: 'p', text: 'Kun viilennykselle on tarve, päämakuuhuoneen ilmalämpöpumppu kannattaa pitää päällä ainakin päivisin. Kun makuuhuoneen oven jättää auki, kylmä valuu myös alakertaan. Talon ilmanvaihtokone pystyy myös jäähdyttämään sisään tulevaa ulkoilmaa ilmalämpöpumpun käydessä.' },
        { type: 'p', text: 'Lämmitys tapahtuu lattialämmityksellä.' },
        { type: 'callout', text: 'Mikäli talossa on liian kylmä (tai kuuma lämmityskaudella), ilmoitattehan meille, jotta keskuslämmitystä voidaan säätää.' },
      ],
      en: [
        { type: 'p', text: 'When cooling is needed, it is a good idea to keep the air-source heat pump in the master bedroom on, at least during the day. Leaving the bedroom door open also lets the cold flow downstairs. The centralized ventilation unit can also cool incoming outdoor air while the heat pump is running.' },
        { type: 'p', text: 'Heating is provided by underfloor heating.' },
        { type: 'callout', text: 'If the house is too cold (or too hot during the heating season), please let us know so the central heating can be adjusted.' },
      ],
    },
  },
  {
    id: 'sauna',
    icon: 'sauna',
    accent: 'coral',
    title: { fi: 'Sauna', en: 'Sauna' },
    teaser: {
      fi: 'Puulämmitteinen sauna',
      en: 'Wood-heated sauna',
    },
    body: {
      fi: [
        { type: 'p', text: 'Sauna lämpenee puilla. Istuinalusia löytyy saunalta, ja talon eteisessä olevia tossuja voi käyttää saunalla.' },
        { type: 'callout', text: 'Hormin pelti tulee olla auki-asennossa aina.' },
      ],
      en: [
        { type: 'p', text: 'The sauna is heated with wood. Bench covers are available in the sauna, and the slippers in the hallway can be used there.' },
        { type: 'callout', text: 'The chimney damper must be in the open position at all times.' },
      ],
    },
  },
  {
    id: 'laundry',
    icon: 'washer',
    accent: 'teal',
    image: 'images/laundry.jpg',
    title: { fi: 'Pyykinpesukone', en: 'Washing Machine' },
    teaser: {
      fi: 'Vesihana avataan pöydän napista',
      en: 'Water supply is opened from the button on the table',
    },
    body: {
      fi: [
        { type: 'p', text: 'Pyykinpesukoneen hana aukeaa pöydällä olevasta napista painamalla. Yksi painallus = 3 h auki, pitkä painallus = 12 h auki. Hana on auki, kun napin valo vilkkuu vihreänä.' },
        { type: 'p', text: 'Pyykinpesuainetta löytyy koneen vasemmalta puolelta.' },
      ],
      en: [
        { type: 'p', text: 'The washing machine tap is opened by pressing the button on the table. Single press = 3 h open, long press = 12 h open. The tap is open when the button blinks green.' },
        { type: 'p', text: 'Laundry detergent can be found on the left side of the machine.' },
      ],
    },
  },
  {
    id: 'recycling',
    icon: 'recycle',
    accent: 'teal',
    title: { fi: 'Jätehuolto', en: 'Trash & Recycling' },
    teaser: {
      fi: 'Komposti, sekajäte ja kierrätyspisteet',
      en: 'Compost, mixed waste and recycling points',
    },
    body: {
      fi: [
        { type: 'heading', text: 'Kompostoitava jäte' },
        { type: 'p', text: 'Pihalla — terassin ovesta ulos ja vasemmalle — on ruskea kompostiastia. Kompostoitava jäte laitetaan tähän astiaan.' },
        { type: 'heading', text: 'Sekajäte' },
        { type: 'p', text: 'Sekajäteastia on tien varressa, kiinteistön sisääntulon luona.' },
        { type: 'heading', text: 'Muut kierrätettävät' },
        { type: 'p', text: 'Muut kierrätettävät (lasi, metalli ym.) tulee viedä kierrätyspisteelle (ekopiste).' },
        { type: 'p', text: 'Lähimmän ekopisteen löydät osoitteesta <a href="https://rinkiin.fi/lajittelu-kotona/ekopisteet" target="_blank" rel="noopener">rinkiin.fi</a>.' },
      ],
      en: [
        { type: 'heading', text: 'Compost' },
        { type: 'p', text: 'Outside — through the terrace door and to the left — there’s a brown compost bin. Compostable waste goes here.' },
        { type: 'heading', text: 'Mixed waste' },
        { type: 'p', text: 'The mixed-waste bin is by the road, at the entrance to the property.' },
        { type: 'heading', text: 'Other recyclables' },
        { type: 'p', text: 'Other recyclables (glass, metal, etc.) need to be taken to a recycling point (ekopiste).' },
        { type: 'p', text: 'Find your nearest recycling point at <a href="https://rinkiin.fi/lajittelu-kotona/ekopisteet" target="_blank" rel="noopener">rinkiin.fi</a>.' },
      ],
    },
  },
  {
    id: 'bed-linen',
    icon: 'bed',
    accent: 'coral',
    title: { fi: 'Petivaatteet', en: 'Bed Linen' },
    teaser: {
      fi: 'Ylimääräiset peitot ja tyynyt',
      en: 'Extra blankets and pillows',
    },
    body: {
      fi: [
        { type: 'p', text: 'Lisää peittoja ja tyynyjä löytyy päämakuuhuoneen peilikaapista.' },
      ],
      en: [
        { type: 'p', text: 'Extra blankets and pillows can be found in the mirror cabinet in the main bedroom.' },
      ],
    },
  },
];
