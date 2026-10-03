---
layout: page
permalink: /publications/
title: Publications
description: Articles, chapters, proceedings, reports and theses, newest first.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->
<div class="publications">

<h2>Peer-reviewed articles, chapters and proceedings</h2>
{% bibliography --query @*[section=peer] %}

<h2>Other publications and reports</h2>
{% bibliography --query @*[section=other] %}

<h2>Theses</h2>
{% bibliography --query @*[section=thesis] %}

</div>

{% include linkify_references.liquid %}
