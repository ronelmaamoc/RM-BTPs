# RM-BTPs - Site Vitrine pour Entreprise de BTP

## 📋 Vue d'ensemble

RM-BTPs est un site vitrine professionnel conçu pour une entreprise de Bâtiment et Travaux Publics basée à Yaoundé, Cameroun. Le site présente les services, les réalisations et permet la prise de contact pour des demandes de devis.

**Demo en ligne :** [https://rm-btp.netlify.app/](https://rm-btp.netlify.app/)

## 🎨 Identité visuelle

### Palette de couleurs
- **Charbon (`#171A1D`)** - Couleur principale pour l'en-tête et les sections sombres
- **Béton (`#ECE8E1`)** - Fond pour les sections de contenu
- **Ambre Sécurité (`#F2A900`)** - Accents, boutons et éléments d'action
- **Bleu Structure (`#2B4C6F`)** - Couleur d'accent secondaire
- **Blanc Cassé (`#FAFAF8`)** - Fond général et contraste

### Typographie
- **Titres** : Barlow Condensed (Poids 600-800) - style industriel, compact
- **Corps** : Barlow (Poids 400-600) - lisibilité optimale
- **Étiquettes/Technique** : IBM Plex Mono - aspect technique et professionnel

## 🏗️ Structure du site

### 1. Header
- Logo RM BTP avec marque distinctive
- Navigation vers les sections principales
- Numéro de téléphone visible
- Menu mobile responsive

### 2. Hero Section
- Visuel percutant de chantier
- Présentation claire des services
- Double appel à l'action : "Voir nos réalisations" et "Demander un devis"
- **Élément signature** : Règle graduée rappelant les plans d'arpentage

### 3. Statistiques
- 12 ans d'expérience
- 80+ projets livrés
- 45 km de routes construites
- 30+ ingénieurs et ouvriers

### 4. Services (3 piliers)
1. **Études & conception architecturale**
   - Avant-projets, plans d'exécution
   - Modélisation et suivi réglementaire
   - Adaptation au climat local

2. **Construction de bâtiments**
   - Logements, immeubles, bâtiments administratifs
   - Gros œuvre, second œuvre et finitions
   - Respect des délais

3. **Travaux publics & voirie**
   - Terrassement, routes, pavage
   - Réseaux VRD
   - Ouvrages d'assainissement

### 5. Galerie / Réalisations
- Présentation visuelle des projets
- Photos de chantiers réels
- Organisation en grille avec mise en avant

### 6. À propos
- Présentation de l'entreprise
- Valeurs et engagement
- Points forts différenciants
  - Respect des délais et budgets
  - Matériaux contrôlés
  - Suivi transparent
  - Disponibilité constante

### 7. Contact et Devis
- Coordonnées complètes
- Formulaire de contact interactif
- Envoi automatique par mailto

### 8. Footer
- Copyright
- Contact simplifié
- Année dynamique

## 💻 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Mise en page responsive avec variables CSS
- **JavaScript Vanilla** - Interactivité légère
- **Google Fonts** - Barlow Condensed, Barlow, IBM Plex Mono
- **Pexels** - Images libres de droits

## ⚡ Fonctionnalités clés

1. **Responsive Design** - Adaptation à tous les écrans
2. **Menu Mobile** - Navigation optimisée pour mobiles
3. **Formulaire interactif** - Envoi de devis par mailto
4. **Année dynamique** - Copyright automatiquement mis à jour
5. **Accessibilité** - Attributs ARIA et focus visible
6. **Performance** - Images lazy loading, animations légères
7. **Backdrop blur** - Effet moderne sur l'en-tête

## 🚀 Installation et déploiement

### Installation locale
```bash
# Cloner le dépôt
git clone https://github.com/ronelmaamoc/rm-btps.git

# Ouvrir dans votre navigateur
cd rm-btps
open index.html
```

### Structure des fichiers
```
rm-btps/
├── index.html           # Page principale
├── css/
│   └── style.css       # Styles complets
├── js/
│   └── script.js       # Interactions JavaScript
└── README.md           # Documentation
```

### Déploiement sur Netlify
1. Créer un compte sur [Netlify](https://www.netlify.com/)
2. Cliquer sur "New site from Git"
3. Connecter votre dépôt
4. Configurer les paramètres (build command: none, publish directory: /)
5. Déployer

## 🎯 Points forts du design

- **Cohérence visuelle** : Palette de couleurs industrielle et professionnelle
- **Éléments signature** : Règle d'arpentage, marqueurs PK (Points Kilométriques)
- **Typographie technique** : Mélange de polices pour un rendu expert
- **Effets subtils** : Transitions, hover, focus états
- **Hiérarchie claire** : Éyebrows, titres, corps de texte bien différenciés

## 📱 Responsive breakpoints

- **980px** : Adaptation des grilles services, galerie et à propos
- **760px** : Menu mobile, masquage du téléphone, adaptation de la hero

## 🔧 Personnalisation

### Modifier les coordonnées
```javascript
// Dans index.html
<a href="tel:+237657098574">+237 657 098 574</a>
<a href="mailto:ronel.maamoc@facsciences-uy1.cm">ronel.maamoc@facsciences-uy1.cm</a>
```

### Modifier la palette de couleurs
```css
/* Dans style.css */
:root{
  --charcoal:#171A1D;
  --concrete:#ECE8E1;
  --amber:#F2A900;
  /* ... autres variables */
}
```

### Ajouter des images
Remplacer les URLs Pexels par vos propres images dans les balises `img` et `srcset`.

## 📈 SEO et Performance

- **Meta descriptions** optimisées
- **Structured navigation** avec ancres
- **Images** avec attributs loading lazy
- **HTML sémantique** (header, section, article, footer)
- **Titre de page** descriptif
- **Balises alt** sur toutes les images

## 👥 Équipe de développement

**Concepteur & Développeur :** Ronel MAAMOC  
**Contact :** ronel.maamoc@facsciences-uy1.cm  
**GitHub :** [ronelmaamoc](https://github.com/ronelmaamoc)

## 📄 Licence

© 2026 RM BTP. Tous droits réservés.

## 🔄 Mises à jour futures

- [ ] Backend pour formulaire de contact
- [ ] Galerie avec lightbox
- [ ] Blog/articles de chantier
- [ ] Section partenaires
- [ ] Témoignages clients
- [ ] Certification et labels

---

**RM-BTPs** - Un site professionnel pour une entreprise de construction africaine, alliant modernité et tradition du bâtiment.
