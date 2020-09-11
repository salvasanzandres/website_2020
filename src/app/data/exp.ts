import {Experience} from './experience';

export const experiences: Experience[] = [
    {
        date: ' 02/2018 – 07/2020',
        title: ' Lead dév Angular',
        company: 'BNP CIB',
        desc: 'Mise en oeuvre from scratch d’une plateforme de gestion de crédits structurés worldwide pour les clients corporate.\n' +
        '            Équipe d’une trentaine de développeurs basés à Paris et Mumbai.',
        tasks: [
            'Participation à la mise en place de l’architecture front: feature architecture avec atomic design.'
            , 'Conception et développement d’interfaces.'
            , 'Conception et développement des components réutilisables.'
            , 'Amélioration des performances de la plateforme. (lazy loading, change detection strategies...)'
            , 'Intégration du design système BNP.'
            , 'Onboarding en préparation de workshops pour les nouveaux arrivants (à Paris et Mumbai).'
            , 'Préparation et présentation de tech chapters (performance, ngrx, component communication strategy..)'
        ],
        tech: [
            'Stack front: Angular 8 avec ngrx, rxjs, material et Sass.',
            'Java spring boot micro services en architecture hexagonale.',
            'Environnement Agile SAFe.',
            'développement suivant une approche TDD, craft.',
            'Intégration continue avec git, Jenkins, sonarqube, jira, bitbucket, Ansible.'
        ]
    },
    {
        date: '2/2017 – 2/2018',
        title: 'Lead dév Angular',
        company: 'ALD AUTOMOTIVE',
        desc: 'Développement en Angular 4 / Typescript et Ionic 3 du projet My ALD sur la version app hybride IOS / Android et la version desktop en environnement Agile.',
        tasks: [
            'Développement des pages assistance, véhicule, glovybox et pages publiques dans un environnement CI.',
            'Test de la plateforme sur tous les supports.',
            'Présentation du travail aux utilisateurs et au Marketing.',
            'TMA applicatif.dsf',
            'Préparation des POC pour les nouvelles features et besoins du métier.',
            'Suivi du déploiement et intégration de la solution finalisée dans l’environnement client.'
        ],
        tech: [
            'Angular 4, Ionic 3, Cordova, NPM, GIT Flow, Ng cli, Microsoft TFS, Material design, Webpack, Sass, Augury, Testflight, Xcode, Intelij, Swagger, Postman'
        ]
    },
    {
        date: '6/2016 – 1/2017',
        title: 'Développeur Angular',
        company: 'Commissariat à l’Energie Atomique',
        desc: 'Développement en Angular 2 / Typescript d’une application qui permet d’afficher et parcourrir des séquences de données génomiques de très grande taille. Un certain nombre d’actions et calculs sont realisés sur les données afin de les afficher et de les traiter correctement.  ',
        tasks: [
            'Echanger avec le client afin de comprendre le besoin fonctionnel et identifier la meilleure solution technique (architecture, components, services…).',
            'Mise en place des environnements nécessaires et des outils de travail.',
            'Développement des fonctionnalités demandées par le client en méthode Agile et réalisation de tests unitaires. ',
            'Réalisation de tests de charge sur des serveurs distants avec des volumétries de données de taille représentative.',
            'Mise en place d’une stratégie de cache applicatif.',
            'Organisation des réunions avec le client (documents de support, préparation des comptes rendus, mise à jour des tableaux de bord).',
            'Codage des tests automatisés avec Jasmine.',
            'Déploiement et intégration de la solution finalisée dans l’environnement client.'
        ],
        tech: [
            'Angular 2, NPM, Node, GIT, Ng cli, Material design, Karma, Jasmine, Webpack, ngPagination, ngDrag&drop, Typescript, CSS, HTML, Rest',
        ]
    },
    {
        date: '9/2015 – 5/2016',
        title: 'Développeur fullstack',
        company: 'CrossKnowledge',
        desc: 'Renforcer l’équipe intégration : participation à l’amélioration continue des services proposés aux clients de CrossKnowledge et développement et intégration de Yammer et chatter sur la plateforme LMS en angular js.',
        tasks: [
            'Echanger avec les consultants supports, les chefs de projet, les intégrateurs, les designers et les développeurs.',
            'Conception et développement du widget  Yammer, Google + et Chatter sur le LMS. Le widget interroge l’API afin d’afficher les informations de l’utilisateur et lui permettre de poster des commentaires et de l’open graph. Le widget est chargé sur la plateforme LMS.',
            'Organiser des Ateliers intégration chez les clients de CrossKnowledge.',
            'Présenter les nouveaux releases auprès de différentes équipes Crossknowlodge.',
            'Faire des propositions d’améliorations et les reporter dans le backlog.',
            'Mettre à disposition des parcours via SCORM connecteur pour le LMS client',
            'Gestion des projets intégration d’un portefeuille de clients',
            'Développement en PHP de solutions intégration spécifiques pour certains clients.',
            'Tester les contenus SCORM/AICC et certifier les contenus tiers'
        ],
        tech: [
            'AngularJS, typescript, node, grunt, systemjs, bootstrap, npm,  Navigateurs Web, SVN, Mercurial, Shell, Google API, Yammer API, Google Apps, Putty, Tortoise, JavaScript, jquery, php5'
        ]
    },
    {
        date: '4/2015 – 8/2015',
        title: 'Développeur web',
        company: 'Mazarine',
        desc: 'Mazarine est une agence de communication qui travaille sur des stratégies digitales de marques, principalement dans le luxe. Deux clients principaux : Dior Backstage et Dior Show.Les sites web réalisés sont responsive et compatibles avec ios (iphone et ipad), android et les navigateurs desktop classiques.',
        tasks: [
            'Conception et développement d’interfaces.',
            'Conception et développement des components réutilisables.',
            'Rédaction des spécifications techniques ',
            'Interlocuteur technique avec le client : questions concernant la livraison, les paramétrages, retours....f',
            'Code Reviewer.',
        ],
        tech: [
            'AngularJS, systemjs, api soap, grunt, node js, git, mysql, html css, php, Redmine, microsoft project, postman'
        ]
    },
    {
        date: '6/2014 – 3/2015',
        title: 'développeur/ Chef de projet Technique',
        company: 'Publicis',
        desc: 'Publicis modem c\'est l\'agence digitale de Publicis. Deux clients principaux : Lucien Barrière et Carrefour.',
        tasks: [
            'Rédaction des spécifications techniques',
            'Interlocuteur technique avec le client: questions concernant la livraison, les paramétrages, retours....',
            'Fournir des estimations de temps pour les projets en cours et à venir.',
            'Briefer les développeurs concernant les taches à faire.',
            'Conseiller le métier ou les équipes fonctionnels du meilleur choix devant une contrainte ou si plusieurs choix sont possibles.',
            'Création du planning et sa mise à jour.',
            'Organisation des campagnes des tests en interne et avec le client sur les devices et supports présents dans le cahier des charges : ios, android, ie8…',
            'Gestion des tickets du projet et les router vers la bonne personne.',
            'Tester et valider les livraisons (techniquement)'
        ],
        tech: [
            'mysql, HTML CSS, php, iOS, android, API REST, git, Gerrit, , Redmine, MS Project, soapui, phpmyadmin'
        ]
    },
    {
        date: '9/2012 – 5/2014',
        title: 'Développeur /Product Owner Proxy',
        company: 'Orange',
        desc: 'RECLANOO permet le traitement des réclamations déposées par les clients Orange France pro et résidentiels pour les univers fixe et internet. Les spécifications concernent la réécriture de l’application vers un environnement Zend en mode AGILE.',
        tasks: [
            'Conception et développement. ',
            'Création du modèle de données mesures financières et l’intégration du catalogue de données fourni par les métiers. Le catalogue permet de classifier les remboursements faits à partir de l’offre, motif, décision et type de Geste commercial ou remise.',
            'Pilotage et suivi des incidents avec les métiers, utilisateurs et MOE.',
            'Préparation des tableaux de bord avec le travail réalisé par l’équipe MOE à la fin de chaque version.',
            'Rédaction des spécifications chez reclanoo du traitement NewMF. Le batch envoi par appel au WS de newMF les mesures financières des dossiers soldés dans la journée ',
            'Ecriture des spécifications du projet Deezer sur Reclanoo. Le conseiller peut octroyer le montant d’une mesure financière au client en tant que Deezer',
            'Préparation des maquettes des écrans en langage HTML pour les présentations aux métiers',
            'Ecriture des tests d’acceptation fonctionnels des user story en BDD (Behaviour-Driven Development)',
            'SFD écran Solde. Ecran qui permet l’affichage et la gestion des réclamations soldées ',
            'SFD Reclabox. L’écran reclabox permet de traiter les réclamations du type Internet.',
            'SFD Dépôt Résidentiel et Pro. Les écrans de saisie de réclamations, qui sont appelés par les différentes applications qui peuvent déposer des recla: CRM, Boutique, natif.'
        ],
        tech: [
            'mysql, html css, php, sqlyog, word , entreprise architect, notepad ++, sharepoint, mingle, jenkins, excel'
        ]
    },
    {
        date: '2010 - 9/2012',
        title: 'Développeur – Concepteur',
        company: 'Virgin Mobile',
        desc: 'Au sein du au pôle CRM, développement du portail des commandes. application accessible en interne permet de gérer les commandes en cours, et modifier les coordonnées du client.',
        tasks: [
            'Rédaction des spécifications techniques servant au développement ',
            'Développeur sur le projet CRM.',
            'Développement du projet la "Banque de France" pour OMEA télécom.',
            'Création des scripts qui permettent l’intégration des fichiers BDF dans le S.I.',
            'Ajout des contrôles pour toute acquisition avec RIB : prévention de la Fraude .',
            'Développement des évolutions du CRM pour accueillir le projet ADSL.',
            'Participation à la recette fonctionnelle de la partie CRM au sein du projet ADSL.',
            'Développement du projet "nouvel espace client" : développement des web services qui permettent à l\'espace client de récupérer les informations du client ainsi que  leur modification.'
        ],
        tech: [
            'php5, MySQL, JavaScript, html, Windows, Unix, SVN, Mantis'
        ]
    },
    {
        date: '2009-2010',
        title: 'Développeur web',
        company: 'Etheryl',
        desc: 'Création de sites intranet collaboratifs web 2.0 pour de grandes sociétés ou écoles.',
        tasks: [
            'Développement en Ruby on Rails des modules : Profil, fichiers, évènements et activité de la plateforme',
            'Développement en JavaScript, CSS/HTML selon les normes W3C pour tous les navigateurs, même pour IE6. ',
            'Choix de la librairie JavaScript utilisé tel que prototype et jquery ;',
            'Conception de la base de données MySQL ;',
            'Installation et configuration du serveur Unix – Ubuntu ;',
            'Génération de façon optimale de l’information récente et activité de la plateforme.',
            'Créer la liaison entre les évènements et le système de notification pour pouvoir envoyer des invitations.',
            'Adapter l\'activité récente à chaque dégrée d\'utilisateur et selon redevance.'
        ],
        tech: [
            'RUBY ON RAILSHTML, CSS, JAVASCRIPT, MYSQL, OsX, SVN'
        ]
    }
]
