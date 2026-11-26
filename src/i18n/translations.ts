import { Language, PageId, PlanId } from '../types';

export interface ActivityCopy {
  title: string;
  meta: string;
  shortDesc: string;
  fullDesc: string;
  equipment: string[];
  benefits: string[];
  level: string;
  schedule: string;
}

export interface PlanCopy {
  name: string;
  tagline: string;
  kicker?: string;
  durationLabel: Record<'monthly' | 'quarterly' | 'annual', string>;
  services: string[];
  benefits: string[];
  cta: string;
}

export interface TranslationSchema {
  dir: 'ltr' | 'rtl';
  langCode: Language;
  seo: Record<PageId, { title: string; description: string }>;
  nav: {
    home: string;
    about: string;
    activities: string;
    membership: string;
    gallery: string;
    contact: string;
    joinCta: string;
    menuOpen: string;
    menuClose: string;
  };
  home: {
    locationKicker: string;
    heroHeadline: string;
    heroSubtitle: string;
    ctaOffers: string;
    ctaJoin: string;
    metrics: { value: string; label: string }[];
    introKicker: string;
    introTitle: string;
    introText: string;
    introLink: string;
    benefitsKicker: string;
    benefitsTitle: string;
    benefitsList: { index: string; title: string; desc: string }[];
    activitiesKicker: string;
    activitiesTitle: string;
    activitiesSubtitle: string;
    activitiesViewAll: string;
    facilitiesKicker: string;
    facilitiesTitle: string;
    facilities: { name: string; spec: string; desc: string }[];
    testimonialsKicker: string;
    testimonialsTitle: string;
    testimonials: {
      quote: string;
      name: string;
      role: string;
      outcome: string;
    }[];
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCtaPrimary: string;
    finalCtaWhatsapp: string;
    nutritionBanner: {
      kicker: string;
      title: string;
      desc: string;
      cta: string;
    };
  };
  about: {
    pageKicker: string;
    pageTitle: string;
    pageIntro: string;
    pillars: { index: string; title: string; text: string }[];
    whyKicker: string;
    whyTitle: string;
    whyItems: { title: string; desc: string }[];
    coachingKicker: string;
    coachingTitle: string;
    coachingDesc: string;
    coaches: { name: string; role: string; specialty: string; languages: string }[];
    atmosphereTitle: string;
    atmosphereDesc: string;
    atmosphereCta: string;
  };
  activities: {
    pageKicker: string;
    pageTitle: string;
    pageIntro: string;
    discoverBtn: string;
    modalEquipmentLabel: string;
    modalBenefitsLabel: string;
    modalScheduleLabel: string;
    modalLevelLabel: string;
    modalBookTrial: string;
    modalWhatsappTrial: string;
    closeLabel: string;
    items: Record<
      | 'musculation'
      | 'natation'
      | 'boxe'
      | 'kickboxing'
      | 'cardio'
      | 'group'
      | 'functional'
      | 'coaching'
      | 'transformation',
      ActivityCopy
    >;
  };
  membership: {
    pageKicker: string;
    pageTitle: string;
    pageIntro: string;
    pricingNotice: string;
    billingCycles: {
      monthly: string;
      quarterly: string;
      annual: string;
    };
    includedLabel: string;
    benefitsLabel: string;
    plans: Record<PlanId, PlanCopy>;
    modalTitle: string;
    modalSubtitle: string;
    selectedPlanLabel: string;
    cycleLabel: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    goalLabel: string;
    goals: string[];
    submitRequest: string;
    sendWhatsapp: string;
    requestSuccessTitle: string;
    requestSuccessText: string;
    closeBtn: string;
    nutrition: {
      kicker: string;
      paidLabel: string;
      title: string;
      subtitle: string;
      paidNotice: string;
      durationLabel: string;
      includedLabel: string;
      cta: string;
      tracks: {
        weightLoss: {
          tabLabel: string;
          title: string;
          summary: string;
          features: string[];
        };
        muscleGain: {
          tabLabel: string;
          title: string;
          summary: string;
          features: string[];
        };
      };
    };
  };
  gallery: {
    pageKicker: string;
    pageTitle: string;
    pageIntro: string;
    filters: {
      all: string;
      club: string;
      strength: string;
      cardio: string;
      coaching: string;
    };
    photos: Record<string, { title: string; subtitle: string }>;
    prevLabel: string;
    nextLabel: string;
    closeLabel: string;
  };
  contact: {
    pageKicker: string;
    pageTitle: string;
    pageIntro: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    topicLabel: string;
    topics: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successBody: string;
    resetFormBtn: string;
    errors: {
      nameRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
      messageRequired: string;
    };
    directTitle: string;
    phoneTitle: string;
    emailTitle: string;
    addressTitle: string;
    hoursTitle: string;
    hoursRows: { day: string; time: string }[];
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappCardBtn: string;
    whatsappPrefill: string;
    mapTitle: string;
    mapDirectionsBtn: string;
    mapPlaceholderNote: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    hoursTitle: string;
    hoursSummary: string;
    rights: string;
    casablancaTag: string;
  };
  whatsappFloat: {
    label: string;
    prefill: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  fr: {
    dir: 'ltr',
    langCode: 'fr',
    seo: {
      home: {
        title: 'BEST FORME – Club de Fitness Premium à Casablanca',
        description:
          'Repoussez vos limites chez BEST FORME Casablanca : musculation, cardio training, cours collectifs, functional training et coaching personnalisé.',
      },
      about: {
        title: 'À propos de BEST FORME – Destination Fitness à Casablanca',
        description:
          'Découvrez la philosophie, les valeurs et les coachs certifiés de BEST FORME à Casablanca. Un environnement motivant pour débutants et athlètes.',
      },
      activities: {
        title: 'Nos Activités – Musculation, Cardio & Coaching | BEST FORME',
        description:
          'Musculation, cardio training, cours collectifs, functional training, personal coaching et perte de poids à Casablanca.',
      },
      membership: {
        title: 'Nos Abonnements – Formules Basic, Premium & VIP | BEST FORME',
        description:
          'Comparez nos abonnements Basic, Premium et VIP en MAD chez BEST FORME Casablanca et choisissez la formule adaptée à vos objectifs.',
      },
      gallery: {
        title: 'Galerie Photo – Espaces & Équipements | BEST FORME Casablanca',
        description:
          'Explorez en images nos plateaux de musculation, zones cardio, studio fonctionnel et séances de coaching à Casablanca.',
      },
      contact: {
        title: 'Contact & Horaires – Visiter BEST FORME Casablanca',
        description:
          'Contactez BEST FORME Casablanca par formulaire, téléphone ou WhatsApp pour planifier une visite ou réserver votre séance découverte.',
      },
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      activities: 'Activités',
      membership: 'Abonnements',
      gallery: 'Galerie',
      contact: 'Contact',
      joinCta: 'Rejoindre',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
    },
    home: {
      locationKicker: 'Casablanca, Maroc · Club de Fitness & Functional Training',
      heroHeadline: 'YOUR FITNESS. YOUR POWER. YOUR BEST FORME.',
      heroSubtitle: 'Repoussez vos limites. Transformez votre énergie. Atteignez vos objectifs.',
      ctaOffers: 'Découvrir nos offres',
      ctaJoin: 'Rejoindre BEST FORME',
      metrics: [
        { value: '2 400 m²', label: 'Espace d’entraînement à Casablanca' },
        { value: '9 Sports', label: 'Musculation, Natation, Boxe, Kick Boxing & Cardio' },
        { value: '7j / 7', label: 'Ouvert tôt le matin jusqu’au soir' },
        { value: '18 – 45+', label: 'Débutants & athlètes confirmés' },
      ],
      introKicker: 'L’esprit du club',
      introTitle: 'Un club pensé pour la progression réelle à Casablanca',
      introText:
        'BEST FORME réunit des équipements professionnels de dernière génération, un encadrement technique rigoureux et une atmosphère accueillante. Que vous débutiez votre remise en forme ou prépariez un objectif athlétique précis, chaque espace est calibré pour votre régularité.',
      introLink: 'Découvrir notre philosophie',
      benefitsKicker: 'Pourquoi nous rejoindre',
      benefitsTitle: 'Quatre piliers pour des résultats durables',
      benefitsList: [
        {
          index: '01',
          title: 'Coaching certifié & suivi humain',
          desc: 'Bilan initial, correction posturale et plans progressifs adaptés à votre morphologie et votre emploi du temps.',
        },
        {
          index: '02',
          title: 'Matériel professionnel complet',
          desc: 'Postes de musculation guidée et libre, cardio connecté, piste de sled et zones fonctionnelles entretenues chaque jour.',
        },
        {
          index: '03',
          title: 'Cours collectifs dynamiques',
          desc: 'Des formats encadrés en petits et moyens groupes pour entretenir la motivation et le dépassement de soi.',
        },
        {
          index: '04',
          title: 'Cadre propre, sécurisé et accueillant',
          desc: 'Vestiaires soignés, espace récupération et ambiance respectueuse pour les femmes et les hommes de 18 à 45 ans.',
        },
      ],
      activitiesKicker: 'Disciplines du club',
      activitiesTitle: 'Neuf disciplines complémentaires',
      activitiesSubtitle:
        'Composez votre semaine entre force pure, endurance cardiovasculaire, mobilité fonctionnelle et coaching individuel.',
      activitiesViewAll: 'Explorer toutes nos activités',
      facilitiesKicker: 'Nos infrastructures',
      facilitiesTitle: 'Des zones dédiées sans encombrement',
      facilities: [
        {
          name: 'Plateau Force & Poids Libres',
          spec: 'Racks olympiques · Haltères jusqu’à 50 kg',
          desc: 'Stations de squat, bancs réglables et machines convergentes pour travailler en sécurité.',
        },
        {
          name: 'Zone Cardio Performance',
          spec: 'Tapis courbes · Rameurs · Assault Bikes',
          desc: 'Équipements ergonomiques dédiés au travail cardiaque, à la dépense calorique et à l’endurance.',
        },
        {
          name: 'Turf & Studio Fonctionnel',
          spec: 'Piste de 25 m · Rig modulaire · Kettlebells',
          desc: 'Espace ouvert pour la préparation physique, les circuits HIIT et le travail athlétique complet.',
        },
        {
          name: 'Vestiaires & Lounge Récupération',
          spec: 'Casiers sécurisés · Douches individuelles',
          desc: 'Espace détente lumineux pour récupérer après votre séance avant de reprendre votre journée.',
        },
      ],
      testimonialsKicker: 'Paroles de membres',
      testimonialsTitle: 'Ils s’entraînent chaque semaine chez BEST FORME',
      testimonials: [
        {
          quote:
            'J’ai commencé sans jamais avoir touché une barre olympique. Après 4 mois avec un coach du club, j’ai retrouvé du souffle, corrigé mon mal de dos et gagné en régularité.',
          name: 'Salma Bennani',
          role: 'Architecte · Membre Premium, Casablanca',
          outcome: '3 séances / semaine depuis 8 mois',
        },
        {
          quote:
            'Le plateau functional training et la qualité des équipements permettent d’enchaîner mes circuits matinaux avant le bureau sans attente aux machines.',
          name: 'Youssef El Mansouri',
          role: 'Directeur financier · Membre VIP, Casablanca',
          outcome: '-9 kg en 5 mois de préparation',
        },
        {
          quote:
            'L’accueil est chaleureux et l’ambiance reste concentrée sur l’effort. Les cours collectifs du soir donnent une vraie énergie après le travail.',
          name: 'Karim Tazi',
          role: 'Ingénieur · Membre Basic, Casablanca',
          outcome: '+22 kg sur le développé & soulevé',
        },
      ],
      finalCtaTitle: 'BEST FORME – BUILD YOUR BEST SELF.',
      finalCtaSubtitle:
        'Réservez une visite du club à Casablanca ou choisissez directement votre formule d’abonnement.',
      finalCtaPrimary: 'Voir les abonnements',
      finalCtaWhatsapp: 'Écrire sur WhatsApp',
      nutritionBanner: {
        kicker: 'Accompagnement payant · Sur mesure',
        title: 'Programme Nutrition : Perte de poids ou Prise de masse',
        desc: 'Complétez vos entraînements par un suivi nutritionnel payant calibré selon votre métabolisme (déficit maîtrisé ou surplus musculaire).',
        cta: 'Découvrir le programme nutrition',
      },
    },
    about: {
      pageKicker: 'À propos · Casablanca',
      pageTitle: 'Votre destination fitness de référence à Casablanca',
      pageIntro:
        'BEST FORME est né d’une exigence simple : offrir aux femmes et aux hommes de Casablanca un club à la hauteur des standards internationaux, où la qualité du coaching compte autant que l’esthétique des lieux.',
      pillars: [
        {
          index: '01',
          title: 'Notre Philosophie',
          text: 'Le fitness durable repose sur la constance, le mouvement juste et le plaisir de progresser. Nous refusons les salles surpeuplées sans suivi : chaque adhérent bénéficie d’un environnement structuré qui respecte son rythme.',
        },
        {
          index: '02',
          title: 'Notre Mission',
          text: 'Accompagner chaque membre — du grand débutant à l’athlète confirmé — dans la transformation de son énergie physique et mentale grâce à un encadrement technique accessible et rigoureux.',
        },
        {
          index: '03',
          title: 'Nos Valeurs',
          text: 'Exigence technique, respect mutuel, accueil inclusif, propreté irréprochable et transparence. Chaque détail du club reflète notre engagement envers votre progression.',
        },
      ],
      whyKicker: 'La différence BEST FORME',
      whyTitle: 'Pourquoi choisir notre club',
      whyItems: [
        {
          title: 'Encadrement dès le premier jour',
          desc: 'Chaque nouveau membre reçoit une orientation sur les machines, les charges et les bonnes postures pour démarrer en confiance.',
        },
        {
          title: 'Équipements entretenus quotidiennement',
          desc: 'Maintenance préventive continue, barres calibrées et hygiène stricte dans toutes les zones d’entraînement et vestiaires.',
        },
        {
          title: 'Horaires étendus adaptés à Casablanca',
          desc: 'Ouverture dès 06h00 pour les séances matinales et jusqu’à 23h00 en semaine pour s’adapter à votre rythme professionnel.',
        },
        {
          title: 'Communauté bienveillante 18–45 ans',
          desc: 'Un équilibre naturel entre concentration individuelle sur les plateaux et énergie collective pendant les cours encadrés.',
        },
      ],
      coachingKicker: 'Équipe d’encadrement',
      coachingTitle: 'Des coachs professionnels à votre écoute',
      coachingDesc:
        'Nos entraîneurs diplômés combinent maîtrise anatomique, pédagogie claire et suivi personnalisé en français, arabe et anglais.',
      coaches: [
        {
          name: 'Mehdi Chraibi',
          role: 'Head Coach · Préparation Physique',
          specialty: 'Force athlétique & Functional Training',
          languages: 'FR · AR · EN',
        },
        {
          name: 'Nadia Alaoui',
          role: 'Coach Certifiée · Transformation & Mobilité',
          specialty: 'Perte de poids, HIIT & Renforcement féminin',
          languages: 'FR · AR',
        },
        {
          name: 'Omar Benjelloun',
          role: 'Coach Musculation & Hypertrophie',
          specialty: 'Prise de masse, biomécanique & posture',
          languages: 'FR · AR · EN',
        },
      ],
      atmosphereTitle: 'Un environnement motivant pour tous les niveaux',
      atmosphereDesc:
        'Que vous souhaitiez perdre du poids, développer votre masse musculaire, améliorer votre cardio ou retrouver de la vitalité, vous trouverez chez BEST FORME un accueil sincère et un accompagnement concret.',
      atmosphereCta: 'Planifier une visite guidée',
    },
    activities: {
      pageKicker: 'Nos Activités',
      pageTitle: 'Neuf disciplines pour construire votre meilleure forme',
      pageIntro:
        'Chaque programme est conçu pour répondre à un objectif précis : prise de muscle, endurance, mobilité fonctionnelle ou transformation physique encadrée.',
      discoverBtn: 'Découvrir',
      modalEquipmentLabel: 'Équipements & espace',
      modalBenefitsLabel: 'Bénéfices clés',
      modalScheduleLabel: 'Créneaux & format',
      modalLevelLabel: 'Public cible',
      modalBookTrial: 'Demander une séance d’essai',
      modalWhatsappTrial: 'Réserver via WhatsApp',
      closeLabel: 'Fermer',
      items: {
        musculation: {
          title: 'Musculation',
          meta: 'Force & Hypertrophie · Plateau libre & guidé',
          shortDesc:
            'Développez votre masse musculaire, votre force et votre maintien postural sur un plateau complet de poids libres et machines convergentes.',
          fullDesc:
            'Notre plateau musculation est équipé de cages à squat olympiques, bancs plats et inclinés, haltères jusqu’à 50 kg et machines guidées à charge libre ou automatique pour isoler chaque groupe musculaire en toute sécurité.',
          equipment: [
            'Racks olympiques & barres certifiées',
            'Machines guidées ergonomiques',
            'Zone haltères complète jusqu’à 50 kg',
          ],
          benefits: [
            'Gain de force et tonicité musculaire',
            'Protection articulaire et amélioration posturale',
            'Programmes adaptés débutants et avancés',
          ],
          level: 'Débutants à athlètes confirmés',
          schedule: 'Accès libre 7j/7 · Présence coach sur plateau',
        },
        cardio: {
          title: 'Cardio Training',
          meta: 'Endurance & Souffle · Zone connectée',
          shortDesc:
            'Améliorez votre capacité cardiovasculaire et votre récupération grâce à des tapis de course, rameurs, vélos et elliptiques dernière génération.',
          fullDesc:
            'Pensée pour le travail en zone aérobie comme pour les intervalles haute intensité, notre zone cardio regroupe des tapis motorisés et courbes, des rameurs à résistance air et des vélos d’endurance.',
          equipment: [
            'Tapis de course & runners courbes',
            'Rameurs ergomètres & SkiErgs',
            'Vélos Assault & elliptiques connectés',
          ],
          benefits: [
            'Renforcement du système cardiovasculaire',
            'Optimisation de la dépense énergétique',
            'Suivi précis de la fréquence et du rythme',
          ],
          level: 'Tous niveaux',
          schedule: 'Accès libre continu aux heures d’ouverture',
        },
        group: {
          title: 'Fitness & Cours Collectifs',
          meta: 'Énergie de groupe · Encadrement coach',
          shortDesc:
            'Entraînez-vous dans une dynamique collective motivante : renforcement full-body, circuit training, mobilité, abdos-fessiers et cardio boxing.',
          fullDesc:
            'Nos studios accueillent des cours collectifs rythmés et encadrés par nos coachs certifiés. Chaque séance adapte les options d’intensité pour permettre à chacun de se dépasser en toute sécurité.',
          equipment: [
            'Studio climatisé avec acoustique dédiée',
            'Haltères légers, steps, élastiques et tapis',
            'Sacs et accessoires cardio-fitness',
          ],
          benefits: [
            'Motivation portée par l’énergie du groupe',
            'Correction technique permanente du coach',
            'Variété hebdomadaire anti-routine',
          ],
          level: 'Ouvert à tous · Options adaptées',
          schedule: 'Planning quotidien matin, midi et soir',
        },
        functional: {
          title: 'Functional Training',
          meta: 'Agilité & Puissance · Piste Turf 25 m',
          shortDesc:
            'Travaillez la coordination, l’explosivité et la sangle abdominale à travers des mouvements polyarticulaires sur notre turf professionnel.',
          fullDesc:
            'Le functional training chez BEST FORME combine poussée de traîneau, kettlebells, médecine-balls, anneaux de gymnastique et exercices au poids du corps pour bâtir un corps athlétique et mobile.',
          equipment: [
            'Piste turf de 25 mètres avec sleds lestés',
            'Rig modulaire de traction & suspension',
            'Kettlebells, wall balls et box plyométriques',
          ],
          benefits: [
            'Amélioration de la mobilité et de l’équilibre',
            'Force fonctionnelle utile au quotidien et au sport',
            'Dépense calorique élevée en format circuit',
          ],
          level: 'Intermédiaire & débutant encadré',
          schedule: 'Accès zone libre + créneaux WOD encadrés',
        },
        coaching: {
          title: 'Personal Coaching',
          meta: 'Sur-mesure 1-à-1 · Suivi individualisé',
          shortDesc:
            'Un accompagnement individuel à 100 % avec bilan corporel, planification personnalisée et suivi hebdomadaire par un coach dédié.',
          fullDesc:
            'Idéal pour accélérer vos résultats, corriger votre technique ou préparer une échéance sportive, le Personal Coaching vous offre des séances individuelles structurées, des conseils d’hygiène de vie et un suivi mesurable.',
          equipment: [
            'Accès prioritaire à l’ensemble des zones du club',
            'Outils de bilan de condition physique',
            'Programmation personnalisée semaine après semaine',
          ],
          benefits: [
            'Progression rapide et sécurisée',
            'Engagement et régularité garantis',
            'Plan adapté à votre emploi du temps à Casablanca',
          ],
          level: '100 % personnalisé selon votre profil',
          schedule: 'Sur rendez-vous de 06h00 à 22h30',
        },
        transformation: {
          title: 'Perte de Poids & Transformation',
          meta: 'Programme structuré · Cardio + Renforcement',
          shortDesc:
            'Brûlez les graisses tout en préservant votre tonicité musculaire grâce à des protocoles métaboliques progressifs et un suivi motivant.',
          fullDesc:
            'Ce programme combine entraînement métabolique HIIT, renforcement musculaire ciblé et repères nutritionnels pratiques pour obtenir une transformation physique visible et durable sans régimes extrêmes.',
          equipment: [
            'Cordes ondulatoires, rameurs & sled track',
            'Circuits métaboliques haute intensité',
            'Suivi mensuel de composition et mensurations',
          ],
          benefits: [
            'Réduction durable de la masse grasse',
            'Sculpture de la silhouette et gain d’énergie',
            'Accompagnement psychologique et motivation continue',
          ],
          level: 'Débutants motivés & intermédiaires',
          schedule: 'Cycles de 8 à 12 semaines · Suivi continu',
        },
        natation: {
          title: 'Natation',
          meta: 'Bassin 25 m · Endurance & Récupération',
          shortDesc:
            'Nage libre ou séances techniques encadrées dans notre bassin intérieur chauffé de 25 mètres à Casablanca.',
          fullDesc:
            'Notre espace aquatique propose des couloirs dédiés à la nage d’endurance, au perfectionnement des 4 nages et au renforcement musculaire doux sans impact articulaire.',
          equipment: [
            'Bassin intérieur 25 mètres chauffé et filtré',
            'Couloirs balisés par niveau de nage',
            'Planches, pull-buoys & palmes d’entraînement',
          ],
          benefits: [
            'Travail complet du corps sans choc articulaire',
            'Amélioration de la capacité respiratoire et du cardio',
            'Récupération musculaire optimale après la force',
          ],
          level: 'Tous niveaux · Débutants et nageurs réguliers',
          schedule: 'Accès quotidien 06h30 – 22h30 · Créneaux coachés',
        },
        boxe: {
          title: 'Boxe',
          meta: 'Boxe Anglaise · Sacs & Ring',
          shortDesc:
            'Développez vos réflexes, votre cardio et votre précision de frappe à travers le travail au sac, aux pattes d’ours et sur le ring.',
          fullDesc:
            'Encadrée par des coachs spécialisés, la boxe chez BEST FORME combine jeu de jambes, technique de poings, gainage et conditioning intensif dans un studio équipé de sacs en cuir et d’un ring.',
          equipment: [
            'Sacs lourds en cuir & poires de vitesse',
            'Ring d’entraînement & pattes d’ours',
            'Zone corde à sauter et shadow boxing',
          ],
          benefits: [
            'Dépense énergétique intense et gestion du stress',
            'Coordination œil-main, vitesse et agilité',
            'Renforcement complet des épaules et de la sangle abdominale',
          ],
          level: 'Débutants initiés à compétiteurs',
          schedule: 'Cours collectifs quotidiens + séances privées',
        },
        kickboxing: {
          title: 'Kick Boxing',
          meta: 'Pieds-Poings · Paos & Conditioning',
          shortDesc:
            'Alliez puissance des jambes, technique de boxe et explosivité lors de séances dynamiques sur paos et sacs de frappe.',
          fullDesc:
            'Notre programme de Kick Boxing associe enchaînements pieds-poings, esquives, travail sur paos thaïlandais et préparation physique pour sculpter un corps tonique et réactif.',
          equipment: [
            'Tatamis haute densité & sacs longs de frappe',
            'Paos thaïlandais & boucliers de coaching',
            'Espace ring et préparation athlétique',
          ],
          benefits: [
            'Explosivité des jambes, hanches et sangle abdominale',
            'Amélioration rapide de l’endurance et de la souplesse',
            'Confiance en soi et maîtrise technique encadrée',
          ],
          level: 'Ouvert aux débutants & pratiquants confirmés',
          schedule: 'Séances encadrées matin, soir & week-end',
        },
      },
    },
    membership: {
      pageKicker: 'Nos Abonnements',
      pageTitle: 'Des formules claires adaptées à votre rythme',
      pageIntro:
        'Choisissez le niveau d’accès et d’accompagnement qui correspond à vos objectifs chez BEST FORME Casablanca.',
      pricingNotice:
        'Note : Les tarifs officiels en MAD sont affichés ci-dessous sous forme de repères modifiables en attente de confirmation définitive par la direction du club.',
      billingCycles: {
        monthly: 'Mensuel',
        quarterly: 'Trimestriel',
        annual: 'Annuel',
      },
      includedLabel: 'Services inclus',
      benefitsLabel: 'Avantages clés',
      plans: {
        basic: {
          name: 'BASIC',
          tagline: 'L’essentiel pour s’entraîner librement chaque jour.',
          durationLabel: {
            monthly: 'Engagement 1 mois · Renouvelable',
            quarterly: 'Formule 3 mois · Accès continu',
            annual: 'Formule 12 mois · Tarif avantageux',
          },
          services: [
            'Accès illimité au plateau musculation',
            'Accès complet à la zone cardio training',
            'Vestiaires sécurisés et douches individuelles',
            'Bilan d’orientation initial sur machines',
          ],
          benefits: [
            'Liberté horaire 7j/7',
            'Idéal pour une pratique autonome',
            'Possibilité d’évolution vers Premium à tout moment',
          ],
          cta: 'Choisir cette formule',
        },
        premium: {
          name: 'PREMIUM',
          kicker: 'Formule la plus demandée',
          tagline: 'L’expérience complète : plateaux, cours collectifs et functional turf.',
          durationLabel: {
            monthly: 'Engagement 1 mois · Tout accès',
            quarterly: 'Formule 3 mois · Suivi inclus',
            annual: 'Formule 12 mois · Meilleure valeur',
          },
          services: [
            'Tout le contenu de la formule BASIC',
            'Accès illimité aux cours collectifs',
            'Accès complet à la zone Functional Training',
            '1 bilan de progression avec coach chaque mois',
            'Gel d’abonnement possible (jusqu’à 15 jours / an)',
          ],
          benefits: [
            'Variété maximale d’entraînements',
            'Suivi technique mensuel inclus',
            'Accès prioritaire aux réservations de cours',
          ],
          cta: 'Choisir cette formule',
        },
        vip: {
          name: 'VIP',
          tagline: 'Accompagnement individuel et privilèges exclusifs.',
          durationLabel: {
            monthly: 'Engagement 1 mois · Coaching dédié',
            quarterly: 'Formule 3 mois · Transformation',
            annual: 'Formule 12 mois · Privilège intégral',
          },
          services: [
            'Tout le contenu de la formule PREMIUM',
            'Séances de Personal Coaching dédiées incluses',
            'Programme d’entraînement & repères nutritionnels sur mesure',
            'Accès invité offert (2 invitations / mois)',
            'Service serviette & casier dédié',
          ],
          benefits: [
            'Résultats accélérés avec coach attitré',
            'Confort maximal à chaque venue',
            'Suivi hebdomadaire complet de vos performances',
          ],
          cta: 'Choisir cette formule',
        },
      },
      modalTitle: 'Finaliser votre choix de formule',
      modalSubtitle:
        'Laissez vos coordonnées pour bloquer votre visite ou confirmer votre inscription à l’accueil du club.',
      selectedPlanLabel: 'Formule sélectionnée',
      cycleLabel: 'Durée choisie',
      nameLabel: 'Nom complet',
      phoneLabel: 'Téléphone / WhatsApp',
      emailLabel: 'Adresse e-mail',
      goalLabel: 'Objectif principal',
      goals: [
        'Prise de muscle & force',
        'Perte de poids & tonicité',
        'Remise en forme & cardio',
        'Coaching personnalisé',
      ],
      submitRequest: 'Envoyer ma demande d’inscription',
      sendWhatsapp: 'Confirmer directement sur WhatsApp',
      requestSuccessTitle: 'Demande enregistrée avec succès',
      requestSuccessText:
        'Notre équipe d’accueil à Casablanca vous contactera rapidement pour finaliser votre formule et planifier votre première séance.',
      closeBtn: 'Fermer',
      nutrition: {
        kicker: 'Option Coaching Nutrition · Service Payant',
        paidLabel: 'Programme payant (indépendant de l’abonnement salle)',
        title: 'Programme Nutritionnel Sur Mesure',
        subtitle:
          'Choisissez votre objectif — réduire votre masse grasse ou développer votre masse musculaire — avec un protocole payant adapté à la cuisine et au rythme de vie à Casablanca.',
        paidNotice:
          'Service payant en supplément ou accessible sans abonnement salle. Tarif officiel en MAD configurable.',
        durationLabel: 'Cycle de 8 semaines · Suivi inclus',
        includedLabel: 'Ce que comprend le programme',
        cta: 'Choisir ce programme payant',
        tracks: {
          weightLoss: {
            tabLabel: 'Réduction de poids',
            title: 'Programme Nutrition — Réduction de poids & Sèche',
            summary:
              'Un déficit calorique progressif et rassasiant pour perdre de la masse grasse tout en protégeant votre tonus musculaire et votre énergie.',
            features: [
              'Bilan initial métabolique & calcul précis des calories et macros',
              'Plan repas hebdomadaire équilibré (adapté aux produits locaux marocains)',
              'Liste de courses pratique & alternatives anti-fringale',
              'Ajustement et bilan de suivi toutes les 2 semaines avec votre coach',
            ],
          },
          muscleGain: {
            tabLabel: 'Masse musculaire',
            title: 'Programme Nutrition — Prise de masse musculaire',
            summary:
              'Un surplus calorique contrôlé et riche en protéines pour soutenir l’hypertrophie, la récupération et la prise de force propre.',
            features: [
              'Calcul du surplus calorique optimal sans prise de gras excessive',
              'Répartition des protéines et glucides autour de vos séances',
              'Idées de repas & collations riches en nutriments',
              'Suivi bimensuel des mensurations et réajustement des apports',
            ],
          },
        },
      },
    },
    gallery: {
      pageKicker: 'Galerie',
      pageTitle: 'Découvrez les espaces BEST FORME en images',
      pageIntro:
        'Parcourez notre plateau musculation, la zone cardio, la piste fonctionnelle et les séances de coaching en action.',
      filters: {
        all: 'Tout voir',
        club: 'Espaces Club',
        strength: 'Musculation & Turf',
        cardio: 'Cardio & HIIT',
        coaching: 'Cours & Coaching',
      },
      photos: {
        g1: {
          title: 'Plateau Principal & Architecture',
          subtitle: 'Cages olympiques, lumière architecturale et baies vitrées sur Casablanca',
        },
        g2: {
          title: 'Lounge Récupération & Espace Force',
          subtitle: 'Vestiaires en bois sur mesure et espace détente membres',
        },
        g3: {
          title: 'Zone Force & Poids Libres',
          subtitle: 'Squat racks professionnels et disques calibrés',
        },
        g4: {
          title: 'Zone Functional Training',
          subtitle: 'Piste turf 25 m, traîneaux lestés et rig de suspension',
        },
        g5: {
          title: 'Espace Cardio Performance',
          subtitle: 'Tapis courbes, rameurs ergomètres et tapis connectés',
        },
        g6: {
          title: 'Conditioning & Transformation HIIT',
          subtitle: 'Séances métaboliques haute intensité avec cordes ondulatoires',
        },
        g7: {
          title: 'Cours Collectifs Encadrés',
          subtitle: 'Énergie de groupe avec haltères et kettlebells',
        },
        g8: {
          title: 'Personal Coaching 1-à-1',
          subtitle: 'Correction technique et suivi individuel certifié',
        },
        g9: {
          title: 'Bassin Natation 25 m',
          subtitle: 'Couloirs de nage intérieure chauffée et récupération',
        },
        g10: {
          title: 'Studio Boxe Anglaise',
          subtitle: 'Sacs lourds en cuir, ring d’entraînement et cardio frappe',
        },
        g11: {
          title: 'Zone Kick Boxing',
          subtitle: 'Travail pieds-poings sur paos avec coach dédié',
        },
      },
      prevLabel: 'Photo précédente',
      nextLabel: 'Photo suivante',
      closeLabel: 'Fermer la galerie',
    },
    contact: {
      pageKicker: 'Contact & Accès',
      pageTitle: 'Parlons de vos objectifs à Casablanca',
      pageIntro:
        'Une question sur nos abonnements, nos horaires ou envie de visiter le club ? Écrivez-nous ou contactez-nous directement sur WhatsApp.',
      formTitle: 'Envoyer un message',
      formSubtitle: 'Réponse rapide par notre équipe d’accueil sous 24 heures ouvrées.',
      fullNameLabel: 'Nom complet',
      fullNamePlaceholder: 'Ex : Sara Benali',
      emailLabel: 'Adresse e-mail',
      emailPlaceholder: 'vous@exemple.com',
      phoneLabel: 'Numéro de téléphone',
      phonePlaceholder: '+212 6 00 00 00 00',
      topicLabel: 'Objet de la demande',
      topics: [
        'Visite du club & séance découverte',
        'Renseignement abonnements (Basic / Premium / VIP)',
        'Programme Nutrition Payant (Perte de poids / Prise de masse)',
        'Personal Coaching',
        'Autre question',
      ],
      messageLabel: 'Votre message',
      messagePlaceholder: 'Précisez vos disponibilités ou vos objectifs...',
      submitBtn: 'Envoyer le message',
      submittingBtn: 'Envoi en cours...',
      successTitle: 'Message envoyé à BEST FORME',
      successBody:
        'Merci pour votre message. Un conseiller BEST FORME Casablanca vous répondra dans les plus brefs délais.',
      resetFormBtn: 'Envoyer un autre message',
      errors: {
        nameRequired: 'Veuillez saisir votre nom complet (minimum 2 caractères).',
        emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
        phoneInvalid: 'Veuillez saisir un numéro de téléphone valide.',
        messageRequired: 'Veuillez écrire un court message (minimum 10 caractères).',
      },
      directTitle: 'Coordonnées du club',
      phoneTitle: 'Téléphone',
      emailTitle: 'E-mail',
      addressTitle: 'Adresse à Casablanca',
      hoursTitle: 'Horaires d’ouverture',
      hoursRows: [
        { day: 'Lundi – Vendredi', time: '06:00 – 23:00' },
        { day: 'Samedi', time: '07:00 – 21:00' },
        { day: 'Dimanche', time: '08:00 – 18:00' },
      ],
      whatsappCardTitle: 'Réponse immédiate sur WhatsApp',
      whatsappCardDesc:
        'Besoin d’un tarif, d’un horaire de cours ou de planifier votre visite aujourd’hui ? Discutez directement avec notre équipe.',
      whatsappCardBtn: 'Discuter sur WhatsApp',
      whatsappPrefill:
        'Bonjour BEST FORME Casablanca, je souhaite obtenir des informations et planifier une visite du club.',
      mapTitle: 'Localisation à Casablanca',
      mapDirectionsBtn: 'Ouvrir dans Google Maps',
      mapPlaceholderNote: 'Localisation indicative modifiable dans la configuration du club.',
    },
    footer: {
      tagline: 'BEST FORME – BUILD YOUR BEST SELF.',
      navTitle: 'Navigation',
      contactTitle: 'Club Casablanca',
      hoursTitle: 'Horaires',
      hoursSummary: 'Lun–Ven : 06:00–23:00 · Sam : 07:00–21:00 · Dim : 08:00–18:00',
      rights: 'Tous droits réservés.',
      casablancaTag: 'Casablanca, Maroc',
    },
    whatsappFloat: {
      label: 'Contacter BEST FORME sur WhatsApp',
      prefill: 'Bonjour BEST FORME Casablanca, je souhaite planifier une visite du club.',
    },
  },

  ar: {
    dir: 'rtl',
    langCode: 'ar',
    seo: {
      home: {
        title: 'BEST FORME – نادي لياقة بدنية متميز بالدار البيضاء',
        description:
          'تجاوز حدودك في نادي BEST FORME بالدار البيضاء: كمال الأجسام، الكارديو، التدريب الوظيفي، الحصص الجماعية والتدريب الشخصي.',
      },
      about: {
        title: 'من نحن – وجهة اللياقة البدنية في الدار البيضاء | BEST FORME',
        description:
          'اكتشف فلسفة وقيم وفريق المدربين المعتمدين في نادي BEST FORME بالدار البيضاء. بيئة محفزة للمبتدئين والمحترفين.',
      },
      activities: {
        title: 'أنشطتنا – كمال الأجسام، الكارديو والتدريب الشخصي | BEST FORME',
        description:
          'كمال الأجسام، تمارين الكارديو، الحصص الجماعية، التدريب الوظيفي، التدريب الشخصي وبرامج إنقاص الوزن بالدار البيضاء.',
      },
      membership: {
        title: 'الاشتراكات – باقات Basic و Premium و VIP | BEST FORME',
        description:
          'قارن باقات الاشتراك Basic و Premium و VIP بالدرهم المغربي في نادي BEST FORME بالدار البيضاء واختر العرض المناسب لأهدافك.',
      },
      gallery: {
        title: 'معرض الصور – مرافق وتجهيزات النادي | BEST FORME الدار البيضاء',
        description:
          'تصفح صور قاعات كمال الأجسام، منطقة الكارديو، المسار الوظيفي وجلسات التدريب في BEST FORME بالدار البيضاء.',
      },
      contact: {
        title: 'اتصل بنا – العنوان وأوقات العمل | BEST FORME الدار البيضاء',
        description:
          'تواصل مع نادي BEST FORME بالدار البيضاء عبر الاستمارة أو الهاتف أو واتساب لحجز زيارة أو حصة تجريبية.',
      },
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      activities: 'الأنشطة',
      membership: 'الاشتراكات',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
      joinCta: 'انضم إلينا',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
    },
    home: {
      locationKicker: 'الدار البيضاء، المغرب · نادي لياقة بدنية وتدريب وظيفي',
      heroHeadline: 'YOUR FITNESS. YOUR POWER. YOUR BEST FORME.',
      heroSubtitle: 'تجاوز حدودك. حوّل طاقتك. حقّق أهدافك.',
      ctaOffers: 'اكتشف عروضنا',
      ctaJoin: 'انضم إلى BEST FORME',
      metrics: [
        { value: '2,400 م²', label: 'مساحة تدريب مجهزة بالدار البيضاء' },
        { value: '9 رياضات', label: 'كمال الأجسام، السباحة، الملاكمة والكيك بوكسينغ' },
        { value: '7 / 7 أيام', label: 'مفتوح من الصباح الباكر حتى المساء' },
        { value: '18 – 45+', label: 'للمبتدئين والرياضيين المحترفين' },
      ],
      introKicker: 'رؤية النادي',
      introTitle: 'نادٍ مصمم للتطور الفعلي في قلب الدار البيضاء',
      introText:
        'يجمع نادي BEST FORME بين أحدث المعدات الاحترافية، التأطير التقني الدقيق، والأجواء الترحيبية المحفزة. سواء كنت في بداية رحلتك الرياضية أو تسعى لرفع مستواك البدني، فإن كل مساحة لدينا مهيأة لضمان استمراريتك.',
      introLink: 'اكتشف فلسفتنا',
      benefitsKicker: 'لماذا BEST FORME',
      benefitsTitle: 'أربعة ركائز لنتائج مستدامة',
      benefitsList: [
        {
          index: '01',
          title: 'تدريب معتمد ومتابعة إنسانية',
          desc: 'تقييم أولي شامل، تصحيح الوضعية، وبرامج تدريبية متدرجة تناسب جسمك وجدولك اليومي.',
        },
        {
          index: '02',
          title: 'تجهيزات احترافية متكاملة',
          desc: 'أجهزة كمال أجسام حرة وموجهة، منطقة كارديو حديثة، ومسار تدريب وظيفي يخضع للصيانة اليومية.',
        },
        {
          index: '03',
          title: 'حصص جماعية مفعمة بالطاقة',
          desc: 'حصص مؤطرة في مجموعات متناسقة للحفاظ على الحماس وتجاوز الحدود الفردية.',
        },
        {
          index: '04',
          title: 'فضاء نظيف وآمن ومرحّب',
          desc: 'مرافق عصرية، غرف ملابس مجهزة، وبيئة محترمة ومناسبة للنساء والرجال من 18 إلى 45 سنة.',
        },
      ],
      activitiesKicker: 'التخصصات الرياضية',
      activitiesTitle: 'تسعة برامج تدريبية متكاملة',
      activitiesSubtitle:
        'وازن برنامجك الأسبوعي بين بناء القوة، التحمل القلبي، المرونة الوظيفية والتدريب الفردي.',
      activitiesViewAll: 'استكشف جميع الأنشطة',
      facilitiesKicker: 'المرافق والتجهيزات',
      facilitiesTitle: 'مناطق متخصصة دون ازدحام',
      facilities: [
        {
          name: 'قاعة القوة والأوزان الحرة',
          spec: 'أقفاص أولمبية · أوزان حتى 50 كغ',
          desc: 'محطات سكوات، مقاعد قابلة للتعديل وآلات حديثة للتمرين بأمان ودقة.',
        },
        {
          name: 'منطقة الكارديو والأداء',
          spec: 'أجهزة جري منحنية · تجديف · دراجات هوائية',
          desc: 'معدات متطورة لتقوية القلب، حرق السعرات الحرارية ورفع قدرة التحمل.',
        },
        {
          name: 'مسار التدريب الوظيفي',
          spec: 'مسار عشبي 25 م · هياكل معلقة · كيتل بيل',
          desc: 'فضاء مفتوح للإعداد البدني، تمارين HIIT وتطوير القوة الوظيفية.',
        },
        {
          name: 'غرف الملابس ومنطقة الاسترخاء',
          spec: 'خزائن آمنة · استحمام فردي',
          desc: 'مساحة مريحة لاستعادة نشاطك بعد التمرين قبل متابعة يومك.',
        },
      ],
      testimonialsKicker: 'تجارب أعضائنا',
      testimonialsTitle: 'يتدربون أسبوعياً في BEST FORME',
      testimonials: [
        {
          quote:
            'بدأت دون أي خبرة مسبقة في رفع الأثقال. بعد 4 أشهر مع مدرب النادي استعدت لياقتي، تخلصت من آلام الظهر وأصبحت أكثر انتظاماً.',
          name: 'سلمى بناني',
          role: 'مهندسة معمارية · عضوة Premium، الدار البيضاء',
          outcome: '3 حصص أسبوعياً منذ 8 أشهر',
        },
        {
          quote:
            'مساحة التدريب الوظيفي وجودة الأجهزة تتيح لي إنجاز تماريني الصباحية قبل العمل دون انتظار.',
          name: 'يوسف المنصوري',
          role: 'مدير مالي · عضو VIP، الدار البيضاء',
          outcome: '-9 كغ خلال 5 أشهر من التدريب',
        },
        {
          quote:
            'الاستقبال راقٍ والجو العام يركز على الجدية والانضباط. الحصص الجماعية المسائية تمنح طاقة رائعة بعد يوم العمل.',
          name: 'كريم التازي',
          role: 'مهندس · عضو Basic، الدار البيضاء',
          outcome: 'تطور ملحوظ في القوة والتحمل',
        },
      ],
      finalCtaTitle: 'BEST FORME – BUILD YOUR BEST SELF.',
      finalCtaSubtitle: 'احجز زيارة للنادي في الدار البيضاء أو اختر باقة اشتراكك مباشرة.',
      finalCtaPrimary: 'عرض الاشتراكات',
      finalCtaWhatsapp: 'تواصل عبر واتساب',
      nutritionBanner: {
        kicker: 'مواكبة مدفوعة · خطة مخصصة',
        title: 'البرنامج الغذائي: إنقاص الوزن أو زيادة الكتلة العضلية',
        desc: 'عزّز نتائج تمارينك ببرنامج تغذية مدفوع مصمم حسب جسمك، سواء لحرق الدهون أو لبناء العضلات.',
        cta: 'اكتشف البرنامج الغذائي',
      },
    },
    about: {
      pageKicker: 'من نحن · الدار البيضاء',
      pageTitle: 'وجهتك المفضلة للياقة البدنية في الدار البيضاء',
      pageIntro:
        'تأسس نادي BEST FORME برؤية واضحة: توفير نادٍ رياضي في الدار البيضاء يرقى للمعايير العالمية للرجال والنساء، حيث يلتقي التأطير الاحترافي مع جودة الفضاء.',
      pillars: [
        {
          index: '01',
          title: 'فلسفتنا',
          text: 'اللياقة الدائمة تقوم على الانتظام والحركة الصحيحة ومتعة التطور. نوفر بيئة منظمة بعيدة عن الفوضى تمنح كل عضو المساحة والتوجيه اللازمين.',
        },
        {
          index: '02',
          title: 'مهمتنا',
          text: 'مرافقة كل مشترك — من المبتدئ إلى الرياضي المتمرس — لتحويل طاقته الجسدية والذهنية عبر تدريب عملي ومنهجي.',
        },
        {
          index: '03',
          title: 'قيمنا',
          text: 'الاحترافية التقنية، الاحترام المتبادل، الترحيب بالجميع، النظافة الصارمة والوضوح التام في كل خدماتنا.',
        },
      ],
      whyKicker: 'تميز BEST FORME',
      whyTitle: 'لماذا تختار نادينا',
      whyItems: [
        {
          title: 'مرافقة منذ اليوم الأول',
          desc: 'يحصل كل عضو جديد على توجيه عملي حول الأجهزة والأوزان والوضعيات السليمة للبدء بثقة.',
        },
        {
          title: 'صيانة ونظافة يومية',
          desc: 'مراقبة مستمرة للمعدات وتعقيم يومي شامل لجميع القاعات وغرف الملابس.',
        },
        {
          title: 'مواعيد مرنة تناسب الدار البيضاء',
          desc: 'نفتح أبوابنا من السادسة صباحاً وحتى الحادية عشرة ليلاً طوال أيام الأسبوع.',
        },
        {
          title: 'مجتمع رياضي إيجابي (18–45 سنة)',
          desc: 'توازن مثالي بين التركيز الفردي أثناء التمرين والروح الجماعية في الحصص المؤطرة.',
        },
      ],
      coachingKicker: 'فريق التدريب',
      coachingTitle: 'مدربون محترفون رهن إشارتك',
      coachingDesc:
        'يجمع مدربونا المعتمدون بين الخبرة العلمية والأسلوب الواضح باللغات العربية والفرنسية والإنجليزية.',
      coaches: [
        {
          name: 'مهدي الشرايبي',
          role: 'المدرب الرئيسي · الإعداد البدني',
          specialty: 'القوة البدنية والتدريب الوظيفي',
          languages: 'AR · FR · EN',
        },
        {
          name: 'نادية العلوي',
          role: 'مدربة معتمدة · التحول الجسدي والمرونة',
          specialty: 'إنقاص الوزن، HIIT والتقوية النسائية',
          languages: 'AR · FR',
        },
        {
          name: 'عمر بنجلون',
          role: 'مدرب كمال الأجسام والتضخيم العضلي',
          specialty: 'بناء العضلات والميكانيكا الحيوية',
          languages: 'AR · FR · EN',
        },
      ],
      atmosphereTitle: 'بيئة محفزة ومرحّبة لجميع المستويات',
      atmosphereDesc:
        'سواء كان هدفك إنقاص الوزن، بناء العضلات، تحسين اللياقة القلبية أو استعادة الحيوية، ستجد في BEST FORME دعماً حقيقياً وخطوات عملية واضحة.',
      atmosphereCta: 'احجز جولة تعريفية بالنادي',
    },
    activities: {
      pageKicker: 'أنشطتنا',
      pageTitle: 'تسعة تخصصات لبناء أفضل نسخة منك',
      pageIntro:
        'كل برنامج مصمم لهدف محدد: بناء العضلات، التحمل، الرشاقة الوظيفية أو التحول البدني المؤطر.',
      discoverBtn: 'اكتشف المزيد',
      modalEquipmentLabel: 'المعدات والمساحة',
      modalBenefitsLabel: 'الفوائد الرئيسية',
      modalScheduleLabel: 'الأوقات والصيغة',
      modalLevelLabel: 'الفئة المستهدفة',
      modalBookTrial: 'طلب حصة تجريبية',
      modalWhatsappTrial: 'الحجز عبر واتساب',
      closeLabel: 'إغلاق',
      items: {
        musculation: {
          title: 'كمال الأجسام',
          meta: 'القوة وبناء العضلات · أوزان حرة وموجهة',
          shortDesc:
            'طوّر كتلتك العضلية وقوتك البدنية وتوازن قوامك عبر قاعة متكاملة من الأوزان الحرة والآلات الحديثة.',
          fullDesc:
            'قاعة كمال الأجسام لدينا مجهزة بأقفاص أولمبية، مقاعد متعددة الزوايا، دمبلز حتى 50 كغ وآلات موجهة لعزل وتقوية جميع العضلات بأمان.',
          equipment: [
            'أقفاص أولمبية وقضبان معتمدة',
            'آلات موجهة مريحة للمفاصل',
            'مجموعة دمبلز كاملة حتى 50 كغ',
          ],
          benefits: [
            'زيادة القوة والكتلة العضلية',
            'تحسين الوضعية وحماية المفاصل',
            'برامج مناسبة للمبتدئين والمتقدمين',
          ],
          level: 'من المبتدئين إلى المحترفين',
          schedule: 'ولوج حر 7/7 أيام · متابعة المدربين بالقاعة',
        },
        cardio: {
          title: 'تمارين الكارديو',
          meta: 'التحمل واللياقة القلبية · منطقة حديثة',
          shortDesc:
            'حسّن صحة القلب وقدرة التنفس عبر أجهزة الجري الحديثة، الدراجات القوية وأجهزة التجديف الاحترافية.',
          fullDesc:
            'صُممت منطقة الكارديو للتمارين متوسطة الشدة والتدريب المتقطع عالي الكثافة، وتضم أجهزة جري منحنية وتقليدية وأجهزة تجديف هوائية.',
          equipment: [
            'أجهزة جري كهربائية ومنحنية',
            'أجهزة تجديف SkiErg و Rowers',
            'دراجات هوائية متطورة',
          ],
          benefits: [
            'تقوية القلب والرئتين',
            'رفع معدل حرق السعرات الحرارية',
            'مراقبة دقيقة للنبض والأداء',
          ],
          level: 'جميع المستويات',
          schedule: 'ولوج متاح طوال ساعات العمل',
        },
        group: {
          title: 'اللياقة والحصص الجماعية',
          meta: 'طاقة جماعية · تأطير مباشر',
          shortDesc:
            'تدرّب وسط طاقة جماعية محفزة: تقوية شاملة للجسم، تمارين دائرية، مرونة وكارديو بوكسينغ.',
          fullDesc:
            'تستقبل قاعاتنا حصصاً جماعية متنوعة بإشراف مدربين معتمدين مع تعديل الشدة حسب مستوى كل مشارك.',
          equipment: [
            'استوديو مكيف بنظام صوتي احترافي',
            'أوزان خفيفة، ستيب وحبال مقاومة',
            'معدات اللياقة والحركة',
          ],
          benefits: [
            'تحفيز مستمر بفضل روح المجموعة',
            'تصحيح فوري للحركات من المدرب',
            'تنوع أسبوعي يكسر الروتين',
          ],
          level: 'متاح للجميع بمستويات متدرجة',
          schedule: 'جدول يومي صباحاً وظهراً ومساءً',
        },
        functional: {
          title: 'التدريب الوظيفي',
          meta: 'الرشاقة والقوة · مسار عشبي 25 م',
          shortDesc:
            'طوّر التوازن والانفجار العضلي وقوة الجذع عبر حركات رياضية شاملة على المسار الوظيفي.',
          fullDesc:
            'يجمع التدريب الوظيفي بين دفع الزلاجات، الكيتل بيل، الكرات الطبية، تمارين التعليق والحركة الحرة لبناء جسم متناسق وقوي.',
          equipment: [
            'مسار عشبي بطول 25 متراً مع زلاجات',
            'هيكل تدريبي متعدد الوظائف',
            'كيتل بيل وصناديق قفز وكرات طبية',
          ],
          benefits: [
            'تعزيز المرونة والتناسق الحركي',
            'قوة عملية مفيدة للحياة اليومية والرياضة',
            'حرق عالٍ للسعرات في وقت وجيز',
          ],
          level: 'متوسط ومبتدئ بتأطير',
          schedule: 'مساحة حرة + حصص WOD مؤطرة',
        },
        coaching: {
          title: 'التدريب الشخصي',
          meta: 'مرافقة فردية 100% · خطة مخصصة',
          shortDesc:
            'برنامج فردي متكامل يشمل تقييم الجسم، خطة تدريب مفصلة ومتابعة أسبوعية مع مدرب خاص.',
          fullDesc:
            'مثالي لتسريع النتائج أو تصحيح الأداء أو التحضير لهدف رياضي محدد، مع متابعة دقيقة لنمط الحياة والتقدم الأسبوعي.',
          equipment: [
            'ولوج أولوية لجميع مناطق النادي',
            'أدوات قياس وتقييم اللياقة',
            'برمجة أسبوعية متجددة',
          ],
          benefits: [
            'تقدم سريع وآمن',
            'التزام وانضباط مضمونان',
            'مواعيد مرنة حسب جدولك بالدار البيضاء',
          ],
          level: 'مخصص بالكامل حسب مستواك',
          schedule: 'بموعد مسبق من 06:00 إلى 22:30',
        },
        transformation: {
          title: 'إنقاص الوزن وتشكيل الجسم',
          meta: 'برنامج متكامل · كارديو + تقوية',
          shortDesc:
            'تخلص من الدهون مع الحفاظ على شد الجسم وقوة العضلات عبر بروتوكولات حرق مدروسة ومتابعة مستمرة.',
          fullDesc:
            'يجمع هذا البرنامج بين التمارين الاستقلابية عالية الكثافة وتقوية العضلات وإرشادات التغذية العملية لتحقيق تحول حقيقي ومستدام.',
          equipment: [
            'حبال التدريب الثقيلة، أجهزة التجديف والمسار',
            'دوائر تدريبية استقلابية',
            'متابعة شهرية للقياسات والتقدم',
          ],
          benefits: [
            'خفض مستدام لنسبة الدهون',
            'نحت القوام وزيادة النشاط اليومي',
            'مواكبة وتحفيز مستمران',
          ],
          level: 'مبتدئون متحمسون ومتوسطون',
          schedule: 'دورات من 8 إلى 12 أسبوعاً',
        },
        natation: {
          title: 'السباحة',
          meta: 'مسبح 25 م · التحمل والاستشفاء',
          shortDesc:
            'سباحة حرة أو حصص تقنية مؤطرة في مسبح داخلي دافئ بطول 25 متراً في الدار البيضاء.',
          fullDesc:
            'يوفر فضاؤنا المائي مسارات مخصصة للسباحة الطويلة وإتقان الأساليب الأربعة وتقوية عضلات الجسم بالكامل دون ضغط على المفاصل.',
          equipment: [
            'مسبح داخلي مدفأ بطول 25 متراً',
            'مسارات مقسمة حسب مستوى السباحين',
            'ألواح ومعدات تدريب مائية متكاملة',
          ],
          benefits: [
            'تمرين شامل للجسم دون إجهاد المفاصل',
            'تطوير القدرة التنفسية واللياقة القلبية',
            'استشفاء عضلي مثالي بعد حصص القوة',
          ],
          level: 'جميع المستويات · مبتدئون ومحترفون',
          schedule: 'متاح يومياً 06:30 – 22:30 · حصص مؤطرة',
        },
        boxe: {
          title: 'الملاكمة',
          meta: 'الملاكمة الإنجليزية · أكياس وحلبة',
          shortDesc:
            'طوّر سرعة رد الفعل واللياقة القلبية ودقة اللكمات عبر التدريب على الأكياس الجلدية والحلبة.',
          fullDesc:
            'تجمع حصص الملاكمة في BEST FORME بين حركة القدمين وتقنيات اللكم وتقوية الجذع بإشراف مدربين متخصصين.',
          equipment: [
            'أكياس لكم جلدية احترافية وكرات سرعة',
            'حلبة تدريب وقفازات تكتيكية',
            'منطقة حبل القفز والقتال الوهمي',
          ],
          benefits: [
            'حرق عالٍ للسعرات وتفريغ التوتر',
            'تناسق حركي وسرعة بديهة فائقة',
            'تقوية الأكتاف والذراعين وعضلات الجذع',
          ],
          level: 'من المبتدئين إلى المتمرسين',
          schedule: 'حصص جماعية يومية + تدريب فردي',
        },
        kickboxing: {
          title: 'الكيك بوكسينغ',
          meta: 'لكم وركل · وسادات تايلاندية',
          shortDesc:
            'اجمع بين قوة الركلات وتقنية الملاكمة والانفجار العضلي في حصص حيوية على الوسادات والأكياس.',
          fullDesc:
            'يركز برنامج الكيك بوكسينغ على الربط السلس بين اللكمات والركلات والدفاع وتطوير المرونة والقوة البدنية الشاملة.',
          equipment: [
            'بساط قتالي عالي الكثافة وأكياس طويلة',
            'وسادات تايلاندية ومعدات حماية',
            'فضاء حلبة وإعداد بدني قتالي',
          ],
          benefits: [
            'قوة انفجارية في الساقين والوركين والجذع',
            'رفع سريع للتحمل القلبي والمرونة',
            'تعزيز الثقة بالنفس والانضباط التقني',
          ],
          level: 'مفتوح للمبتدئين والمحترفين',
          schedule: 'حصص مؤطرة صباحاً ومساءً وعطلة نهاية الأسبوع',
        },
      },
    },
    membership: {
      pageKicker: 'الاشتراكات',
      pageTitle: 'باقات واضحة تناسب إيقاعك',
      pageIntro:
        'اختر مستوى الولوج والمرافقة الأنسب لأهدافك في نادي BEST FORME بالدار البيضاء.',
      pricingNotice:
        'ملاحظة: الأسعار بالدرهم المغربي معروضة حالياً كخانات قابلة للتعديل إلى حين تأكيد التعريفة الرسمية من إدارة النادي.',
      billingCycles: {
        monthly: 'شهري',
        quarterly: 'ربع سنوي',
        annual: 'سنوي',
      },
      includedLabel: 'الخدمات المشمولة',
      benefitsLabel: 'المزايا الأساسية',
      plans: {
        basic: {
          name: 'BASIC',
          tagline: 'الأساس المثالي للتدريب الحر يومياً.',
          durationLabel: {
            monthly: 'اشتراك شهر واحد · قابل للتجديد',
            quarterly: 'باقة 3 أشهر · ولوج مستمر',
            annual: 'باقة 12 شهراً · قيمة اقتصادية',
          },
          services: [
            'ولوج غير محدود لقاعة كمال الأجسام',
            'ولوج كامل لمنطقة الكارديو',
            'خزائن آمنة وغرف استحمام فردية',
            'توجيه أولي على استخدام الأجهزة',
          ],
          benefits: [
            'حرية الحضور 7/7 أيام',
            'مناسب للمتمرسين بالتدريب المستقل',
            'إمكانية الترقية إلى باقة Premium في أي وقت',
          ],
          cta: 'اختر هذه الباقة',
        },
        premium: {
          name: 'PREMIUM',
          kicker: 'الباقة الأكثر طلباً',
          tagline: 'التجربة المتكاملة: القاعات، الحصص الجماعية والتدريب الوظيفي.',
          durationLabel: {
            monthly: 'اشتراك شهر واحد · ولوج شامل',
            quarterly: 'باقة 3 أشهر · متابعة مشمولة',
            annual: 'باقة 12 شهراً · أفضل قيمة',
          },
          services: [
            'جميع مزايا باقة BASIC',
            'ولوج غير محدود للحصص الجماعية',
            'ولوج كامل لمنطقة التدريب الوظيفي',
            'تقييم شهري للتقدم مع مدرب',
            'إمكانية تجميد الاشتراك (حتى 15 يوماً/سنة)',
          ],
          benefits: [
            'تنوع أقصى في أساليب التدريب',
            'مواكبة تقنية شهرية مشمولة',
            'أولوية في حجز الحصص الجماعية',
          ],
          cta: 'اختر هذه الباقة',
        },
        vip: {
          name: 'VIP',
          tagline: 'مرافقة فردية وامتيازات حصرية.',
          durationLabel: {
            monthly: 'اشتراك شهر واحد · تدريب خاص',
            quarterly: 'باقة 3 أشهر · برنامج تحول',
            annual: 'باقة 12 شهراً · امتياز كامل',
          },
          services: [
            'جميع مزايا باقة PREMIUM',
            'حصص تدريب شخصي مشمولة',
            'خطة تدريب وتوصيات غذائية مخصصة',
            'دعوتان للضيوف مجاناً كل شهر',
            'خدمة مناشف وخزانة خاصة',
          ],
          benefits: [
            'نتائج أسرع بإشراف مدرب خاص',
            'راحة قصوى في كل زيارة',
            'متابعة أسبوعية شاملة للأداء',
          ],
          cta: 'اختر هذه الباقة',
        },
      },
      modalTitle: 'تأكيد اختيار الباقة',
      modalSubtitle: 'أدخل بياناتك لحجز زيارة أو تأكيد تسجيلك لدى استقبال النادي.',
      selectedPlanLabel: 'الباقة المختارة',
      cycleLabel: 'المدة المختارة',
      nameLabel: 'الاسم الكامل',
      phoneLabel: 'رقم الهاتف / واتساب',
      emailLabel: 'البريد الإلكتروني',
      goalLabel: 'الهدف الرئيسي',
      goals: [
        'بناء العضلات والقوة',
        'إنقاص الوزن والشد',
        'تحسين اللياقة والكارديو',
        'تدريب شخصي خاص',
      ],
      submitRequest: 'إرسال طلب الاشتراك',
      sendWhatsapp: 'تأكيد مباشر عبر واتساب',
      requestSuccessTitle: 'تم تسجيل طلبك بنجاح',
      requestSuccessText:
        'سيتواصل معك فريق الاستقبال في الدار البيضاء قريباً لإتمام التسجيل وتحديد موعد حصتك الأولى.',
      closeBtn: 'إغلاق',
      nutrition: {
        kicker: 'برنامج التغذية · خدمة مدفوعة',
        paidLabel: 'برنامج مدفوع (منفصل عن اشتراك القاعة)',
        title: 'برنامج غذائي مخصص لنتائج ملموسة',
        subtitle:
          'اختر هدفك — إنقاص الوزن أو زيادة الكتلة العضلية — مع خطة غذائية مدفوعة تتناسب مع نمط الحياة اليومي في الدار البيضاء.',
        paidNotice:
          'خدمة مدفوعة تُضاف لاشتراكك أو تُطلب بشكل مستقل. التعريفة الرسمية بالدرهم قابلة للتعديل.',
        durationLabel: 'برنامج 8 أسابيع · متابعة مشمولة',
        includedLabel: 'محتوى البرنامج',
        cta: 'اختيار هذا البرنامج المدفوع',
        tracks: {
          weightLoss: {
            tabLabel: 'إنقاص الوزن',
            title: 'البرنامج الغذائي — إنقاص الوزن والتنشيف',
            summary:
              'عجز حراري مدروس ومشبع لتقليل الدهون مع الحفاظ على الكتلة العضلية والنشاط اليومي.',
            features: [
              'تقييم أولي وحساب دقيق للسعرات والماكروز',
              'قائمة وجبات أسبوعية متوازنة ومناسبة للمطبخ المغربي',
              'قائمة تسوق عملية وبدائل صحية للوجبات الخفيفة',
              'مراجعة وتعديل القياسات كل أسبوعين مع المدرب',
            ],
          },
          muscleGain: {
            tabLabel: 'زيادة العضلات',
            title: 'البرنامج الغذائي — زيادة الكتلة العضلية',
            summary:
              'فائض حراري محسوب وغني بالبروتين لدعم الضخامة العضلية والاستشفاء والقوة.',
            features: [
              'حساب الفائض الحراري المثالي دون تراكم دهون زائدة',
              'توزيع البروتينات والكربوهيدرات قبل التمرين وبعده',
              'وجبات رئيسية وخفيفة غنية بالعناصر الغذائية',
              'متابعة دورية كل أسبوعين لضبط الكميات حسب التطور',
            ],
          },
        },
      },
    },
    gallery: {
      pageKicker: 'معرض الصور',
      pageTitle: 'اكتشف فضاءات BEST FORME بالصور',
      pageIntro:
        'جولة بصرية في قاعة كمال الأجسام، منطقة الكارديو، المسار الوظيفي وجلسات التدريب.',
      filters: {
        all: 'الكل',
        club: 'فضاءات النادي',
        strength: 'القوة والوظيفي',
        cardio: 'الكارديو و HIIT',
        coaching: 'الحصص والتدريب',
      },
      photos: {
        g1: {
          title: 'القاعة الرئيسية والتصميم المعماري',
          subtitle: 'أقفاص أولمبية وإضاءة دافئة مع واجهة زجاجية بالدار البيضاء',
        },
        g2: {
          title: 'صالة الاستراحة ومنطقة القوة',
          subtitle: 'خزائن خشبية مصممة خصيصاً ومساحة راحة للأعضاء',
        },
        g3: {
          title: 'منطقة القوة والأوزان الحرة',
          subtitle: 'محطات سكوات احترافية وأقراص معايرة',
        },
        g4: {
          title: 'منطقة التدريب الوظيفي',
          subtitle: 'مسار عشبي 25 م، زلاجات وهياكل تدريب',
        },
        g5: {
          title: 'فضاء الكارديو والأداء',
          subtitle: 'أجهزة جري منحنية وأجهزة تجديف متطورة',
        },
        g6: {
          title: 'التكييف البدني والتحول HIIT',
          subtitle: 'تمارين عالية الشدة بحبال التدريب الثقيلة',
        },
        g7: {
          title: 'الحصص الجماعية المؤطرة',
          subtitle: 'تدريب جماعي حيوي بالأوزان والكيتل بيل',
        },
        g8: {
          title: 'التدريب الشخصي الفردي',
          subtitle: 'تصحيح الأداء ومواكبة فردية معتمدة',
        },
        g9: {
          title: 'مسبح السباحة 25 م',
          subtitle: 'مسارات سباحة داخلية مدفأة ولياقة مائية',
        },
        g10: {
          title: 'قاعة الملاكمة الإنجليزية',
          subtitle: 'أكياس جلدية ثقيلة وحلبة تدريب احترافية',
        },
        g11: {
          title: 'فضاء الكيك بوكسينغ',
          subtitle: 'تدريب اللكم والركل على الوسادات مع مدرب مختص',
        },
      },
      prevLabel: 'الصورة السابقة',
      nextLabel: 'الصورة التالية',
      closeLabel: 'إغلاق المعرض',
    },
    contact: {
      pageKicker: 'اتصل بنا',
      pageTitle: 'تواصل معنا في الدار البيضاء',
      pageIntro:
        'هل لديك استفسار حول الاشتراكات أو الأوقات أو ترغب في زيارة النادي؟ راسلنا أو تواصل مباشرة عبر واتساب.',
      formTitle: 'أرسل رسالة',
      formSubtitle: 'يرد فريق الاستقبال على جميع الاستفسارات خلال 24 ساعة.',
      fullNameLabel: 'الاسم الكامل',
      fullNamePlaceholder: 'مثال: سارة بنعلي',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+212 6 00 00 00 00',
      topicLabel: 'موضوع الرسالة',
      topics: [
        'زيارة النادي وحصة تجريبية',
        'استفسار حول الاشتراكات (Basic / Premium / VIP)',
        'البرنامج الغذائي المدفوع (إنقاص الوزن / زيادة العضلات)',
        'التدريب الشخصي',
        'استفسار آخر',
      ],
      messageLabel: 'رسالتك',
      messagePlaceholder: 'اذكر أهدافك أو الأوقات المناسبة لك...',
      submitBtn: 'إرسال الرسالة',
      submittingBtn: 'جاري الإرسال...',
      successTitle: 'تم إرسال رسالتك إلى BEST FORME',
      successBody: 'شكراً لتواصلك معنا. سيتصل بك مستشار النادي في الدار البيضاء في أقرب وقت.',
      resetFormBtn: 'إرسال رسالة أخرى',
      errors: {
        nameRequired: 'يرجى إدخال الاسم الكامل (حرفان على الأقل).',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
        phoneInvalid: 'يرجى إدخال رقم هاتف صحيح.',
        messageRequired: 'يرجى كتابة رسالة قصيرة (10 أحرف على الأقل).',
      },
      directTitle: 'بيانات التواصل',
      phoneTitle: 'الهاتف',
      emailTitle: 'البريد الإلكتروني',
      addressTitle: 'العنوان بالدار البيضاء',
      hoursTitle: 'أوقات العمل',
      hoursRows: [
        { day: 'الإثنين – الجمعة', time: '06:00 – 23:00' },
        { day: 'السبت', time: '07:00 – 21:00' },
        { day: 'الأحد', time: '08:00 – 18:00' },
      ],
      whatsappCardTitle: 'رد فوري عبر واتساب',
      whatsappCardDesc:
        'تريد معرفة تفاصيل الاشتراك أو تحديد موعد لزيارة النادي اليوم؟ تواصل مع فريقنا مباشرة.',
      whatsappCardBtn: 'المحادثة عبر واتساب',
      whatsappPrefill:
        'مرحباً BEST FORME الدار البيضاء، أرغب في الحصول على معلومات وحجز زيارة للنادي.',
      mapTitle: 'الموقع على الخريطة',
      mapDirectionsBtn: 'فتح في خرائط Google',
      mapPlaceholderNote: 'موقع قابل للتعديل من إعدادات النادي.',
    },
    footer: {
      tagline: 'BEST FORME – BUILD YOUR BEST SELF.',
      navTitle: 'التنقل',
      contactTitle: 'نادي الدار البيضاء',
      hoursTitle: 'أوقات العمل',
      hoursSummary: 'الإثنين–الجمعة: 06:00–23:00 · السبت: 07:00–21:00 · الأحد: 08:00–18:00',
      rights: 'جميع الحقوق محفوظة.',
      casablancaTag: 'الدار البيضاء، المغرب',
    },
    whatsappFloat: {
      label: 'تواصل مع BEST FORME عبر واتساب',
      prefill: 'مرحباً BEST FORME الدار البيضاء، أود تحديد موعد لزيارة النادي.',
    },
  },

  en: {
    dir: 'ltr',
    langCode: 'en',
    seo: {
      home: {
        title: 'BEST FORME – Premium Fitness Club in Casablanca',
        description:
          'Push your limits at BEST FORME Casablanca: strength training, cardio lab, functional turf, group classes, and personal coaching.',
      },
      about: {
        title: 'About BEST FORME – Premier Fitness Destination in Casablanca',
        description:
          'Discover BEST FORME philosophy, values, and certified coaches in Casablanca. A motivating, welcoming club for beginners and athletes.',
      },
      activities: {
        title: 'Our Activities – Strength, Cardio & Coaching | BEST FORME',
        description:
          'Strength training, cardio training, group classes, functional training, personal coaching, and body transformation in Casablanca.',
      },
      membership: {
        title: 'Membership Plans – Basic, Premium & VIP | BEST FORME',
        description:
          'Compare Basic, Premium, and VIP membership plans in MAD at BEST FORME Casablanca and select the plan built for your goals.',
      },
      gallery: {
        title: 'Photo Gallery – Facilities & Training | BEST FORME Casablanca',
        description:
          'Explore our strength floor, cardio zone, functional turf, and personal coaching sessions in Casablanca.',
      },
      contact: {
        title: 'Contact & Hours – Visit BEST FORME Casablanca',
        description:
          'Reach BEST FORME Casablanca by form, phone, or WhatsApp to book a club tour or trial session.',
      },
    },
    nav: {
      home: 'Home',
      about: 'About',
      activities: 'Activities',
      membership: 'Membership',
      gallery: 'Gallery',
      contact: 'Contact',
      joinCta: 'Join Now',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    home: {
      locationKicker: 'Casablanca, Morocco · Fitness Club & Functional Training',
      heroHeadline: 'YOUR FITNESS. YOUR POWER. YOUR BEST FORME.',
      heroSubtitle: 'Push your limits. Transform your energy. Achieve your goals.',
      ctaOffers: 'Explore memberships',
      ctaJoin: 'Join BEST FORME',
      metrics: [
        { value: '2,400 m²', label: 'Training space in Casablanca' },
        { value: '9 Sports', label: 'Strength, Swimming, Boxing, Kickboxing & Cardio' },
        { value: '7 Days', label: 'Open early morning through late evening' },
        { value: '18 – 45+', label: 'Beginners & experienced athletes' },
      ],
      introKicker: 'Club ethos',
      introTitle: 'A club built for measurable progress in Casablanca',
      introText:
        'BEST FORME combines commercial-grade training equipment, attentive technical coaching, and a welcoming atmosphere. Whether you are starting your fitness routine or training toward an athletic target, every zone supports your consistency.',
      introLink: 'Read our philosophy',
      benefitsKicker: 'Why join us',
      benefitsTitle: 'Four foundations for lasting results',
      benefitsList: [
        {
          index: '01',
          title: 'Certified coaching & human guidance',
          desc: 'Initial assessment, posture correction, and structured plans adapted to your body and schedule.',
        },
        {
          index: '02',
          title: 'Complete commercial equipment',
          desc: 'Free weights, selectorized machines, connected cardio, and functional sled turf maintained daily.',
        },
        {
          index: '03',
          title: 'High-energy group classes',
          desc: 'Coach-led sessions in focused groups that keep motivation and technical standards high.',
        },
        {
          index: '04',
          title: 'Clean, welcoming club environment',
          desc: 'Thoughtful locker rooms, recovery lounge, and respectful culture for men and women aged 18–45.',
        },
      ],
      activitiesKicker: 'Training disciplines',
      activitiesTitle: 'Nine complementary ways to train',
      activitiesSubtitle:
        'Structure your week across pure strength, cardiovascular endurance, functional mobility, and 1-on-1 coaching.',
      activitiesViewAll: 'Explore all activities',
      facilitiesKicker: 'Featured facilities',
      facilitiesTitle: 'Purpose-built training zones',
      facilities: [
        {
          name: 'Strength & Free Weight Floor',
          spec: 'Olympic racks · Dumbbells up to 50 kg',
          desc: 'Squat stations, adjustable benches, and plate-loaded machines spaced for unhurried lifting.',
        },
        {
          name: 'Cardio Performance Zone',
          spec: 'Curved runners · Rowers · Assault Bikes',
          desc: 'Ergonomic cardio equipment calibrated for endurance blocks and high-output intervals.',
        },
        {
          name: 'Functional Turf Studio',
          spec: '25m sled track · Modular rig · Kettlebells',
          desc: 'Open conditioning floor built for athletic circuits, sled drives, and mobility drills.',
        },
        {
          name: 'Locker Rooms & Recovery Lounge',
          spec: 'Secure lockers · Private showers',
          desc: 'Calm architectural lounge to reset after training before returning to your day.',
        },
      ],
      testimonialsKicker: 'Member stories',
      testimonialsTitle: 'Weekly progress inside BEST FORME',
      testimonials: [
        {
          quote:
            'I started without ever touching an Olympic barbell. Four months in with a club coach, my stamina improved, back tension disappeared, and training became routine.',
          name: 'Salma Bennani',
          role: 'Architect · Premium Member, Casablanca',
          outcome: '3 sessions / week for 8 months',
        },
        {
          quote:
            'The functional turf and equipment layout let me finish morning circuits before the office without waiting on racks.',
          name: 'Youssef El Mansouri',
          role: 'Finance Director · VIP Member, Casablanca',
          outcome: '-9 kg over 5 months of coaching',
        },
        {
          quote:
            'Warm reception and focused training floor. Evening group classes bring real energy after work.',
          name: 'Karim Tazi',
          role: 'Engineer · Basic Member, Casablanca',
          outcome: '+22 kg across compound lifts',
        },
      ],
      finalCtaTitle: 'BEST FORME – BUILD YOUR BEST SELF.',
      finalCtaSubtitle:
        'Schedule a guided tour in Casablanca or choose the membership plan that fits your routine.',
      finalCtaPrimary: 'View memberships',
      finalCtaWhatsapp: 'Chat on WhatsApp',
      nutritionBanner: {
        kicker: 'Paid Coaching Add-On · Tailored',
        title: 'Nutrition Program: Weight Loss or Muscle Gain',
        desc: 'Pair your training with a dedicated paid nutrition plan calibrated for fat reduction or lean hypertrophy.',
        cta: 'Explore the nutrition program',
      },
    },
    about: {
      pageKicker: 'About Us · Casablanca',
      pageTitle: 'Your dedicated fitness destination in Casablanca',
      pageIntro:
        'BEST FORME was created with one clear standard: giving men and women in Casablanca an international-grade club where coaching quality matches architectural comfort.',
      pillars: [
        {
          index: '01',
          title: 'Our Philosophy',
          text: 'Lasting fitness comes from consistency, sound movement mechanics, and genuine enjoyment. We replace overcrowded gyms with structured spaces designed for steady progress.',
        },
        {
          index: '02',
          title: 'Our Mission',
          text: 'Guide every member—from complete beginner to seasoned athlete—toward stronger physical and mental energy through approachable, disciplined coaching.',
        },
        {
          index: '03',
          title: 'Our Values',
          text: 'Technical rigor, mutual respect, inclusive welcome, spotless hygiene, and straightforward transparency across every service.',
        },
      ],
      whyKicker: 'The BEST FORME difference',
      whyTitle: 'Why choose our club',
      whyItems: [
        {
          title: 'Onboarding from day one',
          desc: 'Every new member receives hands-on machine orientation, load guidance, and posture checks to start safely.',
        },
        {
          title: 'Daily equipment care',
          desc: 'Preventive maintenance, calibrated plates, and strict sanitation across training floors and locker rooms.',
        },
        {
          title: 'Extended Casablanca hours',
          desc: 'Open from 06:00 for early sessions through 23:00 on weekdays to fit demanding work schedules.',
        },
        {
          title: 'Welcoming 18–45 community',
          desc: 'Balanced atmosphere supporting focused solo lifting and motivating group sessions alike.',
        },
      ],
      coachingKicker: 'Coaching team',
      coachingTitle: 'Certified coaches focused on your progress',
      coachingDesc:
        'Our certified trainers combine sports science, clear communication, and bilingual/trilingual guidance in French, Arabic, and English.',
      coaches: [
        {
          name: 'Mehdi Chraibi',
          role: 'Head Coach · Athletic Conditioning',
          specialty: 'Strength & Functional Training',
          languages: 'EN · FR · AR',
        },
        {
          name: 'Nadia Alaoui',
          role: 'Certified Coach · Transformation & Mobility',
          specialty: 'Fat loss, HIIT & Women’s strength',
          languages: 'FR · AR',
        },
        {
          name: 'Omar Benjelloun',
          role: 'Strength & Hypertrophy Coach',
          specialty: 'Muscle building, biomechanics & posture',
          languages: 'EN · FR · AR',
        },
      ],
      atmosphereTitle: 'A motivating, welcoming space for every level',
      atmosphereDesc:
        'Whether your goal is weight loss, muscle gain, stamina, or daily vitality, BEST FORME provides practical support without intimidation.',
      atmosphereCta: 'Schedule a club tour',
    },
    activities: {
      pageKicker: 'Our Activities',
      pageTitle: 'Nine disciplines to build your best self',
      pageIntro:
        'Each training stream targets a clear outcome: lean muscle, endurance, functional power, or guided transformation.',
      discoverBtn: 'Discover',
      modalEquipmentLabel: 'Equipment & Zone',
      modalBenefitsLabel: 'Key Benefits',
      modalScheduleLabel: 'Format & Access',
      modalLevelLabel: 'Ideal For',
      modalBookTrial: 'Request a trial session',
      modalWhatsappTrial: 'Book via WhatsApp',
      closeLabel: 'Close',
      items: {
        musculation: {
          title: 'Strength Training',
          meta: 'Strength & Hypertrophy · Free & Guided',
          shortDesc:
            'Build lean muscle, strength, and postural resilience on a complete floor of free weights and precision machines.',
          fullDesc:
            'Our strength zone features Olympic squat racks, adjustable benches, dumbbells up to 50 kg, and smooth plate-loaded and selectorized machines.',
          equipment: [
            'Olympic racks & calibrated barbells',
            'Ergonomic selectorized machines',
            'Full dumbbell run up to 50 kg',
          ],
          benefits: [
            'Progressive muscular strength & tone',
            'Joint stability and stronger posture',
            'Structured options for beginners & lifters',
          ],
          level: 'Beginners to advanced lifters',
          schedule: '7-day open floor · Coach assistance available',
        },
        cardio: {
          title: 'Cardio Training',
          meta: 'Endurance & Stamina · Connected Zone',
          shortDesc:
            'Boost cardiovascular capacity and recovery using curved runners, rowers, air bikes, and smart treadmills.',
          fullDesc:
            'Built for both steady aerobic conditioning and anaerobic intervals, our cardio floor pairs ergonomic ergonomics with real-time pace metrics.',
          equipment: [
            'Motorized & curved sprint treadmills',
            'Concept rowers & SkiErgs',
            'Assault air bikes & ellipticals',
          ],
          benefits: [
            'Heart & lung endurance',
            'High caloric expenditure',
            'Real-time pace & heart-rate feedback',
          ],
          level: 'All fitness levels',
          schedule: 'Available throughout club opening hours',
        },
        group: {
          title: 'Fitness & Group Classes',
          meta: 'Group Energy · Coach-Led Studio',
          shortDesc:
            'Train in a motivating group setting across full-body conditioning, circuit training, core work, and cardio boxing.',
          fullDesc:
            'Our dedicated studio hosts dynamic coach-led classes with scalable progressions so every participant works safely at their own edge.',
          equipment: [
            'Climate-controlled acoustic studio',
            'Dumbbells, steps, bands & mats',
            'Conditioning & boxing accessories',
          ],
          benefits: [
            'Shared accountability and momentum',
            'Live form cues from certified coaches',
            'Fresh weekly programming',
          ],
          level: 'All levels · Scaled options',
          schedule: 'Daily morning, midday & evening classes',
        },
        functional: {
          title: 'Functional Training',
          meta: 'Agility & Power · 25m Sled Turf',
          shortDesc:
            'Develop coordination, core stability, and athletic power with multi-joint movements on our 25-meter turf.',
          fullDesc:
            'Functional training at BEST FORME blends sled pushes, kettlebells, medicine balls, suspension rigs, and bodyweight drills for real-world athleticism.',
          equipment: [
            '25m turf track with weighted sleds',
            'Modular pull-up & suspension rig',
            'Kettlebells, wall balls & plyo boxes',
          ],
          benefits: [
            'Greater mobility and balance',
            'Transferable athletic strength',
            'Efficient high-output conditioning',
          ],
          level: 'Intermediate & coached beginners',
          schedule: 'Open turf access + scheduled WODs',
        },
        coaching: {
          title: 'Personal Coaching',
          meta: '1-on-1 Bespoke · Dedicated Tracking',
          shortDesc:
            '100% tailored coaching with physical assessment, customized programming, and weekly accountability.',
          fullDesc:
            'Ideal for accelerating progress, refining technique, or preparing a specific milestone, Personal Coaching keeps every session purposeful and tracked.',
          equipment: [
            'Priority access across all club zones',
            'Movement & body composition checks',
            'Week-by-week adaptive programming',
          ],
          benefits: [
            'Faster, safer progression',
            'Consistent schedule accountability',
            'Built around your Casablanca routine',
          ],
          level: '100% adapted to your profile',
          schedule: 'By appointment 06:00 – 22:30',
        },
        transformation: {
          title: 'Weight Loss & Body Transformation',
          meta: 'Structured Program · HIIT + Strength',
          shortDesc:
            'Reduce body fat while preserving lean muscle through progressive metabolic circuits and steady coaching support.',
          fullDesc:
            'Combining metabolic HIIT conditioning, targeted strength sessions, and practical nutrition habits for visible, sustainable transformation without crash diets.',
          equipment: [
            'Battle ropes, rowers & sled track',
            'Metabolic circuit stations',
            'Monthly progress & measurement check-ins',
          ],
          benefits: [
            'Sustainable fat reduction',
            'Leaner silhouette and daily energy',
            'Ongoing coaching motivation',
          ],
          level: 'Motivated beginners & intermediates',
          schedule: '8 to 12-week guided cycles',
        },
        natation: {
          title: 'Swimming',
          meta: '25m Indoor Pool · Endurance & Recovery',
          shortDesc:
            'Lap swimming and coached stroke sessions inside our heated 25-meter indoor pool in Casablanca.',
          fullDesc:
            'Our aquatics wing features dedicated lap lanes for aerobic conditioning, stroke refinement, and low-impact full-body strength.',
          equipment: [
            'Heated 25-meter indoor lap pool',
            'Pace-separated swimming lanes',
            'Kickboards, pull buoys & training fins',
          ],
          benefits: [
            'Full-body conditioning with zero joint impact',
            'Stronger lung capacity and cardiovascular stamina',
            'Active recovery between heavy lifting days',
          ],
          level: 'All levels · Beginners to lap swimmers',
          schedule: 'Daily 06:30 – 22:30 · Coached slots available',
        },
        boxe: {
          title: 'Boxing',
          meta: 'English Boxing · Heavy Bags & Ring',
          shortDesc:
            'Sharpen reflexes, stamina, and punching precision through heavy bag drills, pad work, and ring conditioning.',
          fullDesc:
            'Led by specialist combat coaches, boxing at BEST FORME builds footwork, clean combinations, core endurance, and stress relief.',
          equipment: [
            'Leather heavy bags & speed bags',
            'Training ring & focus mitts',
            'Jump-rope & shadow boxing floor',
          ],
          benefits: [
            'High caloric burn and mental stress relief',
            'Hand-eye coordination, speed & footwork',
            'Shoulder, arm, and core endurance',
          ],
          level: 'Guided beginners to experienced boxers',
          schedule: 'Daily group classes + private 1-on-1 sessions',
        },
        kickboxing: {
          title: 'Kick Boxing',
          meta: 'Striking & Kicks · Thai Pads & Ring',
          shortDesc:
            'Combine kicking power, boxing combinations, and athletic explosiveness in high-energy pad and bag sessions.',
          fullDesc:
            'Our Kick Boxing classes unite crisp punches, roundhouse kicks, defensive movement, and combat conditioning for total body athleticism.',
          equipment: [
            'High-density combat mats & long heavy bags',
            'Thai pads & coaching shields',
            'Ring area & conditioning tools',
          ],
          benefits: [
            'Lower-body power, hip mobility & core strength',
            'Rapid gains in anaerobic stamina and agility',
            'Technical discipline and confidence',
          ],
          level: 'Open to beginners & advanced athletes',
          schedule: 'Morning, evening & weekend coached sessions',
        },
      },
    },
    membership: {
      pageKicker: 'Membership Plans',
      pageTitle: 'Clear plans tailored to your commitment',
      pageIntro:
        'Select the access level and coaching support that matches your goals at BEST FORME Casablanca.',
      pricingNotice:
        'Note: MAD rates below are clearly marked editable placeholders pending final tariff confirmation from club management.',
      billingCycles: {
        monthly: 'Monthly',
        quarterly: 'Quarterly',
        annual: 'Annual',
      },
      includedLabel: 'Included services',
      benefitsLabel: 'Key benefits',
      plans: {
        basic: {
          name: 'BASIC',
          tagline: 'Everything required for consistent solo training every day.',
          durationLabel: {
            monthly: '1-month access · Renewable',
            quarterly: '3-month plan · Uninterrupted access',
            annual: '12-month plan · Best base rate',
          },
          services: [
            'Unlimited access to strength & free weights',
            'Full access to cardio training zone',
            'Secure lockers & private showers',
            'Initial equipment orientation session',
          ],
          benefits: [
            '7-day flexible club access',
            'Ideal for independent lifters',
            'Upgrade to Premium anytime',
          ],
          cta: 'Choose this plan',
        },
        premium: {
          name: 'PREMIUM',
          kicker: 'Most popular plan',
          tagline: 'The complete club experience: floors, group classes & functional turf.',
          durationLabel: {
            monthly: '1-month plan · Full club access',
            quarterly: '3-month plan · Monthly check-in',
            annual: '12-month plan · Best overall value',
          },
          services: [
            'Everything included in BASIC',
            'Unlimited coach-led group classes',
            'Full access to Functional Training turf',
            '1 monthly progress check-in with a coach',
            'Membership freeze option (up to 15 days/year)',
          ],
          benefits: [
            'Maximum training variety',
            'Monthly technical guidance included',
            'Priority class booking window',
          ],
          cta: 'Choose this plan',
        },
        vip: {
          name: 'VIP',
          tagline: 'Dedicated coaching and private member privileges.',
          durationLabel: {
            monthly: '1-month plan · Dedicated coaching',
            quarterly: '3-month plan · Transformation focus',
            annual: '12-month plan · Full privilege',
          },
          services: [
            'Everything included in PREMIUM',
            'Dedicated Personal Coaching sessions included',
            'Custom training & nutrition framework',
            '2 complimentary guest passes per month',
            'Towel service & dedicated locker access',
          ],
          benefits: [
            'Accelerated results with a dedicated coach',
            'Maximum convenience on every visit',
            'Weekly performance review',
          ],
          cta: 'Choose this plan',
        },
      },
      modalTitle: 'Complete your plan selection',
      modalSubtitle:
        'Leave your details to reserve a club visit or confirm registration with our Casablanca reception team.',
      selectedPlanLabel: 'Selected plan',
      cycleLabel: 'Billing cycle',
      nameLabel: 'Full name',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email address',
      goalLabel: 'Primary goal',
      goals: [
        'Muscle gain & strength',
        'Weight loss & toning',
        'Fitness & cardio stamina',
        'Personal coaching',
      ],
      submitRequest: 'Submit membership request',
      sendWhatsapp: 'Confirm directly on WhatsApp',
      requestSuccessTitle: 'Request received',
      requestSuccessText:
        'Our Casablanca reception team will reach out shortly to finalize your plan and schedule your first visit.',
      closeBtn: 'Close',
      nutrition: {
        kicker: 'Nutrition Coaching · Paid Program',
        paidLabel: 'Paid add-on program (separate from gym access)',
        title: 'Tailored Nutrition Program',
        subtitle:
          'Choose your track—weight reduction or muscle mass gain—with a structured paid nutrition plan adapted to everyday food habits in Casablanca.',
        paidNotice:
          'Paid service available alongside a gym membership or standalone. Official MAD fee is configurable.',
        durationLabel: '8-week guided cycle · Check-ins included',
        includedLabel: 'What is included',
        cta: 'Select this paid program',
        tracks: {
          weightLoss: {
            tabLabel: 'Weight Loss',
            title: 'Nutrition Program — Weight Loss & Fat Reduction',
            summary:
              'A sustainable, satiating calorie deficit designed to reduce body fat while protecting lean muscle and daily energy.',
            features: [
              'Initial metabolic assessment & tailored calorie/macro targets',
              'Balanced weekly meal guide adapted to Moroccan food options',
              'Practical grocery list & healthy snack swaps',
              'Bi-weekly progress check-ins and macro adjustments',
            ],
          },
          muscleGain: {
            tabLabel: 'Muscle Gain',
            title: 'Nutrition Program — Lean Muscle Mass Gain',
            summary:
              'A controlled, protein-focused calorie surplus built to fuel hypertrophy, recovery, and steady strength progression.',
            features: [
              'Optimal calorie surplus calculation without excess fat gain',
              'Protein & carbohydrate timing around training sessions',
              'Nutrient-dense meal and high-protein snack templates',
              'Bi-weekly body checks and intake scaling',
            ],
          },
        },
      },
    },
    gallery: {
      pageKicker: 'Gallery',
      pageTitle: 'Inside BEST FORME Casablanca',
      pageIntro:
        'Explore our strength floor, cardio lab, functional turf, and live coaching sessions.',
      filters: {
        all: 'All photos',
        club: 'Club Spaces',
        strength: 'Strength & Turf',
        cardio: 'Cardio & HIIT',
        coaching: 'Classes & Coaching',
      },
      photos: {
        g1: {
          title: 'Main Training Floor & Architecture',
          subtitle: 'Olympic racks, warm linear lighting, and daylight glass in Casablanca',
        },
        g2: {
          title: 'Recovery Lounge & Locker Wing',
          subtitle: 'Custom oak lockers and member relaxation seating',
        },
        g3: {
          title: 'Strength & Free Weight Zone',
          subtitle: 'Commercial squat racks and calibrated plates',
        },
        g4: {
          title: 'Functional Training Turf',
          subtitle: '25m sled track, modular rig, and kettlebells',
        },
        g5: {
          title: 'Cardio Performance Lab',
          subtitle: 'Curved assault runners, rowers, and smart treadmills',
        },
        g6: {
          title: 'HIIT Conditioning & Transformation',
          subtitle: 'High-output battle rope conditioning sessions',
        },
        g7: {
          title: 'Coach-Led Group Classes',
          subtitle: 'Small-group dumbbell and kettlebell sessions',
        },
        g8: {
          title: '1-on-1 Personal Coaching',
          subtitle: 'Attentive form correction and guided progression',
        },
        g9: {
          title: '25m Indoor Swimming Pool',
          subtitle: 'Heated lap lanes for endurance and recovery',
        },
        g10: {
          title: 'Boxing Training Studio',
          subtitle: 'Leather heavy bags, training ring, and pad conditioning',
        },
        g11: {
          title: 'Kick Boxing Combat Floor',
          subtitle: 'Thai pad striking and kicking drills with specialist coach',
        },
      },
      prevLabel: 'Previous photo',
      nextLabel: 'Next photo',
      closeLabel: 'Close lightbox',
    },
    contact: {
      pageKicker: 'Contact & Visit',
      pageTitle: 'Let’s talk about your goals in Casablanca',
      pageIntro:
        'Questions about plans, schedules, or ready to tour the club? Send us a message or connect directly on WhatsApp.',
      formTitle: 'Send a message',
      formSubtitle: 'Our reception team responds within 24 business hours.',
      fullNameLabel: 'Full name',
      fullNamePlaceholder: 'e.g. Sara Benali',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone number',
      phonePlaceholder: '+212 6 00 00 00 00',
      topicLabel: 'Topic',
      topics: [
        'Club visit & trial session',
        'Membership inquiry (Basic / Premium / VIP)',
        'Paid Nutrition Program (Weight Loss / Muscle Gain)',
        'Personal Coaching',
        'General question',
      ],
      messageLabel: 'Your message',
      messagePlaceholder: 'Share your goals or preferred visit time...',
      submitBtn: 'Send message',
      submittingBtn: 'Sending...',
      successTitle: 'Message sent to BEST FORME',
      successBody: 'Thank you for reaching out. A Casablanca club advisor will contact you shortly.',
      resetFormBtn: 'Send another message',
      errors: {
        nameRequired: 'Please enter your full name (at least 2 characters).',
        emailInvalid: 'Please enter a valid email address.',
        phoneInvalid: 'Please enter a valid phone number.',
        messageRequired: 'Please write a short message (at least 10 characters).',
      },
      directTitle: 'Club details',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      addressTitle: 'Casablanca Address',
      hoursTitle: 'Opening Hours',
      hoursRows: [
        { day: 'Monday – Friday', time: '06:00 – 23:00' },
        { day: 'Saturday', time: '07:00 – 21:00' },
        { day: 'Sunday', time: '08:00 – 18:00' },
      ],
      whatsappCardTitle: 'Instant response on WhatsApp',
      whatsappCardDesc:
        'Want membership details, class times, or to schedule a visit today? Message our team directly.',
      whatsappCardBtn: 'Chat on WhatsApp',
      whatsappPrefill:
        'Hello BEST FORME Casablanca, I would like information and to schedule a club visit.',
      mapTitle: 'Casablanca Location',
      mapDirectionsBtn: 'Open in Google Maps',
      mapPlaceholderNote: 'Editable placeholder location configured in club settings.',
    },
    footer: {
      tagline: 'BEST FORME – BUILD YOUR BEST SELF.',
      navTitle: 'Navigation',
      contactTitle: 'Casablanca Club',
      hoursTitle: 'Opening Hours',
      hoursSummary: 'Mon–Fri: 06:00–23:00 · Sat: 07:00–21:00 · Sun: 08:00–18:00',
      rights: 'All rights reserved.',
      casablancaTag: 'Casablanca, Morocco',
    },
    whatsappFloat: {
      label: 'Contact BEST FORME on WhatsApp',
      prefill: 'Hello BEST FORME Casablanca, I would like to schedule a club visit.',
    },
  },
};
