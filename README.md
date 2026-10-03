# epageperron.info

Personal academic website of Émilie Pagé-Perron, built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and deployed to GitHub Pages by the `deploy.yml` workflow on every push to `master`.

## Where the content lives

| What | File(s) |
| --- | --- |
| About page | `_pages/about.md` |
| CV | `_data/cv.yml` |
| Publications | `_bibliography/papers.bib` (field `section` = `peer`, `other` or `thesis`) |
| Projects | `_projects/*.md` (`category` = `current` or `completed`) |
| Site settings, social links | `_config.yml` |
| Images | `assets/img/` |

## Local preview

Requires Docker. From the repository root:

```bash
docker run --rm -p 8080:8080 -v "$PWD":/srv/jekyll -v al-folio-bundle:/usr/local/bundle --entrypoint bash amirpourmand/al-folio:v0.14.6 -c "bundle install && bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --force_polling"
```

Then open http://localhost:8080. The first run installs gems (a few minutes); later runs reuse the `al-folio-bundle` volume.

## Licence

Site content © Émilie Pagé-Perron. Template © Maruan Al-Shedivat, MIT licence.
