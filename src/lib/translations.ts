export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      howitworks: "Concept",
      features: "Solution",
      audience: "Audience",
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
        title: "Orientez parfaitement vos enfants",
        subtitle: "IKIUP est le meilleur choix pour leur avenir scolaire",
        steps: [
          { title: "DÉCOUVRIR", description: "TESTS : INTÉRETS & FORCES" },
          { title: "ORIENTER", description: "GUIDANCE PERSONNALISÉE" },
          { title: "AVANCER", description: "OBJECTIFS CLAIRS" }
        ]
      },
      tracking: {
        title: "Un agenda scolaire partagé",
        subtitle: "Pour tout gérer, tout organiser au même endroit",
        items: [
          "EMPLOIS DU TEMPS",
          "NOTES & ÉVALUATIONS",
          "ABSENCES & PRÉSENCES",
          "REMARQUES PÉDAGOGIQUES",
          "ACCÈS ENSEIGNANTS, PARENTS ET ÉLÈVES"
        ]
      },
      feed: {
        title: "Fil d’actualité & réseau éducatif",
        intro: "Un espace d’échange pour faire vivre l’écosystème éducatif.",
        items: [
          "Actualités",
          "Communauté",
          "Publications",
          "Partage"
        ]
      },
      schools: {
        title: "Explorer les établissements et les parcours scolaires",
        subtitle: "Orientation intelligente, Construire son parcours",
        searchPlaceholder: "Écoles d'ingénieur à Casablanca",
        items: ["Choix 1", "Choix 2"]
      }
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
      },
      tag: "Notre Audience",
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
    },
    privacy: {
      title: "Politique de Confidentialité",
      subtitle: "Mentions Légales & Protection des Données",
      lastUpdated: "Dernière mise à jour :",
      sections: [
        {
          title: "Données Collectées",
          content: "IkiUp collecte uniquement les données nécessaires au bon fonctionnement du service : nom, prénom, adresse e-mail, données scolaires (notes, emploi du temps), et données d'utilisation anonymisées via Google Analytics."
        },
        {
          title: "Utilisation des Données",
          content: "Vos données sont utilisées exclusivement pour : fournir les services de la plateforme, personnaliser votre expérience, améliorer nos fonctionnalités, et communiquer avec vous concernant votre compte."
        },
        {
          title: "Cookies",
          content: "Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques (Google Analytics) pour comprendre comment vous utilisez notre plateforme. Vous pouvez gérer vos préférences via la bannière de consentement."
        },
        {
          title: "Services Tiers",
          content: "Nous utilisons Google Analytics pour analyser le trafic. Ces données sont anonymisées et ne permettent pas de vous identifier personnellement. Aucune donnée n'est vendue à des tiers."
        },
        {
          title: "Vos Droits (RGPD)",
          content: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition concernant vos données personnelles. Vous pouvez exercer ces droits en nous contactant."
        },
        {
          title: "Contact",
          content: "Pour toute question relative à vos données personnelles, contactez-nous à : contact@ikiup.com"
        }
      ]
    },
    notFound: {
      title: "Page introuvable",
      description: "La page que vous cherchez n'existe pas ou a été déplacée.",
      backHome: "Retour à l'accueil"
    },
    cookie: {
      message: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.",
      accept: "Accepter",
      decline: "Refuser",
      learnMore: "En savoir plus"
    }
  },
  en: {
    nav: {
      about: "About",
      howitworks: "Concept",
      features: "Solution",
      audience: "Audience",
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
        title: "Perfectly guide your children",
        subtitle: "IKIUP is the best choice for their academic future",
        steps: [
          { title: "DISCOVER", description: "TESTS: INTERESTS & STRENGTHS" },
          { title: "GUIDE", description: "PERSONALIZED GUIDANCE" },
          { title: "ADVANCE", description: "CLEAR OBJECTIVES" }
        ]
      },
      tracking: {
        title: "A shared school agenda",
        subtitle: "To manage everything, organize everything in one place",
        items: [
          "SCHEDULES",
          "GRADES & ASSESSMENTS",
          "ABSENCES & ATTENDANCE",
          "PEDAGOGICAL REMARKS",
          "TEACHER, PARENT AND STUDENT ACCESS"
        ]
      },
      feed: {
        title: "News Feed & Educational Network",
        intro: "A space for exchange to bring the educational ecosystem to life.",
        items: [
          "News",
          "Community",
          "Posts",
          "Sharing"
        ]
      },
      schools: {
        title: "Explore institutions and academic paths",
        subtitle: "Smart guidance, Build your path",
        searchPlaceholder: "Engineering schools in Casablanca",
        items: ["Choice 1", "Choice 2"]

      }
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
      },
      tag: "Our Audience",
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
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Legal Notices & Data Protection",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "Data Collected",
          content: "IkiUp only collects data necessary for the proper functioning of the service: name, email address, academic data (grades, schedules), and anonymized usage data via Google Analytics."
        },
        {
          title: "Use of Data",
          content: "Your data is used exclusively to: provide platform services, personalize your experience, improve our features, and communicate with you about your account."
        },
        {
          title: "Cookies",
          content: "We use essential cookies for website functionality and analytical cookies (Google Analytics) to understand how you use our platform. You can manage your preferences via the consent banner."
        },
        {
          title: "Third-Party Services",
          content: "We use Google Analytics for traffic analysis. This data is anonymized and cannot personally identify you. No data is sold to third parties."
        },
        {
          title: "Your Rights (GDPR)",
          content: "Under GDPR, you have the right to access, rectify, delete, port, and object to the processing of your personal data. You can exercise these rights by contacting us."
        },
        {
          title: "Contact",
          content: "For any questions about your personal data, contact us at: contact@ikiup.com"
        }
      ]
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      backHome: "Back to Home"
    },
    cookie: {
      message: "We use cookies to improve your experience and analyze site traffic.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more"
    }
  }
};