// All site copy, in English and Albanian.
// PLACEHOLDER: everything marked TODO is dummy content until the owner supplies the real details.

export type Lang = "en" | "sq";

export const company = {
  name: "Krasniqi Studio", // TODO real company name
  founder: "Erblin Krasniqi",
  city: { en: "Pristina, Kosovo", sq: "Prishtinë, Kosovë" },
};

export const contact = {
  email: "hello@example.com", // TODO real email
  whatsapp: "38344000000", // TODO real number, international format without +
  phoneLabel: "+383 44 000 000", // TODO
  github: "https://github.com/ErblinKrasniqi",
  linkedin: "https://www.linkedin.com/", // TODO company page URL
};

export const stages = ["sketch", "design", "live"] as const;
export type Stage = (typeof stages)[number];

type Screen = "booking" | "day" | "file";

type WorkItem = {
  name: string;
  kind: string;
  year: string;
  summary: string;
  built: string[];
  stack: string[];
};

export type Dict = {
  htmlTitle: string;
  htmlDescription: string;
  skip: string;
  nav: { work: string; services: string; studio: string; contact: string; menu: string; close: string };
  langSwitch: { label: string; other: string; href: string };
  hero: {
    title: string;
    sub: string;
    primary: string;
    secondary: string;
    stagesLabel: string;
    stages: Record<Stage, string>;
    stageNote: string;
    demoLabel: string;
  };
  demo: {
    site: {
      url: string;
      brand: string;
      links: string[];
      cta: string;
      title: string;
      text: string;
      button: string;
      items: { name: string; price: string }[];
      toast: string;
    };
    app: {
      title: string;
      subtitle: string;
      items: { name: string; price: string; qty: number }[];
      total: string;
      totalValue: string;
      send: string;
      toast: string;
    };
  };
  work: {
    title: string;
    intro: string;
    moreTitle: string;
    open: string;
    close: string;
    builtLabel: string;
    stackLabel: string;
    placeholder: string;
    items: WorkItem[];
  };
  caseStudy: {
    title: string;
    intro: string;
    facts: { term: string; detail: string }[];
    tabsLabel: string;
    tabs: Record<Screen, string>;
    features: { title: string; text: string }[];
  };
  services: { title: string; intro: string; items: { title: string; text: string }[] };
  process: { title: string; steps: { title: string; text: string }[] };
  studio: {
    title: string;
    body: string[];
    reasons: { title: string; text: string }[];
    toolsLabel: string;
    tools: string[];
    founderCaption: string;
    photoAlt: string;
  };
  contact: {
    title: string;
    text: string;
    typeLabel: string;
    types: string[];
    name: string;
    email: string;
    message: string;
    submit: string;
    note: string;
    subject: string;
    talk: string;
    whatsapp: string;
    call: string;
  };
  footer: { top: string };
  screens: {
    appName: string;
    booking: {
      title: string;
      serviceLabel: string;
      services: string[];
      doctorLabel: string;
      dayLabel: string;
      days: string[];
      timeLabel: string;
      confirm: string;
    };
    day: {
      title: string;
      count: string;
      statuses: { in: string; waiting: string; done: string };
      rows: { time: string; name: string; reason: string; status: "in" | "waiting" | "done" }[];
    };
    file: {
      name: string;
      meta: string;
      rxTitle: string;
      eye: string;
      right: string;
      left: string;
      pressure: string;
      acuity: string;
      notesTitle: string;
      notes: string;
    };
  };
};

export const screenDoctors = ["Dr. Giulia Romano", "Dr. Marco Bianchi", "Dr. Ardita Shala"];

const tools = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"];

