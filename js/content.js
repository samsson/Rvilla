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
      'This manual covers how to use the house’s devices and spaces. ' +
      'The most important things to remember in each section are highlighted.',
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
        { type: 'heading', text: 'Heating' },
        { type: 'p', text: 'The hot tub is heated with firewood, stored by the sauna at the turning area. The normal operating temperature is about 36–37 °C — in summer heat, most guests prefer it a little cooler.' },
        { type: 'heading', text: 'Water care' },
        { type: 'p', text: 'A cartridge filter keeps the water circulating, and it’s also chemically disinfected (with active oxygen or chlorine) so it stays clean between fills — for example, over a full weekend. If you’re using the tub several days in a row, skim off any debris now and then and keep an eye on the water quality. Ask us if you’re unsure.' },
        { type: 'callout', text: 'For safe operation, keep the disinfectant tablets in the tub and leave the filter running at all times.' },
        { type: 'heading', text: 'Finishing up' },
        { type: 'p', text: 'Cleaning, filling and maintenance are included in the hot tub fee — you don’t need to drain or clean it yourself.' },
        { type: 'callout', text: 'When you’re done bathing, or checking out, simply lift the cover back into place.' },
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
        { type: 'p', text: 'The terrace fireplace is a lightweight stove that heats up quickly.' },
        { type: 'callout', text: 'Start with a small amount of firewood so the stove and glass warm up gradually, without heat shock. Make sure the chimney damper is open (pulled out) before lighting it.' },
        { type: 'heading', text: 'Living-room fireplace' },
        { type: 'p', text: 'The living-room fireplace is a heat-storing masonry fireplace.' },
        { type: 'callout', text: 'It can’t heat the house quickly — the warmth from a fire is usually only noticeable after several hours, or even the next day.' },
        { type: 'heading', text: 'Lighting the living-room fire' },
        {
          type: 'steps',
          items: [
            { text: 'Pull the chimney damper out to the open position.', note: 'The damper is above the fireplace itself, not on the back of the chimney — easy to mix up.' },
            { text: 'Open the circulation damper by turning the handle on the left side of the fireplace counter-clockwise.', note: 'A fire blanket hangs from the circulation damper handle — that’s normal. Just turn the handle counter-clockwise to open the damper.' },
            { text: 'Light the fire. Opening the terrace door slightly can help it catch by improving the draft.' },
          ],
        },
        { type: 'note', text: 'Once the fire is burning well, close the circulation damper by turning it clockwise. This routes the exhaust through the whole masonry fireplace, extracting more heat. Leaving it open sends exhaust straight up the chimney — better draft for lighting, but less fuel-efficient.' },
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
        { type: 'p', text: 'The kitchen is almost fully equipped, including a microwave — there is currently no air fryer.' },
        { type: 'callout', text: 'Cutlery is in the inner drawer on the left side of the stove, behind the upper drawer.' },
        { type: 'heading', text: 'Cooking' },
        { type: 'p', text: 'The stove is very powerful: level 9 and above, and the P (boost) setting, will burn food quickly and heat pots and pans in no time.' },
        { type: 'callout', text: 'The extractor hood responds to a hand wave, or — much easier — the remote control on the kitchen table, next to the stove.' },
        { type: 'heading', text: 'Cleaning up' },
        { type: 'callout', text: 'Dishwasher tablets are in the cabinet above the oven, or in the cupboard under the sink.' },
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
        { type: 'p', text: 'The ventilation system runs mechanically and automatically increases airflow — for example, during and after a shower. Opening windows for extra ventilation generally isn’t necessary.' },
        { type: 'callout', text: 'Please don’t leave windows open when you check out, regardless of the indoor air quality.' },
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
        { type: 'p', text: 'The glass terrace heats up quickly on sunny summer days.' },
        { type: 'callout', text: 'To keep the house cool in summer — and keep mosquitoes and flies out — avoid leaving the terrace door open for long periods.' },
        { type: 'p', text: 'The upstairs air conditioning can’t keep up with the heat if the terrace door is left open.' },
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
        { type: 'heading', text: 'Cooling' },
        { type: 'p', text: 'On hot days, keep the air-source heat pump in the master bedroom running, ideally during the daytime. Leaving the bedroom door open lets the cool air flow down to the rest of the house. The ventilation system can also cool incoming outdoor air while the heat pump is running.' },
        { type: 'heading', text: 'Heating' },
        { type: 'p', text: 'The house is heated with underfloor heating.' },
        { type: 'callout', text: 'If the house feels too cold, or too warm during the heating season, please let us know so we can adjust the central heating.' },
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
        { type: 'p', text: 'The sauna is wood-heated. Bench covers are provided, and you’re welcome to use the slippers from the hallway.' },
        { type: 'callout', text: 'Keep the chimney damper open at all times.' },
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
        { type: 'callout', text: 'Before starting a load, open the water supply by pressing the button on the table: a single press opens it for 3 hours, a long press for 12 hours. The button blinks green while the tap is open.' },
        { type: 'p', text: 'Laundry detergent is on the left side of the machine.' },
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
        { type: 'p', text: 'Extra blankets and pillows are in the mirror cabinet in the main bedroom.' },
      ],
    },
  },
];
