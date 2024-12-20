# énoncé

Sur la thématique de votre choix, réaliser une app' rendu coté serveur.
En `EcmaScriptModule`.

## Les modules

- se faciliter le développement avec `Nodemon`
- gérer les routes avec `Express`
- afficher l'interface avec le moteur de rendu `EJS`
- gérer les variables d'environnements avec `dotenv`

### Bonus

- lire/écrire dans un fichier `JSON` avec `jsonfile`

## Structure

- à la racine"
  - les ressources statiques (css, img) vont dans un dossier `public`
  - le reste de l'application dans un dossier `src`
  - le fichier des variables d'environnement
  - le fichier pour les données à ne pas envoyer au repository à distance
- dans le dossier `src`
  - un dossier `data` pour les données (js ou json)
  - un dossier `router` pour les routes
  - un dossier `views` pour les interfaces

## BONUS

- afficher des images
- faire un design propre
- respecter des règles d'accessibilité et d’expérience utilisateur

## Fonctionnalités supplémentaires

Modifier le fichier json pour ajouter les icônes des pays (<https://www.flaticon.com/packs/countrys-flags>).
Ajouter une image de la recette du pays.
**Les photos sont ajoutés manuellement dans le dossier public**

Améliorer la condition pour afficher une autre image si elles n'existent pas dans le fichier `home.ejs`.

Ajouter l'écriture dans le fichier json en s'aidant du fichier cours md.
Cette fonctionnalité coté interface sera le panneau administrateur.

Modifier la structure afin d'avoir une séparation logique entre les routes et l'interface (dossier controller).
