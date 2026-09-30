// All site copy, in English and Albanian.
// PLACEHOLDER: everything marked TODO is dummy content until the owner supplies the real details.

export type Lang = "en" | "sq";

export const contact = {
  email: "hello@example.com", // TODO real email
  whatsapp: "38344000000", // TODO real number, international format without +
  phoneLabel: "+383 44 000 000", // TODO
  github: "https://github.com/ErblinKrasniqi",
  linkedin: "https://www.linkedin.com/", // TODO profile URL
};

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
  nav: { work: string; services: string; about: string; contact: string; menu: string; close: string };
  langSwitch: { label: string; other: string; href: string };
  hero: {
    lines: [string, string, string]; // the h1, one line per chart row
    sub: [string, string];
    tiny: string;
  };
  caseStudy: {
    title: string;
    intro: string;
    facts: { term: string; detail: string }[];
    tabsLabel: string;
    tabs: Record<Screen, string>;
    features: { title: string; text: string }[];
  };
  work: { title: string; intro: string; open: string; close: string; builtLabel: string; stackLabel: string; placeholder: string; items: WorkItem[] };
  services: { title: string; items: { title: string; text: string }[] };
  process: { title: string; steps: { title: string; text: string }[] };
  about: { title: string; body: string[]; toolsLabel: string; tools: string[]; photoAlt: string };
  contact: { title: string; text: string; email: string; whatsapp: string; orCall: string };
  footer: { made: string; top: string };
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
    day: { title: string; count: string; statuses: { in: string; waiting: string; done: string }; rows: { time: string; name: string; reason: string; status: "in" | "waiting" | "done" }[] };
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

const doctors = ["Dr. Giulia Romano", "Dr. Marco Bianchi", "Dr. Ardita Shala"];
export const screenDoctors = doctors;

