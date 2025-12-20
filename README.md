
<div align="center">
  <img src="https://res.cloudinary.com/duwqjda9j/image/upload/v1765907053/favicon-ikiup_a0hmhx.png" alt="IkiUp Logo" width="120" />
  <h1>IkiUp</h1>
  <p><strong>Avancer ensemble vers un parcours scolaire plus serein.</strong></p>
  
  <p>
    <a href="#features">Fonctionnalités</a> •
    <a href="#tech-stack">Stack Technique</a> •
    <a href="#getting-started">Commencer</a>
  </p>

  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

<br />

## 🌟 À Propos / About

**IkiUp** est une plateforme innovante qui connecte intelligemment les élèves, les parents et les établissements scolaires. Notre mission est de transformer l'expérience éducative en un parcours serein, éclairé et collaboratif.

> "L'éducation n'est pas la préparation à la vie ; l'éducation est la vie même." — John Dewey

---

## 🚀 Fonctionnalités / Features

### 🎓 Pour les Élèves
- **Orientation Prédictive** : Tests de personnalité et d'orientation basés sur les sciences cognitives.
- **Exploration** : Accès à une base de données de métiers et de formations.
- **Suivi** : Vue centralisée sur les notes, devoirs et progressions.

### 👨‍👩‍👧‍👦 Pour les Parents
- **Tableau de Bord** : Suivi en temps réel de la scolarité sans intrusion excessive.
- **Communication** : Fil direct et bienveillant avec l'équipe pédagogique.
- **Sérénité** : Des indicateurs clairs pour accompagner l'autonomie de l'enfant.

### 🏫 Pour les Écoles
- **Vision 360°** : Compréhension approfondie des profils élèves.
- **Communication** : Outils de diffusion d'informations et d'événements.
- **Pilotage** : Statistiques et suivi de la réussite scolaire.

---

## 💻 Stack Technique / Tech Stack

- **Framework** : [React 19](https://react.dev/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS v3](https://tailwindcss.com/)
- **Icones** : [Lucide React](https://lucide.dev/)
- **Package Manager** : Node.js & NPM

---

## 🛠️ Commencer / Getting Started

Suivez ces étapes pour lancer le projet localement.

### Prérequis

- Node.js (v18 ou supérieur recommandé)
- NPM ou Yarn

### Installation

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/votre-username/ikiup-landing.git
    cd ikiup-landing
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configurer l'environnement**
    Créer un fichier `.env.local` à la racine si nécessaire (voir `.env.example`).
    ```bash
    # Exemple
    VITE_API_URL=http://localhost:3000
    ```

4.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

L'application sera accessible sur `http://localhost:5173`.

### Build pour Production

Pour générer les fichiers statiques optimisés :

```bash
npm run build
```

Les fichiers seront dans le dossier `dist`.

---

## 🎨 Architecture du Projet

```
IkiUp-ApplicationEducatif/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants React (Hero, Features, etc.)
│   ├── hooks/           # Custom Hooks
│   ├── index.css        # Styles globaux Tailwind
│   ├── translations.ts  # Gestion i18n
│   ├── App.tsx          # Composant racine
│   └── main.tsx         # Point d'entrée
├── tailwind.config.cjs  # Configuration Tailwind
├── postcss.config.cjs   # Configuration PostCSS
├── package.json
└── vite.config.ts
```

---

<div align="center">
  <p>Fait avec ❤️ par l'équipe IkiUp</p>
  <p>© 2025 IkiUp. Tous droits réservés.</p>
</div>
