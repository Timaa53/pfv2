# Mes Projets

## SaaS de réservation pour professionnels de la beauté

**Type** : SaaS multi-tenant
**Période** : 2025-2026
**Status** : En production
**Contexte** : Projet personnel / professionnel
**Premier client** : Cecilia Nails (salon de prothésiste ongulaire) — cecilia-nails.fr

### Description
SaaS multi-tenant de prise de rendez-vous en ligne pour les professionnels de la beauté (prothésistes ongulaires, salons de manucure). Chaque salon (tenant) obtient son propre site vitrine personnalisé avec système de réservation intelligent. Le premier salon déployé est Cecilia Nails. L'architecture est pensée pour accueillir N tenants dès le départ avec isolation logique des données par tenant_id. Le nom de la plateforme est confidentiel.

### Technologies utilisées
- **Frontend** : Next.js 16 (App Router, Server Components), React 19, TypeScript 5
- **Styling** : Tailwind CSS v4, shadcn/ui (Radix UI), Framer Motion
- **Backend** : Next.js Server Actions, Auth.js (NextAuth v5) avec JWT, Google OAuth + Credentials (bcrypt)
- **Base de données** : PostgreSQL sur Neon (serverless), Drizzle ORM (14 tables, migrations type-safe)
- **Emails** : Resend (confirmation, notification admin, rappels automatiques, remerciements post-RDV)
- **Calendrier** : Google Calendar API (sync bidirectionnelle via OAuth admin)
- **Validation** : Zod (formulaires + Server Actions)
- **Hébergement** : Vercel (cron jobs pour rappels et follow-ups)

