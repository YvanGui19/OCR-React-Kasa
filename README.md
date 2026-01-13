# Kasa - Application de Location Immobilière

Application web de location immobilière développée avec React dans le cadre du parcours Développeur Web d'OpenClassrooms.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![SCSS](https://img.shields.io/badge/SCSS-1.93.2-CC6699?logo=sass)

## Apercu

Kasa est une plateforme de location d'appartements entre particuliers. L'application permet de parcourir les annonces de logements disponibles, consulter leurs détails (photos, description, équipements, évaluations) et découvrir les valeurs de l'entreprise.

## Fonctionnalités

- **Navigation fluide** : Routing client-side sans rechargement de page
- **Galerie d'images** : Carrousel interactif pour visualiser les photos des logements
- **Accordéons animés** : Sections dépliantes pour la description et les équipements
- **Design responsive** : Interface adaptée à toutes les tailles d'écran
- **Gestion des erreurs** : Page 404 personnalisée

## Technologies utilisées

| Technologie | Version | Utilisation |
|-------------|---------|-------------|
| React | 19.1.1 | Framework UI |
| React Router | 7.9.4 | Routing |
| Vite | 7.1.7 | Build tool |
| SCSS | 1.93.2 | Styles |
| Styled Components | 6.1.19 | CSS-in-JS |
| FontAwesome | 7.1.0 | Icônes |

## Structure du projet

```
src/
├── assets/              # Images et icônes
├── components/          # Composants réutilisables
│   ├── Banner/          # Bannière avec image de fond
│   ├── Card/            # Carte de logement
│   ├── Collapse/        # Accordéon dépliable
│   ├── Error/           # Page d'erreur 404
│   ├── Footer/          # Pied de page
│   ├── Header/          # En-tête avec navigation
│   ├── Layout/          # Structure de page
│   └── Slideshow/       # Carrousel d'images
├── data/
│   └── logements.json   # Données des logements
├── pages/               # Pages de l'application
│   ├── Accueil/         # Liste des logements
│   ├── APropos/         # Page À Propos
│   └── Logement/        # Détails d'un logement
├── App.jsx              # Composant racine
├── main.jsx             # Point d'entrée
└── index.scss           # Styles globaux
```

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes

1. Cloner le repository
```bash
git clone https://github.com/YvanGui19/OCR-React-Kasa.git
cd OCR-React-Kasa
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère la version de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run lint:fix` | Corrige automatiquement les erreurs ESLint |
| `npm run format` | Formate le code avec Prettier |
| `npm run deploy` | Déploie sur GitHub Pages |

## Pages de l'application

### Accueil (`/`)
Affiche la liste de tous les logements disponibles sous forme de grille de cartes cliquables.

### À Propos (`/a-propos`)
Présente les valeurs de Kasa (Fiabilité, Respect, Service, Sécurité) dans des sections dépliantes.

### Logement (`/logement/:id`)
Affiche les détails complets d'un logement :
- Carrousel de photos
- Titre et localisation
- Tags et note
- Informations sur l'hôte
- Description et équipements

### Page 404
Gère les routes inexistantes avec un message d'erreur et un lien de retour à l'accueil.

## Palette de couleurs

- **Primaire** : `#FF6060` (rouge-rose)
- **Fond** : `#F6F6F6` (gris clair)
- **Texte** : `#000000` (noir)

## Auteur

Projet réalisé dans le cadre de la formation Développeur Web d'OpenClassrooms.

## Licence

Ce projet est un exercice pédagogique.
