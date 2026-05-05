---
layout: default
title: 全部文章
permalink: /archive.html
---
<h1>全部文章</h1>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
<section class="archive-year">
  <h2>{{ year.name }}</h2>
  <ul class="archive-list">
    {% for post in year.items %}
    <li>
      <span class="archive-date">{{ post.date | date: "%m-%d" }}</span>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
