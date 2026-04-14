---
title: Manifestos
permalink: /manifestos/
lang: fr
---

Liste des manifestes publies.

{% assign manifestos_sorted = site.manifestos | sort: "date" | reverse %}
{% if manifestos_sorted.size > 0 %}
<ul>
{% for manifesto in manifestos_sorted %}
  <li>[ {{ manifesto.date | date: "%Y-%m-%d" }} ] <a href="{{ manifesto.url | relative_url }}">{{ manifesto.title | escape }}</a></li>
{% endfor %}
</ul>
{% else %}
Aucun manifeste pour le moment.
{% endif %}