export const dict: Record<Lang, Dict> = {
  en: {
    htmlTitle: `${company.name}, websites and web apps in Pristina`,
    htmlDescription: `${company.name} designs and builds websites and web apps for clinics, restaurants, shops and growing teams in Kosovo and beyond.`,
    skip: "Skip to content",
    nav: { work: "Work", services: "Services", studio: "Studio", contact: "Start a project", menu: "Menu", close: "Close" },
    langSwitch: { label: "Shqip", other: "Kalo në shqip", href: "/sq" },
    hero: {
      title: "Websites and web apps that businesses run on.",
      sub: `${company.name} is a design and development studio in Pristina. We take projects from the first sketch to a live product, then look after them.`,
      primary: "Start a project",
      secondary: "See our work",
      stagesLabel: "Project stage",
      stages: { sketch: "Sketch", design: "Design", live: "Live" },
      stageNote: "Every project goes from a rough sketch to a live product. Try it.",
      demoLabel: "A clinic website and a restaurant ordering app, shown at the selected stage.",
    },
    demo: {
      site: {
        url: "dentalcare.example",
        brand: "Dental Care",
        links: ["Treatments", "Prices", "Contact"],
        cta: "Book a visit",
        title: "Healthy smiles for the whole family",
        text: "Check-ups, whitening and braces in the centre of Pristina.",
        button: "See free times",
        items: [
          { name: "Check-up", price: "€25" },
          { name: "Whitening", price: "€120" },
          { name: "Braces", price: "from €900" },
        ],
        toast: "New booking: Tuesday, 10:30",
      },
      app: {
        title: "Table 4",
        subtitle: "Order from your table",
        items: [
          { name: "Pizza margherita", price: "€6.50", qty: 1 },
          { name: "Caesar salad", price: "€5.00", qty: 1 },
          { name: "Lemonade", price: "€2.50", qty: 2 },
        ],
        total: "Total",
        totalValue: "€16.50",
        send: "Send order",
        toast: "Order sent to the kitchen",
      },
    },
    work: {
      title: "Selected work",
      intro: "Websites and web apps for clinics, restaurants, real estate agencies and warehouses.",
      moreTitle: "More projects",
      open: "Show details",
      close: "Hide details",
      builtLabel: "What we built",
      stackLabel: "Built with",
      placeholder: "Screenshots coming soon",
      items: [
        // TODO replace with real projects
        {
          name: "Dental clinic website",
          kind: "Website",
          year: "2025",
          summary: "A friendly site for a family dental practice, with treatment prices and a booking request form.",
          built: ["Treatment and price pages", "Booking request form", "Google reviews on the home page"],
          stack: ["Next.js", "Tailwind CSS"],
        },
        {
          name: "Restaurant ordering app",
          kind: "Web app",
          year: "2024",
          summary: "Guests order from their table by scanning a code. Orders go straight to the kitchen screen.",
          built: ["QR menu in two languages", "Live kitchen screen", "Daily sales summary"],
          stack: ["React", "Node.js", "PostgreSQL"],
        },
        {
          name: "Real estate listings",
          kind: "Website",
          year: "2024",
          summary: "Apartments for sale and rent in Pristina, with filters that make sense on a phone.",
          built: ["Listings with map search", "Admin panel for agents", "Enquiry tracking"],
          stack: ["Next.js", "Prisma", "PostgreSQL"],
        },
        {
          name: "Warehouse stock dashboard",
          kind: "Web app",
          year: "2023",
          summary: "A dashboard that shows what is in stock, what is running low and what needs reordering.",
          built: ["Stock levels by location", "Low-stock alerts", "CSV import from the old system"],
          stack: ["React", "Express", "MySQL"],
        },
      ],
    },
    caseStudy: {
      title: "A patient platform for an Italian eye hospital in Kosovo",
      intro:
        "Patients book eye exams online in Albanian, Italian or English. Doctors see their day at a glance, and every prescription and exam lives in one patient file instead of paper folders.",
      facts: [
        { term: "Client", detail: "Italian eye hospital, Pristina" }, // TODO name, if allowed
        { term: "Our part", detail: "Design, front end, back end, hosting" }, // TODO confirm
        { term: "Timeline", detail: "2025, four months" }, // TODO
        { term: "Built with", detail: "Next.js, Node.js, PostgreSQL" }, // TODO
      ],
      tabsLabel: "App screens",
      tabs: { booking: "Booking", day: "Doctor’s day", file: "Patient file" },
      features: [
        { title: "Booking in three languages", text: "Patients pick an exam, a doctor and a time without calling the front desk." },
        { title: "A calmer front desk", text: "Check-ins, waiting times and no-shows are visible to everyone at once." },
        { title: "One file per patient", text: "Prescriptions, eye pressure and notes from every visit, kept in order." },
        { title: "Reminders that work", text: "SMS reminders the day before cut down on missed appointments." },
      ],
    },
    services: {
      title: "What we build",
      intro: "One team for the whole job: design, development, hosting and the care that comes after.",
      items: [
        { title: "Websites", text: "Company, clinic and restaurant sites that are fast, clear and easy to update." },
        { title: "Web apps", text: "Booking systems, customer portals and ordering apps, built around how your business works." },
        { title: "Dashboards and internal tools", text: "Stock, sales and schedules: the numbers your team checks every day, in one place." },
        { title: "Care after launch", text: "Hosting, updates, backups and fixes, with one team to call." },
      ],
    },
    process: {
      title: "How we work",
      steps: [
        { title: "We talk", text: "You tell us what you need. We ask a lot of questions." },
        { title: "We plan", text: "A clear scope, a price and a timeline before any code." },
        { title: "We build", text: "You see progress every week and can try it as it grows." },
        { title: "We launch", text: "We put it live and stay around to look after it." },
      ],
    },
    studio: {
      title: "A small studio that stays with you",
      body: [
        `${company.name} is a design and development studio in Pristina, founded by ${company.founder}, a full-stack developer.`,
        "We keep the team small on purpose. You talk directly to the people who design and build your project, in Albanian, English or Italian.",
      ],
      reasons: [
        { title: "One team, start to finish", text: "Design, development and hosting under one roof." },
        { title: "Built to last", text: "Modern, tested code that is easy to grow." },
        { title: "Here after launch", text: "We still pick up the phone once the invoice is paid." },
      ],
      toolsLabel: "Technology we use",
      tools,
      founderCaption: `${company.founder}, founder`,
      photoAlt: `Photo of ${company.founder}`,
    },
    contact: {
      title: "Start a project",
      text: "Tell us what you need. We reply within one working day.",
      typeLabel: "What do you need?",
      types: ["Website", "Web app", "Dashboard", "Not sure yet"],
      name: "Your name",
      email: "Your email",
      message: "Tell us about your project",
      submit: "Send project details",
      note: "This opens your email app with everything filled in.",
      subject: "New project",
      talk: "Prefer to talk?",
      whatsapp: "Message on WhatsApp",
      call: "Call",
    },
    footer: { top: "Back to top" },
    screens: {
      appName: "Patient portal",
      booking: {
        title: "Book an eye exam",
        serviceLabel: "Exam",
        services: ["Eye exam", "Cataract consultation", "Children’s vision", "Contact lenses"],
        doctorLabel: "Doctor",
        dayLabel: "Day",
        days: ["Mon 6", "Tue 7", "Wed 8", "Thu 9", "Fri 10"],
        timeLabel: "Time",
        confirm: "Book Tue 7 Oct at 10:30",
      },
      day: {
        title: "Tuesday, 7 October",
        count: "12 patients today",
        statuses: { in: "Checked in", waiting: "Waiting", done: "Done" },
        rows: [
          { time: "09:00", name: "Arta Berisha", reason: "Eye exam", status: "done" },
          { time: "09:30", name: "Driton Gashi", reason: "Cataract follow-up", status: "done" },
          { time: "10:00", name: "Blerta Hoxha", reason: "Contact lenses", status: "in" },
          { time: "10:30", name: "Luan Morina", reason: "Eye exam", status: "waiting" },
          { time: "11:00", name: "Elira Rexhepi", reason: "Children’s vision", status: "waiting" },
        ],
      },
      file: {
        name: "Blerta Hoxha",
        meta: "34 years old, patient since 2023",
        rxTitle: "Glasses prescription",
        eye: "Eye",
        right: "Right",
        left: "Left",
        pressure: "Eye pressure",
        acuity: "Vision",
        notesTitle: "Notes from today",
        notes: "Slight change in the left eye. New glasses recommended. Next check in 12 months.",
      },
    },
  },

  sq: {
    htmlTitle: `${company.name}, uebfaqe dhe aplikacione web në Prishtinë`,
    htmlDescription: `${company.name} dizajnon dhe ndërton uebfaqe dhe aplikacione web për klinika, restorante, dyqane dhe ekipe në rritje, në Kosovë e më gjerë.`,
    skip: "Kalo te përmbajtja",
    nav: { work: "Punët", services: "Shërbimet", studio: "Studio", contact: "Nisni një projekt", menu: "Menyja", close: "Mbyll" },
    langSwitch: { label: "English", other: "Switch to English", href: "/" },
    hero: {
      title: "Uebfaqe dhe aplikacione web mbi të cilat punojnë bizneset.",
      sub: `${company.name} është studio dizajni dhe zhvillimi në Prishtinë. I çojmë projektet nga skica e parë deri te produkti live, dhe kujdesemi për to edhe më pas.`,
      primary: "Nisni një projekt",
      secondary: "Shikoni punët tona",
      stagesLabel: "Faza e projektit",
      stages: { sketch: "Skica", design: "Dizajni", live: "Live" },
      stageNote: "Çdo projekt nis si skicë dhe përfundon si produkt live. Provojeni.",
      demoLabel: "Një uebfaqe klinike dhe një aplikacion porosish për restorant, në fazën e zgjedhur.",
    },
    demo: {
      site: {
        url: "klinikadentare.example",
        brand: "Klinika Dentare",
        links: ["Trajtimet", "Çmimet", "Kontakti"],
        cta: "Rezervo vizitë",
        title: "Buzëqeshje të shëndetshme për gjithë familjen",
        text: "Kontrolle, zbardhje dhe aparate dentare në qendër të Prishtinës.",
        button: "Shiko oraret e lira",
        items: [
          { name: "Kontrolli", price: "€25" },
          { name: "Zbardhja", price: "€120" },
          { name: "Aparati", price: "nga €900" },
        ],
        toast: "Rezervim i ri: e martë, 10:30",
      },
      app: {
        title: "Tavolina 4",
        subtitle: "Porosisni nga tavolina",
        items: [
          { name: "Pica margarita", price: "€6.50", qty: 1 },
          { name: "Sallatë Cezar", price: "€5.00", qty: 1 },
          { name: "Limonadë", price: "€2.50", qty: 2 },
        ],
        total: "Gjithsej",
        totalValue: "€16.50",
        send: "Dërgo porosinë",
        toast: "Porosia shkoi në kuzhinë",
      },
    },
    work: {
      title: "Punë të zgjedhura",
      intro: "Uebfaqe dhe aplikacione web për klinika, restorante, agjenci patundshmërish dhe depo.",
      moreTitle: "Projekte të tjera",
      open: "Shfaq detajet",
      close: "Fshih detajet",
      builtLabel: "Çfarë ndërtuam",
      stackLabel: "Ndërtuar me",
      placeholder: "Pamjet vijnë së shpejti",
      items: [
        {
          name: "Uebfaqe për klinikë dentare",
          kind: "Uebfaqe",
          year: "2025",
          summary: "Një faqe miqësore për një klinikë dentare familjare, me çmimet e trajtimeve dhe formular rezervimi.",
          built: ["Faqe për trajtimet dhe çmimet", "Formular për kërkesë rezervimi", "Vlerësimet nga Google në ballinë"],
          stack: ["Next.js", "Tailwind CSS"],
        },
        {
          name: "Aplikacion porosish për restorant",
          kind: "Aplikacion web",
          year: "2024",
          summary: "Mysafirët porosisin nga tavolina duke skanuar një kod. Porositë shkojnë direkt në ekranin e kuzhinës.",
          built: ["Meny QR në dy gjuhë", "Ekran i kuzhinës në kohë reale", "Përmbledhje ditore e shitjeve"],
          stack: ["React", "Node.js", "PostgreSQL"],
        },
        {
          name: "Shpallje patundshmërish",
          kind: "Uebfaqe",
          year: "2024",
          summary: "Banesa për shitje dhe me qira në Prishtinë, me filtra që kanë kuptim në telefon.",
          built: ["Shpallje me kërkim në hartë", "Panel për agjentët", "Ndjekja e kërkesave"],
          stack: ["Next.js", "Prisma", "PostgreSQL"],
        },
        {
          name: "Panel për stokun e depos",
          kind: "Aplikacion web",
          year: "2023",
          summary: "Një panel që tregon çfarë ka në stok, çfarë po mbaron dhe çfarë duhet porositur.",
          built: ["Stoku sipas lokacionit", "Njoftime kur stoku bie", "Importim CSV nga sistemi i vjetër"],
          stack: ["React", "Express", "MySQL"],
        },
      ],
    },
    caseStudy: {
      title: "Platformë për pacientët e një spitali italian të syve në Kosovë",
      intro:
        "Pacientët rezervojnë kontrollin e syve online, në shqip, italisht ose anglisht. Mjekët e shohin ditën e tyre me një shikim, dhe çdo recetë e kontroll ruhet në një dosje të pacientit në vend të dosjeve prej letre.",
      facts: [
        { term: "Klienti", detail: "Spital italian i syve, Prishtinë" },
        { term: "Pjesa jonë", detail: "Dizajn, front end, back end, hosting" },
        { term: "Kohëzgjatja", detail: "2025, katër muaj" },
        { term: "Ndërtuar me", detail: "Next.js, Node.js, PostgreSQL" },
      ],
      tabsLabel: "Ekranet e aplikacionit",
      tabs: { booking: "Rezervimi", day: "Dita e mjekut", file: "Dosja" },
      features: [
        { title: "Rezervim në tri gjuhë", text: "Pacientët zgjedhin kontrollin, mjekun dhe orarin pa telefonuar në recepsion." },
        { title: "Recepsion më i qetë", text: "Paraqitjet, pritjet dhe mungesat shihen nga të gjithë njëkohësisht." },
        { title: "Një dosje për çdo pacient", text: "Recetat, presioni i syrit dhe shënimet nga çdo vizitë, të renditura." },
        { title: "Kujtesa që funksionojnë", text: "Mesazhet SMS një ditë më parë i ulin terminet e humbura." },
      ],
    },
    services: {
      title: "Çfarë ndërtojmë",
      intro: "Një ekip për gjithë punën: dizajn, zhvillim, hosting dhe kujdesin që vjen më pas.",
      items: [
        { title: "Uebfaqe", text: "Faqe për kompani, klinika dhe restorante: të shpejta, të qarta dhe të lehta për t’u përditësuar." },
        { title: "Aplikacione web", text: "Sisteme rezervimi, portale për klientë dhe aplikacione porosish, sipas mënyrës si punon biznesi juaj." },
        { title: "Panele dhe mjete të brendshme", text: "Stoku, shitjet dhe oraret: numrat që ekipi juaj i shikon çdo ditë, në një vend." },
        { title: "Kujdes pas lansimit", text: "Hosting, përditësime, kopje rezervë dhe rregullime, me një ekip që mund ta thërrisni." },
      ],
    },
    process: {
      title: "Si punojmë",
      steps: [
        { title: "Flasim", text: "Na tregoni çfarë ju duhet. Ne bëjmë shumë pyetje." },
        { title: "Planifikojmë", text: "Qëllim i qartë, çmim dhe afat para çdo rreshti kodi." },
        { title: "Ndërtojmë", text: "Çdo javë e shihni progresin dhe e provoni ndërsa rritet." },
        { title: "Lansojmë", text: "E vendosim live dhe mbetemi pranë për ta mirëmbajtur." },
      ],
    },
    studio: {
      title: "Studio e vogël që mbetet me ju",
      body: [
        `${company.name} është studio dizajni dhe zhvillimi në Prishtinë, e themeluar nga ${company.founder}, zhvillues full-stack.`,
        "Ekipin e mbajmë të vogël qëllimisht. Flisni drejtpërdrejt me njerëzit që e dizajnojnë dhe e ndërtojnë projektin tuaj, në shqip, anglisht ose italisht.",
      ],
      reasons: [
        { title: "Një ekip, nga fillimi në fund", text: "Dizajni, zhvillimi dhe hostingu nën një çati." },
        { title: "E ndërtuar për të zgjatur", text: "Kod modern dhe i testuar, i lehtë për t’u zgjeruar." },
        { title: "Pranë jush edhe pas lansimit", text: "E ngremë telefonin edhe pasi paguhet fatura." },
      ],
      toolsLabel: "Teknologjia që përdorim",
      tools,
      founderCaption: `${company.founder}, themelues`,
      photoAlt: `Foto e ${company.founder}`,
    },
    contact: {
      title: "Nisni një projekt",
      text: "Na tregoni çfarë ju duhet. Përgjigjemi brenda një dite pune.",
      typeLabel: "Çfarë ju duhet?",
      types: ["Uebfaqe", "Aplikacion web", "Panel", "Ende s’jam i sigurt"],
      name: "Emri juaj",
      email: "Email-i juaj",
      message: "Na tregoni për projektin",
      submit: "Dërgo detajet e projektit",
      note: "Kjo hap aplikacionin tuaj të email-it me gjithçka të plotësuar.",
      subject: "Projekt i ri",
      talk: "Preferoni të flisni?",
      whatsapp: "Shkruani në WhatsApp",
      call: "Telefononi",
    },
    footer: { top: "Kthehu lart" },
    screens: {
      appName: "Portali i pacientit",
      booking: {
        title: "Rezervo kontrollin e syve",
        serviceLabel: "Kontrolli",
        services: ["Kontroll i syve", "Konsultë për kataraktë", "Shikimi te fëmijët", "Lente kontakti"],
        doctorLabel: "Mjeku",
        dayLabel: "Dita",
        days: ["Hën 6", "Mar 7", "Mër 8", "Enj 9", "Pre 10"],
        timeLabel: "Ora",
        confirm: "Rezervo të martën, 7 tetor, 10:30",
      },
      day: {
        title: "E martë, 7 tetor",
        count: "12 pacientë sot",
        statuses: { in: "Paraqitur", waiting: "Në pritje", done: "Përfunduar" },
        rows: [
          { time: "09:00", name: "Arta Berisha", reason: "Kontroll i syve", status: "done" },
          { time: "09:30", name: "Driton Gashi", reason: "Kontroll pas katarakte", status: "done" },
          { time: "10:00", name: "Blerta Hoxha", reason: "Lente kontakti", status: "in" },
          { time: "10:30", name: "Luan Morina", reason: "Kontroll i syve", status: "waiting" },
          { time: "11:00", name: "Elira Rexhepi", reason: "Shikimi te fëmijët", status: "waiting" },
        ],
      },
      file: {
        name: "Blerta Hoxha",
        meta: "34 vjeç, pacient që nga 2023",
        rxTitle: "Receta për syze",
        eye: "Syri",
        right: "Djathtas",
        left: "Majtas",
        pressure: "Presioni i syrit",
        acuity: "Shikimi",
        notesTitle: "Shënime nga sot",
        notes: "Ndryshim i lehtë në syrin e majtë. Rekomandohen syze të reja. Kontrolli tjetër pas 12 muajsh.",
      },
    },
  },
};