export const dict: Record<Lang, Dict> = {
  en: {
    htmlTitle: "Erblin Krasniqi, websites and web apps",
    htmlDescription:
      "Full-stack developer in Pristina, Kosovo. I design and build websites and web apps for clinics, shops and growing teams.",
    skip: "Skip to content",
    nav: { work: "Work", services: "Services", about: "About", contact: "Contact", menu: "Menu", close: "Close" },
    langSwitch: { label: "Shqip", other: "Kalo në shqip", href: "/sq" },
    hero: {
      lines: ["Erblin Krasniqi", "builds websites and web apps", "that people enjoy using"],
      sub: [
        "For clinics, shops and growing teams in Kosovo and beyond.",
        "Full-stack: design, front end, back end and hosting.",
      ],
      tiny: "If you can read this line, let’s talk about your project.",
    },
    caseStudy: {
      title: "A patient platform for an Italian eye hospital in Kosovo",
      intro:
        "Patients book eye exams online in Albanian, Italian or English. Doctors see their day at a glance, and every prescription and exam lives in one patient file instead of paper folders.",
      facts: [
        { term: "My part", detail: "Design, front end, back end, hosting" }, // TODO confirm
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
    work: {
      title: "More work",
      intro: "Websites and web apps for businesses that needed something that just works.",
      open: "Show details",
      close: "Hide details",
      builtLabel: "What I built",
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
    services: {
      title: "What I can build for you",
      items: [
        { title: "Websites", text: "Fast, clear sites that tell people who you are and make it easy to get in touch." },
        { title: "Web apps", text: "Booking systems, dashboards and internal tools, built around how your team already works." },
        { title: "Care after launch", text: "Hosting, updates and fixes, so your site keeps running while you run your business." },
      ],
    },
    process: {
      title: "How a project goes",
      steps: [
        { title: "We talk", text: "You tell me what you need. I ask a lot of questions." },
        { title: "I plan", text: "A clear scope, a price and a timeline before any code." },
        { title: "I build", text: "You see progress every week and can try it as it grows." },
        { title: "We launch", text: "I put it live and stay around to look after it." },
      ],
    },
    about: {
      title: "Hi, I’m Erblin",
      body: [
        "I’m a full-stack developer based in Pristina. I like building things that make someone’s working day a little easier: a receptionist, a doctor, a shop owner.",
        "I work in English, Albanian and Italian, and I take projects from the first conversation to the server they run on.", // TODO confirm languages
      ],
      toolsLabel: "Tools I use every day",
      tools: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
      photoAlt: "Photo of Erblin Krasniqi",
    },
    contact: {
      title: "Tell me about your project",
      text: "A short message is enough. I reply within one working day.",
      email: "Email me",
      whatsapp: "Message on WhatsApp",
      orCall: "Or call",
    },
    footer: { made: "Designed and built by Erblin Krasniqi", top: "Back to top" },
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
    htmlTitle: "Erblin Krasniqi, uebfaqe dhe aplikacione web",
    htmlDescription:
      "Zhvillues full-stack në Prishtinë. Dizajnoj dhe ndërtoj uebfaqe dhe aplikacione web për klinika, dyqane dhe ekipe në rritje.",
    skip: "Kalo te përmbajtja",
    nav: { work: "Punët", services: "Shërbimet", about: "Rreth meje", contact: "Kontakti", menu: "Menyja", close: "Mbyll" },
    langSwitch: { label: "English", other: "Switch to English", href: "/" },
    hero: {
      lines: ["Erblin Krasniqi", "ndërton uebfaqe dhe aplikacione", "që njerëzit i përdorin me qejf"],
      sub: [
        "Për klinika, dyqane dhe ekipe në rritje, në Kosovë e më gjerë.",
        "Full-stack: dizajn, front end, back end dhe hosting.",
      ],
      tiny: "Nëse e lexoni këtë rresht, le të flasim për projektin tuaj.",
    },
    caseStudy: {
      title: "Platformë për pacientët e një spitali italian të syve në Kosovë",
      intro:
        "Pacientët rezervojnë kontrollin e syve online, në shqip, italisht ose anglisht. Mjekët e shohin ditën e tyre me një shikim, dhe çdo recetë e kontroll ruhet në një dosje të pacientit në vend të dosjeve prej letre.",
      facts: [
        { term: "Roli im", detail: "Dizajn, front end, back end, hosting" },
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
    work: {
      title: "Punë të tjera",
      intro: "Uebfaqe dhe aplikacione për biznese që kishin nevojë për diçka që thjesht funksionon.",
      open: "Shfaq detajet",
      close: "Fshih detajet",
      builtLabel: "Çfarë ndërtova",
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
    services: {
      title: "Çfarë mund të ndërtoj për ju",
      items: [
        { title: "Uebfaqe", text: "Faqe të shpejta e të qarta që tregojnë kush jeni dhe e bëjnë të lehtë kontaktin." },
        { title: "Aplikacione web", text: "Sisteme rezervimi, panele dhe mjete të brendshme, sipas mënyrës si punon ekipi juaj." },
        { title: "Kujdes pas lansimit", text: "Hosting, përditësime dhe rregullime, që faqja të punojë ndërsa ju merreni me biznesin." },
      ],
    },
    process: {
      title: "Si shkon një projekt",
      steps: [
        { title: "Flasim", text: "Më tregoni çfarë ju duhet. Unë bëj shumë pyetje." },
        { title: "Planifikoj", text: "Qëllim i qartë, çmim dhe afat para çdo rreshti kodi." },
        { title: "Ndërtoj", text: "Çdo javë e shihni progresin dhe e provoni ndërsa rritet." },
        { title: "Lansojmë", text: "E vendos live dhe mbetem pranë për ta mirëmbajtur." },
      ],
    },
    about: {
      title: "Përshëndetje, jam Erblini",
      body: [
        "Jam zhvillues full-stack me bazë në Prishtinë. Më pëlqen të ndërtoj gjëra që ia lehtësojnë pak ditën e punës dikujt: një recepsionisti, një mjeku, një pronari dyqani.",
        "Punoj në shqip, anglisht dhe italisht, dhe i marr projektet nga biseda e parë deri te serveri ku ato punojnë.",
      ],
      toolsLabel: "Mjetet që përdor çdo ditë",
      tools: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
      photoAlt: "Foto e Erblin Krasniqit",
    },
    contact: {
      title: "Më tregoni për projektin tuaj",
      text: "Mjafton një mesazh i shkurtër. Përgjigjem brenda një dite pune.",
      email: "Më shkruani me email",
      whatsapp: "Shkruani në WhatsApp",
      orCall: "Ose telefononi",
    },
    footer: { made: "Dizajnuar dhe ndërtuar nga Erblin Krasniqi", top: "Kthehu lart" },
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
