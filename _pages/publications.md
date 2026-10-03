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

<script>
  // Make the DOI and URL strings in the APA references clickable (progressive enhancement).
  document.querySelectorAll(".publications .bib-entry").forEach(function (el) {
    el.innerHTML = el.innerHTML.replace(/(https?:\/\/[^\s<\]]+?)([.,])?(?=\s|<|$|\])/g, function (m, url, punct) {
      return '<a href="' + url + '">' + url + "</a>" + (punct || "");
    });
  });
</script>
