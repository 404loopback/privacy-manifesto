# Privacy Manifesto

Structure de blog Jekyll prete pour GitHub Pages.

## Structure

- `_config.yml` : configuration Jekyll
- `_layouts/` : templates de pages et d'articles
- `_includes/` : fragments reutilisables (head, header, footer)
- `_posts/` : articles du blog
- `assets/css/main.css` : styles de base
- `.github/workflows/pages.yml` : pipeline de build/deploiement GitHub Pages

## Lancer en local

Prerequis : Ruby + Bundler installes.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Le site est ensuite disponible sur `http://127.0.0.1:4000`.

## Ajouter un article

Creer un fichier dans `_posts/` au format :

`YYYY-MM-DD-mon-article.md`

avec un front matter minimal :

```yaml
---
title: "Titre de l'article"
date: 2026-04-14 10:00:00 +0200
---
```

## Deploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` deploye automatiquement le site a chaque push sur `main`.

Dans GitHub : `Settings > Pages > Source = GitHub Actions`.
