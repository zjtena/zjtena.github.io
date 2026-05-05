---
layout: default
title: 标签分类
permalink: /tags.html
---
<h1>标签分类</h1>

<div class="tag-cloud">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
  <a href="#{{ tag[0] }}" class="tag">{{ tag[0] }} ({{ tag[1].size }})</a>
  {% endfor %}
</div>

{% for tag in tags %}
<section class="tag-section" id="{{ tag[0] }}">
  <h2>{{ tag[0] }}</h2>
  <ul class="tag-posts">
    {% for post in tag[1] %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