### Fonctionnalités principales
- Site vitrine par tenant (galerie 3D, avis clients vérifiés, prestations avec catégories et compléments)
- Système de réservation intelligent avec gestion des créneaux en temps réel (horaires, créneaux bloqués, buffer entre RDV)
- Dashboard admin complet (rendez-vous, planning, chiffre d'affaires, gestion clients, services, galerie, horaires)
- Espace client (historique RDV, annulation, re-réservation, dépôt d'avis, photos d'inspiration)
- Authentification multi-provider (Google OAuth + email/mot de passe) avec account linking
- Emails transactionnels automatisés (confirmation, rappels veille, remerciements post-RDV)
- Sync bidirectionnelle Google Calendar (events externes bloquent la disponibilité)
- Support custom domains (middleware Edge Runtime avec rewrite)
- SEO dynamique par tenant (robots.txt, sitemap.xml, meta tags)

### Défis techniques
- Architecture multi-tenant avec isolation logique (14 tables, cascade delete, index tenant_id)
- Gestion des timestamps en heure locale Paris (contournement des parsers UTC de Drizzle/postgres.js)
- Middleware Edge Runtime pour résolution de domaines custom (@neondatabase/serverless)
- Flow OAuth admin pour Google Calendar avec refresh_token persisté par tenant
- Sync incrémentale Google Calendar avec syncToken
- Gestion des compléments de prestations (nail art ajouté à une prestation principale)
- Upload photos client via Cloudinary (max 3 par réservation, comptes connectés uniquement)

### Architecture
- Monolithe SSR Next.js avec App Router
- Server Components par défaut, Server Actions pour la logique métier
- Auth guard centralisé (admin + client) via helpers dédiés
- Schema Drizzle en 14 tables avec relations complètes
- Templates emails HTML personnalisés
- Cron jobs Vercel (rappels quotidiens + follow-ups)

### Liens
- **Demo (premier tenant)** : https://www.cecilia-nails.fr

---

## Booki

**Type** : Application web
**Période** : 2023
**Status** : Terminé
**Contexte** : Formation OpenClassrooms

### Description
Site web responsive pour une agence de voyage permettant de trouver des hébergements et des activités dans la ville de leur choix. Première pierre de ma formation en développement web, ce projet m'a permis de maîtriser les fondamentaux du HTML et CSS.

### Technologies utilisées
- **Frontend** : HTML5, CSS3
- **Outils** : Git/GitHub, Vercel

### Fonctionnalités principales
- Interface responsive (mobile-first)
- Système de filtres pour les hébergements
- Grille d'affichage des hébergements et activités
- Sémantique HTML5 avancée

### Défis techniques
- Mise en place d'un design pixel-perfect à partir de maquettes Figma
- Gestion du responsive design avec uniquement CSS natif (sans framework)
- Optimisation de la structure HTML pour le SEO

### Liens
- **Demo** : https://projet2-booki-cyan.vercel.app

---

## Sophie Bluel - Portfolio Architecte

**Type** : Application web
**Période** : 2023
**Status** : Terminé
**Contexte** : Formation OpenClassrooms

### Description
Portfolio dynamique pour une architecte d'intérieur avec un système d'authentification et de gestion de contenu. Projet full-stack permettant à l'architecte de gérer sa galerie de projets via une interface d'administration.

### Technologies utilisées
- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **Backend** : API fournie (Node.js)
- **Outils** : Fetch API, Git/GitHub, Vercel

### Fonctionnalités principales
- Galerie de projets avec filtres par catégorie
- Système d'authentification utilisateur
- Interface d'administration pour ajouter/supprimer des projets
- Modal de gestion de contenu

### Défis techniques
- Manipulation du DOM en JavaScript vanilla
- Gestion de l'authentification avec JWT et stockage sécurisé des tokens
- Intégration d'API REST avec gestion des erreurs

### Liens
- **Demo** : https://portfolio-architecte-sophie-bluel-bay.vercel.app

---

## KASA

**Type** : Application web
**Période** : 2023
**Status** : Terminé
**Contexte** : Formation OpenClassrooms

### Description
Application web de location immobilière entre particuliers. Premier projet React de ma formation, permettant de parcourir des annonces de logements avec une interface moderne et responsive.

### Technologies utilisées
- **Frontend** : React, JavaScript/TypeScript, HTML5, CSS3
- **Routing** : React Router
- **Outils** : Git/GitHub, Vercel

### Fonctionnalités principales
- Navigation entre les pages avec React Router
- Galerie d'images avec carrousel interactif
- Système de collapse pour afficher/masquer les détails
- Interface responsive et animations fluides

### Défis techniques
- Première utilisation de React et de ses hooks (useState, useEffect)
- Implémentation d'un carrousel d'images réutilisable
- Gestion du routing dynamique avec paramètres d'URL

### Liens
- **Demo** : https://kasa-nine-gamma.vercel.app

---

## Nina Carducci - Portfolio Photographe

**Type** : Application web
**Période** : 2023
**Status** : Terminé
**Contexte** : Formation OpenClassrooms

### Description
Optimisation complète d'un site de photographe existant avec focus sur les performances, le SEO et l'accessibilité. Ce projet m'a permis d'acquérir des compétences essentielles en audit et optimisation web.

### Technologies utilisées
- **Frontend** : HTML5, CSS3, JavaScript
- **Outils** : Lighthouse, Google PageSpeed Insights, Wave, Git/GitHub

### Fonctionnalités principales
- Galerie de photos optimisée avec lazy loading
- Formulaire de contact accessible
- Rich snippets et données structurées (Schema.org)
- Navigation au clavier complète

### Défis techniques
- Amélioration du score Lighthouse de 60 à 95+ en performance
- Mise en conformité WCAG 2.1 niveau AA (accessibilité)
- Optimisation SEO avec Open Graph, Twitter Cards et structured data
- Réduction du temps de chargement de 40%

### Liens
- **Demo** : https://nina-carducci-photographer.vercel.app

---

## Mon Vieux Grimoire

**Type** : Application web (API Backend)
**Période** : 2023-2024
**Status** : Terminé
**Contexte** : Formation OpenClassrooms

### Description
API REST pour un site de notation de livres permettant aux utilisateurs de créer des comptes, ajouter des livres et les noter. Premier projet backend complet avec authentification et gestion de base de données NoSQL.

### Technologies utilisées
- **Backend** : Node.js, Express
- **Base de données** : MongoDB, Mongoose
- **Authentification** : JWT, bcrypt
- **Outils** : Multer (upload d'images), Git/GitHub, Vercel

### Fonctionnalités principales
- Système d'authentification sécurisé (JWT + bcrypt)
- CRUD complet pour les livres
- Upload et optimisation d'images de couverture
- Système de notation avec calcul de moyenne

### Défis techniques
- Mise en place d'une architecture MVC propre
- Sécurisation de l'API (validation, sanitization, rate limiting)
- Gestion de l'upload et de l'optimisation des images côté serveur
- Relations entre utilisateurs et livres dans MongoDB

### Liens
- **Demo** : https://monvieuxgrimoire53210.vercel.app

---

## Mon Portfolio

**Type** : Application web
**Période** : 2024
**Status** : En production
**Contexte** : Projet personnel

### Description
Mon portfolio personnel moderne et responsive présentant mes compétences, projets et parcours professionnel. Développé avec React et Tailwind CSS pour une expérience utilisateur optimale.

### Technologies utilisées
- **Frontend** : React, Tailwind CSS
- **Outils** : Git/GitHub, Vercel

### Fonctionnalités principales
- Design moderne et épuré avec Tailwind CSS
- Sections projets, compétences et contact
- Animations et transitions fluides
- Optimisation SEO et performances

### Défis techniques
- Customisation avancée de Tailwind (theme, plugins)
- Composants réutilisables avec Tailwind @apply
- Optimisation du bundle avec purge CSS

### Liens
- **Demo** : https://cortinandy.com

---

## Site de Recherche d'Emploi

**Type** : Application web full-stack
**Période** : 2024
**Status** : En cours
**Contexte** : Projet EPITECH

### Description
Plateforme complète de recherche d'emploi permettant aux candidats de trouver des offres et aux recruteurs de publier des annonces. Projet full-stack utilisant les technologies modernes Next.js et PostgreSQL.

### Technologies utilisées
- **Frontend** : Next.js, React, TypeScript, Tailwind CSS
- **Backend** : Node.js, Express, Next.js API Routes
- **Base de données** : PostgreSQL
- **Outils** : Git/GitHub

### Fonctionnalités principales
- Système d'authentification pour candidats et recruteurs
- Publication et gestion d'offres d'emploi
- Recherche et filtrage avancés
- Dashboard utilisateur personnalisé

### Défis techniques
- Architecture full-stack avec Next.js (SSR, API Routes)
- Gestion des relations complexes en PostgreSQL
- Authentification et autorisation multi-rôles

---

## Site d'Hébergement/Gestion de Films

**Type** : Application web
**Période** : 2024
**Status** : Terminé
**Contexte** : Projet EPITECH

### Description
Application de gestion et d'hébergement de films permettant aux utilisateurs de cataloguer et organiser leur collection de films. Utilisation de Vue.js pour le frontend et Fastify pour une API backend performante.

### Technologies utilisées
- **Frontend** : Vue.js (Composition API et Options API)
- **Backend** : Fastify
- **Outils** : Vue Router, Git/GitHub

### Fonctionnalités principales
- CRUD complet pour la gestion de films
- Système de recherche et filtrage
- Interface utilisateur réactive avec Vue
- API REST performante avec Fastify

### Défis techniques
- Première utilisation de Vue.js et de sa Composition API
- Architecture modulaire avec plugins Fastify
- Validation des données avec JSON Schema côté serveur

---

## Projet d'Automatisation DevOps

**Type** : Infrastructure et CI/CD
**Période** : 2024
**Status** : Terminé
**Contexte** : Projet EPITECH

### Description
Mise en place d'une infrastructure d'automatisation complète utilisant Docker pour la containerisation et Jenkins pour l'intégration continue. Ce projet m'a permis de découvrir les pratiques DevOps modernes.

### Technologies utilisées
- **Containerisation** : Docker, Docker Compose
- **CI/CD** : Jenkins
- **Outils** : Git/GitHub

### Fonctionnalités principales
- Dockerisation d'applications multi-containers
- Pipelines CI/CD automatisés avec Jenkins
- Orchestration avec Docker Compose
- Déploiement automatisé

### Défis techniques
- Configuration de Dockerfiles optimisés
- Mise en place de pipelines Jenkins avec tests automatisés
- Gestion des volumes et persistance des données
- Communication entre containers Docker

---

## Jeu de Plateforme 2D

**Type** : Jeu vidéo
**Période** : 2024
**Status** : Terminé
**Contexte** : Projet EPITECH

### Description
Jeu de plateforme en 2D développé en Java avec JavaFX. Premier contact avec le développement de jeux vidéo et la programmation orientée objet avancée en Java.

### Technologies utilisées
- **Langage** : Java
- **Interface graphique** : JavaFX
- **Outils** : Git/GitHub

### Fonctionnalités principales
- Système de physique pour les déplacements et sauts
- Détection de collisions
- Plusieurs niveaux jouables
- Interface graphique avec JavaFX

### Défis techniques
- Implémentation de la boucle de jeu (game loop)
- Gestion des collisions et de la physique
- Architecture orientée objet pour les entités du jeu

---

## Optimisation Serveur GTA RolePlay

**Type** : Scripting et optimisation
**Période** : 2023-2024
**Status** : En production
**Contexte** : Projet personnel

### Description
Optimisation complète du code Lua d'un serveur privé GTA RolePlay pour améliorer les performances et réduire les temps de chargement. Projet impliquant l'analyse de code existant et la réécriture de scripts critiques.

### Technologies utilisées
- **Langage** : Lua
- **Environnement** : FiveM (serveur GTA V)
- **Outils** : Git, profiling Lua

### Fonctionnalités principales
- Refactorisation de scripts legacy
- Optimisation des boucles et des événements
- Réduction de l'utilisation CPU/mémoire
- Utilisation avancée des metatables Lua

### Défis techniques
- Analyse et profiling du code existant pour identifier les bottlenecks
- Réécriture de scripts critiques sans casser les fonctionnalités
- Réduction de 30% de l'utilisation CPU grâce aux optimisations
- Mise en place de coroutines pour les opérations lourdes
