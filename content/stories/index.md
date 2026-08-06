---
layout: base.njk
permalink: /stories/
title: News & Stories
pageDescription: Stories of impact and heritage from The Darius Tobing Foundation.
eleventyExcludeFromCollections: true
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">News & Stories</h1>
    <p class="page-hero__subtitle">Stories of impact, heritage, and humanity.</p>
  </div>
</div>

<section style="padding-block: var(--space-xl);">
  <div class="container">
    <div class="programs-grid">
      {% for story in collections.stories %}
      <div class="program-card">
        {% if story.data.coverImage %}
        <div class="program-card__image">
          <img src="{{ story.data.coverImage }}" alt="{{ story.data.title }}" loading="lazy">
        </div>
        {% endif %}
        <div class="program-card__body">
          <h2 class="program-card__title" style="margin-bottom: 0.5rem;">{{ story.data.title }}</h2>
          <p class="program-card__subtitle" style="margin-bottom: 1rem; color: var(--color-gold);">
            {{ story.date | formatDate }}
          </p>
          <p>{{ story.data.excerpt }}</p>
        </div>
        <div class="program-card__footer">
          <a class="program-card__link" href="{{ story.url }}">Read Story <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

{% set heading = "Support our programs." %}
{% set eyebrow = "Get Involved" %}
{% include "cta-banner.njk" %}
