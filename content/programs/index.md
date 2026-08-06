---
layout: base.njk
permalink: /programs/
title: Our Programs
pageDescription: "The Darius Tobing Foundation's three pillars: Paisley Things, Lokal Indonesia, and Urip Gawe Urup, working together for heritage and humanity."
eleventyExcludeFromCollections: true
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">Our Programs</h1>
    <p class="page-hero__subtitle">Three pillars. One mission. Countless lives changed.</p>
  </div>
</div>

<section class="programs-page" aria-label="Our programs">
  <div class="container">
    <p class="programs-intro">We work through three interconnected programs, each addressing a distinct need within Indonesian communities, yet united by a shared vision of heritage, empowerment, and compassion.</p>

    <div class="programs-grid">
      {% for program in collections.programs %}
      <div class="program-card">
        <div class="program-card__header">

          <div>
            <h2 class="program-card__title">{{ program.data.title }}</h2>
            <p class="program-card__subtitle">{{ program.data.tagline }}</p>
          </div>
        </div>
        {% if program.data.heroImage %}
        <div class="program-card__image">
          <img src="{{ program.data.heroImage }}" alt="{{ program.data.title }}" loading="lazy">
        </div>
        {% endif %}
        <div class="program-card__body">
          <p>{{ program.data.summary }}</p>
        </div>
        <div class="program-card__footer">
          <a class="program-card__link" href="{{ program.url }}">Learn More <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

{% set heading = "Support our programs." %}
{% set eyebrow = "Get Involved" %}
{% include "cta-banner.njk" %}
