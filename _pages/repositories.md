---
layout: page
permalink: /repositories/
title: Code
description: Flagship repositories on GitLab and GitHub.
nav: true
nav_order: 6
---

## GitLab

<div class="repositories">
  {% include repository/repo_gitlab.liquid project=site.data.gitlab_framework language="PHP" language_color="#4F5D95" %}
  {% include repository/repo_gitlab.liquid project=site.data.gitlab_docs language="Markdown" language_color="#083fa1" %}
</div>

## GitHub

<div class="repositories">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

### Organisations

Émilie contributes to repositories of [cdli-gh](https://github.com/cdli-gh) (CDLI and MTAAC), [uoy-ads](https://github.com/uoy-ads) (Archaeology Data Service), [ARIADNE-Infrastructure](https://github.com/ARIADNE-Infrastructure) and [Diyala-OI](https://github.com/Diyala-OI), and keeps her own code at [epageperron](https://github.com/epageperron).
