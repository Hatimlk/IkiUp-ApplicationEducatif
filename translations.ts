export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      howitworks: "Concept",
      features: "Solution",
      showcase: "Aperçu",
      pricing: "Tarifs",
      faq: "FAQ",
      download: "Télécharger"
    },
    hero: {
      badge: "Orientation, suivi scolaire et communication réunis sur une seule plateforme.",
      title: "Avancer ensemble vers un parcours scolaire",
      titleAccent: "plus serein",
      description: "IkiUp est une application d’orientation et d’accompagnement qui connecte les élèves, parents et écoles dans un même espace, pour mieux comprendre, mieux suivre et mieux accompagner les parcours scolaires.",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    features: {
      title: "LA SOLUTION IKIUP",
      intro: "IkiUp réunit en une seule plateforme les outils essentiels pour accompagner les parcours scolaires.",
      orientation: {
        title: "Mieux se comprendre pour mieux s’orienter",
        text: "Grâce à des tests de personnalité et d’orientation, IkiUp aide les élèves à identifier leurs centres d’intérêt, leurs forces et leurs modes de fonctionnement. L’application propose des pistes de métiers et de parcours scolaires adaptées, pour accompagner la réflexion et structurer les choix dans le temps."
      },
      tracking: {
        title: "Un agenda scolaire partagé",
        items: [
          "Emplois du temps",
          "Notes & évaluations",
          "Absences & présences",
          "Remarques pédagogiques",
          "Accès enseignants, parents et élèves"
        ]
      },
      feed: {
        title: "Fil d’actualité & réseau éducatif",
        intro: "Un espace d’échange pour faire vivre l’écosystème éducatif.",
        items: [
          "Actualités des écoles",
          "Informations sur les formations",
          "Publications & annonces",
          "Découverte d’établissements"
        ]
      },
      schools: {
        title: "Explorer les établissements et les parcours scolaires",
        text: "IkiUp permet de rechercher des écoles et des établissements selon différents critères (ville, type de formation, niveau). Les élèves peuvent explorer les parcours disponibles et les intégrer dans leur réflexion d’orientation.",
        searchPlaceholder: "Rechercher une école..."
      }
    },
    pricing: {
      intro: "IkiUp propose différentes formules pour les familles et les établissements, afin de rendre l'accompagnement éducatif accessible et évolutif. Les détails des offres sont disponibles directement dans l'application.",
      contactTitle: "Envie d'en savoir plus ?",
      contactText: "Vous êtes parent, élève ou établissement et souhaitez découvrir IkiUp ? Contactez-nous pour échanger.",
      monthly: "Mensuel",
      yearly: "Annuel",
      perMonth: "mois",
      perYear: "an",
      choosePlan: "Choisir ce plan",
      mostPopular: "Le plus populaire",
      plans: [
        {
          name: "IkiUp Famille",
          description: "L'essentiel pour un foyer serein.",
          accounts: "1 Parent + 2 Enfants",
          features: [
            "Tests de personnalité illimités",
            "Tableau de bord partagé",
            "Suivi des notes & devoirs",
            "Orientation assistée par IA",
            "Support standard"
          ]
        },
        {
          name: "IkiUp Famille XL",
          description: "Le pack complet pour toute la tribu.",
          accounts: "2 Parents + 4 Enfants",
          features: [
            "Toutes les fonctions Famille",
            "Profils IA personnalisés",
            "Analytics avancés par élève",
            "Agenda de liaison prioritaire",
            "Conseils d'experts mensuels",
            "Support VIP 24/7"
          ]
        }
      ]
    },
    about: {
      tag: "Notre ADN",
      title: "Redéfinir l'horizon",
      titleAccent: "éducatif.",
      description: "Notre mission est d'éclairer le chemin de chaque élève.",
      story: "IkiUp est née d’un besoin réel. Comme beaucoup de parents, j’ai cherché comment mieux accompagner mon enfant dans son parcours scolaire et ses choix d’orientation. Les solutions que j’ai trouvées étaient peu accessibles, contraignantes ou proposées trop tard. C’est ainsi qu’est née l’idée d’IkiUp : une application pensée pour être simple, accessible à tout moment et à portée de main. Elle accompagne les enfants dans leur réflexion, aide les parents à les soutenir avec plus de justesse, et permet aux écoles de mieux comprendre les besoins des élèves afin d’adapter leur accompagnement pédagogique. IkiUp a été conçue pour structurer le parcours scolaire, offrir des repères clairs et avancer pas à pas, ensemble, dans un cadre serein et humain.",
      vision: "Notre Vision",
      visionP1: "Nous aidons les élèves à mieux se connaître grâce à des tests de personnalité basés sur les sciences cognitives. Nous ne nous contentons pas de donner des réponses, nous traçons des chemins.",
      visionP2: "Pour les parents, IKIUP est le pont qui manquait : une vision claire, sans stress, permettant de soutenir l'autonomie plutôt que de la surveiller.",
      visionP3: "En connectant élèves, parents et écoles, nous créons un écosystème de réussite circulaire.",
      philosophyTitle: "La Philosophie IkiUp",
      philosophyDesc: "Inspiré du concept d'Ikigai, notre nom symbolise l'ascension vers sa raison d'être.",
      storyTag: "À PROPOS",
      storyTitle: "IkiUp est née d’un besoin réel.",
      commitments: "Nos Engagements Piliers",
      pillars: [
        {
          title: "Sécurité & Éthique",
          desc: "Vos données scolaires sont sacrées. Nous garantissons une confidentialité totale et une conformité RGPD stricte.",
          color: "teal"
        },
        {
          title: "Précision de l'IA",
          desc: "Nos algorithmes sont entraînés pour guider, pas pour décider. Une IA éthique au service de l'humain.",
          color: "primary"
        },
        {
          title: "Bienveillance",
          desc: "Nous luttons contre le stress scolaire en remplaçant l'incertitude par un plan d'action serein.",
          color: "rose"
        }
      ]
    },
    audience: {
      title: "Une plateforme pour",
      titleAccent: "chacun.",
      description: "IKIUP connecte intelligemment tous les acteurs de la réussite éducative.",
      students: {
        title: "Les Élèves",
        desc: "Se comprendre, s’orienter, s’organiser",
        items: ["Tests de personnalité", "Parcours personnalisés", "Aide à l'orientation"]
      },
      parents: {
        title: "Les Parents",
        desc: "Suivre, comprendre, accompagner",
        items: ["Evolution scolaire", "Agenda de liaison", "Alerte de progression"]
      },
      schools: {
        title: "Les Écoles & Enseignants",
        desc: "Communiquer, suivre, adapter l’accompagnement",
        items: ["Stats de réussite", "Gestion de classe", "Outils de communication"]
      }
    },
    howitworks: {
      tag: "Le Parcours IkiUp",
      title: "Comment ça",
      titleAccent: "marche ?",
      subtitle: "Quatre étapes clés pour transformer l'expérience scolaire en une aventure sereine et réussie.",
      steps: [
        {
          title: "Comprendre son profil",
          description: "Des tests basés sur les sciences cognitives pour identifier vos forces et talents naturels."
        },
        {
          title: "Explorer des parcours",
          description: "Connectez votre profil à plus de 500 métiers et formations certifiées adaptées à vos aspirations."
        },
        {
          title: "Suivre la scolarité",
          description: "Une vue centralisée sur les notes, devoirs et progrès pour une gestion quotidienne sans stress."
        },
        {
          title: "Avancer ensemble",
          description: "Le pont parfait entre élèves, parents et école pour un accompagnement bienveillant."
        }
      ]
    },
    showcase: {
      tag: "Interface Intuitive",
      title: "Une expérience",
      titleAccent: "fluide.",
      description: "Chaque écran a été conçu pour simplifier le quotidien scolaire et favoriser la sérénité.",
      screens: [
        { title: "Tableau de Bord", tag: "Aperçu" },
        { title: "Orientation IA", tag: "Conseil" },
        { title: "Suivi Parents", tag: "Stats" },
        { title: "Agenda Partagé", tag: "Planning" },
        { title: "Espace Social", tag: "Vie Scolaire" }
      ],
      active: "ACTIF"
    },
    cta: {
      tag: "Application & Établissements",
      title: "Ouvrez la porte à leur",
      titleAccent: "futur.",
      description: "IkiUp propose différentes formules pour les familles et les établissements. Les détails des offres sont accessibles directement dans l’application.",
      questionTitle: "Des questions ?",
      questionText: "Parent, élève ou établissement scolaire : contactez-nous pour découvrir comment IkiUp peut vous accompagner.",
      contactBtn: "Nous écrire",
      email: "contact@ikiup.com"
    }
  },
  en: {
    nav: {
      about: "About",
      howitworks: "Concept",
      features: "Solution",
      showcase: "Showcase",
      pricing: "Pricing",
      faq: "FAQ",
      download: "Download"
    },
    hero: {
      badge: "Orientation, school monitoring, and communication on one platform.",
      title: "Moving together toward a more peaceful",
      titleAccent: "educational journey",
      description: "IkiUp is an orientation and support app that connects students, parents, and schools in one space, to better understand, track, and support academic paths.",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    features: {
      title: "THE IKIUP SOLUTION",
      intro: "IkiUp brings together the essential tools for supporting academic journeys on a single platform.",
      orientation: {
        title: "Understand yourself better to navigate better",
        text: "Through personality and orientation tests, IkiUp helps students identify their interests, strengths, and ways of working. The app suggests career paths and academic tracks to structure choices over time."
      },
      tracking: {
        title: "A shared school agenda",
        items: [
          "Schedules",
          "Grades & assessments",
          "Absences & attendance",
          "Pedagogical remarks",
          "Teacher, parent, and student access"
        ]
      },
      feed: {
        title: "News Feed & Educational Network",
        intro: "A space for exchange to bring the educational ecosystem to life.",
        items: [
          "School news",
          "Training info",
          "Publications & announcements",
          "Institution discovery"
        ]
      },
      schools: {
        title: "Explore institutions and academic paths",
        text: "IkiUp allows searching for schools and institutions based on various criteria (city, training type, level). Students can explore available tracks and integrate them into their orientation thinking.",
        searchPlaceholder: "Search for a school..."
      }
    },
    pricing: {
      intro: "IkiUp offers different packages for families and schools to make educational support accessible and scalable. Plan details are available directly in the app.",
      contactTitle: "Want to know more?",
      contactText: "Are you a parent, student, or school wanting to discover IkiUp? Contact us to chat.",
      monthly: "Monthly",
      yearly: "Yearly",
      perMonth: "month",
      perYear: "year",
      choosePlan: "Choose plan",
      mostPopular: "Most Popular",
      plans: [
        {
          name: "IkiUp Family",
          description: "Essentials for a peaceful home.",
          accounts: "1 Parent + 2 Children",
          features: [
            "Unlimited personality tests",
            "Shared dashboard",
            "Grades & homework tracking",
            "AI-assisted orientation",
            "Standard support"
          ]
        },
        {
          name: "IkiUp Family XL",
          description: "The complete pack for the whole tribe.",
          accounts: "2 Parents + 4 Children",
          features: [
            "All Family features",
            "Personalized AI profiles",
            "Advanced student analytics",
            "Priority liaison agenda",
            "Monthly expert advice",
            "24/7 VIP Support"
          ]
        }
      ]
    },
    about: {
      tag: "Our DNA",
      title: "Redefining the",
      titleAccent: "educational horizon.",
      description: "Our mission is to enlighten the path of every student.",
      story: "IkiUp was born from a real need. Like many parents, I looked for how to better support my child in their school journey and orientation choices. The solutions I found were inaccessible, restrictive, or proposed too late. That's how the idea of IkiUp was born: an app designed to be simple, accessible at any time, and at hand. It supports children in their reflection, helps parents support them with greater accuracy, and allows schools to better understand the needs of students to adapt their pedagogical support. IkiUp was designed to structure the school journey, offer clear benchmarks, and move forward step by step, together, in a serene and human framework.",
      vision: "Our Vision",
      visionP1: "We help students know themselves better through personality tests based on cognitive sciences. We don't just give answers; we map out paths.",
      visionP2: "For parents, IKIUP is the missing bridge: a clear, stress-free view that supports autonomy rather than monitoring it.",
      visionP3: "By connecting students, parents, and schools, we create a circular success ecosystem.",
      philosophyTitle: "The IkiUp Philosophy",
      philosophyDesc: "Inspired by the concept of Ikigai, our name symbolizes the ascent towards one's reason for being.",
      storyTag: "ABOUT US",
      storyTitle: "IkiUp was born from a real need.",
      commitments: "Our Core Commitments",
      pillars: [
        {
          title: "Security & Ethics",
          desc: "Your educational data is sacred. We guarantee total confidentiality and strict GDPR compliance.",
          color: "teal"
        },
        {
          title: "AI Precision",
          desc: "Our algorithms are trained to guide, not to decide. Ethical AI at the service of humans.",
          color: "primary"
        },
        {
          title: "Kindness",
          desc: "We fight against school stress by replacing uncertainty with a serene action plan.",
          color: "rose"
        }
      ]
    },
    audience: {
      title: "A platform for",
      titleAccent: "everyone.",
      description: "IKIUP intelligently connects all key players in educational success.",
      students: {
        title: "Students",
        desc: "Understand yourself, find your way, get organized",
        items: ["Personality tests", "Personalized paths", "Orientation help"]
      },
      parents: {
        title: "Parents",
        desc: "Track, understand, support",
        items: ["Academic evolution", "Communication log", "Progress alerts"]
      },
      schools: {
        title: "Schools & Teachers",
        desc: "Communicate, track, adapt support",
        items: ["Success stats", "Class management", "Communication tools"]
      }
    },
    howitworks: {
      tag: "The IkiUp Journey",
      title: "How it",
      titleAccent: "works",
      subtitle: "Four key steps to transform the school experience into a serene and successful adventure.",
      steps: [
        {
          title: "Understand your profile",
          description: "Cognitive science-based tests to identify your natural strengths and talents."
        },
        {
          title: "Explore paths",
          description: "Connect your profile to over 500 professions and certified courses adapted to your aspirations."
        },
        {
          title: "Track schooling",
          description: "A centralized view of grades, homework, and progress for stress-free daily management."
        },
        {
          title: "Move forward together",
          description: "The perfect bridge between students, parents, and schools for caring support."
        }
      ]
    },
    showcase: {
      tag: "Intuitive Interface",
      title: "A fluid",
      titleAccent: "experience.",
      description: "Every screen has been designed to simplify school life and promote serenity.",
      screens: [
        { title: "Dashboard", tag: "Overview" },
        { title: "AI Orientation", tag: "Advice" },
        { title: "Parent Tracking", tag: "Stats" },
        { title: "Shared Agenda", tag: "Planning" },
        { title: "Social Space", tag: "School Life" }
      ],
      active: "ACTIVE"
    },
    cta: {
      tag: "App & Institutions",
      title: "Open the door to their",
      titleAccent: "future.",
      description: "IkiUp offers different packages for families and schools. Offer details are available directly in the app.",
      questionTitle: "Questions?",
      questionText: "Parent, student, or school: contact us to discover how IkiUp can support you.",
      contactBtn: "Write to us",
      email: "contact@ikiup.com"
    }
  }
};