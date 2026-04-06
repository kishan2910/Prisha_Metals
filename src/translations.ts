export type Language = 'en' | 'de';

export interface Translation {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  categories: {
    title: string;
    subtitle: string;
    bath: string;
    hinges: string;
    handles: string;
    knobs: string;
    gasFittings: string;
    sensorComponents: string;
    brassPrecision: string;
    customComponents: string;
  };
  materials: {
    title: string;
    brass: string;
    copper: string;
    stainless: string;
    aluminum: string;
  };
  whyChooseUs: {
    title: string;
    quality: string;
    qualityDesc: string;
    precision: string;
    precisionDesc: string;
    export: string;
    exportDesc: string;
  };
  industries: {
    title: string;
    automotive: string;
    construction: string;
    electronics: string;
    aerospace: string;
  };
  about: {
    title: string;
    overview: string;
    overviewContent: string;
    process: string;
    processContent: string;
    export: string;
    exportContent: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  productDetail: {
    specs: string;
    material: string;
    finish: string;
    dimensions: string;
    requestQuote: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Engineered Metal Solutions for Modern Living',
      subtitle: 'Premium hardware manufacturing and precision metal components for the discerning European market.',
      cta1: 'Explore Products',
      cta2: 'Request a Quote',
    },
    categories: {
      title: 'Product Categories',
      subtitle: 'Discover our range of premium engineered solutions.',
      bath: 'Bath Accessories',
      hinges: 'Hinges',
      handles: 'Door Handles',
      knobs: 'Knobs',
      gasFittings: 'Gas Fittings',
      sensorComponents: 'Sensor Components',
      brassPrecision: 'Brass Precision Parts',
      customComponents: 'Custom Components',
    },
    materials: {
      title: 'Materials of Excellence',
      brass: 'Brass',
      copper: 'Copper',
      stainless: 'Stainless Steel',
      aluminum: 'Aluminum',
    },
    whyChooseUs: {
      title: 'Why Choose Prisha Metal',
      quality: 'Uncompromising Quality',
      qualityDesc: 'Every component undergoes rigorous testing to meet European standards.',
      precision: 'Precision Engineering',
      precisionDesc: 'State-of-the-art CNC technology for micron-level accuracy.',
      export: 'Global Export Focus',
      exportDesc: 'Dedicated logistics and support for our partners in Germany, Netherlands, and France.',
    },
    industries: {
      title: 'Industries We Serve',
      automotive: 'Automotive',
      construction: 'Construction',
      electronics: 'Electronics',
      aerospace: 'Aerospace',
    },
    about: {
      title: 'About Prisha Metal',
      overview: 'Company Overview',
      overviewContent: 'Prisha Metal is a leading manufacturer of high-precision metal components, dedicated to engineering excellence and luxury design.',
      process: 'Manufacturing Process',
      processContent: 'Our facility utilizes advanced hot forging and precision machining to create components that are both beautiful and functional.',
      export: 'Export Focus',
      exportContent: 'With a strong presence in the European market, we understand the specific requirements for quality and reliability.',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Thank you! Your message has been sent.',
    },
    productDetail: {
      specs: 'Specifications',
      material: 'Material',
      finish: 'Finish',
      dimensions: 'Dimensions',
      requestQuote: 'Request Quote',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Technische Metalllösungen für modernes Wohnen',
      subtitle: 'Premium-Hardware-Herstellung und Präzisionsmetallkomponenten für den anspruchsvollen europäischen Markt.',
      cta1: 'Produkte entdecken',
      cta2: 'Angebot anfordern',
    },
    categories: {
      title: 'Produktkategorien',
      subtitle: 'Entdecken Sie unser Sortiment an erstklassigen technischen Lösungen.',
      bath: 'Badzubehör',
      hinges: 'Scharniere',
      handles: 'Türgriffe',
      knobs: 'Knöpfe',
      gasFittings: 'Gasarmaturen',
      sensorComponents: 'Sensorkomponenten',
      brassPrecision: 'Messing-Präzisionsteile',
      customComponents: 'Kundenspezifische Komponenten',
    },
    materials: {
      title: 'Materialien der Exzellenz',
      brass: 'Messing',
      copper: 'Kupfer',
      stainless: 'Edelstahl',
      aluminum: 'Aluminium',
    },
    whyChooseUs: {
      title: 'Warum Prisha Metal wählen',
      quality: 'Kompromisslose Qualität',
      qualityDesc: 'Jede Komponente wird strengen Tests unterzogen, um europäischen Standards zu entsprechen.',
      precision: 'Präzisionstechnik',
      precisionDesc: 'Modernste CNC-Technologie für mikrometergenaue Präzision.',
      export: 'Globaler Exportfokus',
      exportDesc: 'Engagierte Logistik und Unterstützung für unsere Partner in Deutschland, den Niederlanden und Frankreich.',
    },
    industries: {
      title: 'Branchen, die wir bedienen',
      automotive: 'Automobilindustrie',
      construction: 'Bauwesen',
      electronics: 'Elektronik',
      aerospace: 'Luft- und Raumfahrt',
    },
    about: {
      title: 'Über Prisha Metal',
      overview: 'Unternehmensübersicht',
      overviewContent: 'Prisha Metal ist ein führender Hersteller von hochpräzisen Metallkomponenten, der sich technischer Exzellenz und luxuriösem Design verschrieben hat.',
      process: 'Herstellungsprozess',
      processContent: 'Unsere Anlage nutzt fortschrittliches Warmschmieden und Präzisionsbearbeitung, um Komponenten zu schaffen, die sowohl schön als auch funktional sind.',
      export: 'Exportfokus',
      exportContent: 'Mit einer starken Präsenz auf dem europäischen Markt verstehen wir die spezifischen Anforderungen an Qualität und Zuverlässigkeit.',
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      success: 'Vielen Dank! Ihre Nachricht wurde gesendet.',
    },
    productDetail: {
      specs: 'Spezifikationen',
      material: 'Material',
      finish: 'Oberfläche',
      dimensions: 'Abmessungen',
      requestQuote: 'Angebot anfordern',
    },
  },
};
