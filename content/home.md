---
layout: base.njk
permalink: /
title: Preserving Heritage. Empowering Lives.
pageDescription: "We work with rural artisans, support communities, and care for animals, creating a more compassionate and sustainable Indonesia."
ogImage: /media/background_website_2mb.png
bodyClass: home
---

{# ── HERO CAROUSEL ── #}
{% include "hero-carousel.njk" %}

{# ── MISSION STRIP ── #}
<div class="home-mission">
  <div class="mission-strip__inner container">
    <p class="mission-strip__text">The Darius Tobing Foundation is a Jakarta-based non-profit dedicated to cultural preservation, community literacy, animal welfare, and ethical commerce.</p>
    <a class="mission-strip__link" href="/about/">Learn More About Us <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
  </div>
</div>

{# ── THREE PILLARS ── #}
<section class="pillars" aria-labelledby="pillars-heading">
  <div class="container">
    <div class="section-header section-header--centered">
      <h2 class="section-header__heading" id="pillars-heading">Our Three Pillars</h2>
    </div>
    <div class="pillars__grid">
      <div class="program-card">
        <div class="program-card__header">
          <img class="program-card__logo" src="/media/DTF-Logo-Paisley-Things-500px.png" alt="Paisley Things logo" width="48" height="48" loading="lazy">
          <div>
            <h3 class="program-card__title">Paisley Things</h3>
            <p class="program-card__subtitle">Ethical Retail &amp; Rural Income</p>
          </div>
        </div>
        <div class="program-card__image">
          <img src="/media/Paisley-Things-500px.jpg" alt="Paisley Things artisan crafts" loading="lazy">
        </div>
        <div class="program-card__body">
          <p>Empowering rural artisans through fair trade and ethical home products that celebrate Indonesian craftsmanship.</p>
        </div>
        <div class="program-card__footer">
          <a class="program-card__link" href="/programs/paisley-things/">Shop Our Collection <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </div>

      <div class="program-card">
        <div class="program-card__header">
          <img class="program-card__logo" src="/media/DTF-Logo-Lokal-Indonesia-500px.png" alt="Lokal Indonesia logo" width="48" height="48" loading="lazy">
          <div>
            <h3 class="program-card__title">Lokal Indonesia</h3>
            <p class="program-card__subtitle">Marketplace Platform</p>
          </div>
        </div>
        <div class="program-card__image">
          <img src="/media/Lokal-Indonesia-500px.jpg" alt="Lokal Indonesia artisan market" loading="lazy">
        </div>
        <div class="program-card__body">
          <p>Curated artisan markets connecting Indonesia's best crafters with conscious urban consumers.</p>
        </div>
        <div class="program-card__footer">
          <a class="program-card__link" href="/programs/lokal-indonesia/">Upcoming Markets <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </div>

      <div class="program-card">
        <div class="program-card__header">
          <img class="program-card__logo" src="/media/DTF-Logo-urip-Gawe-Urup-500px.png" alt="Urip Gawe Urup logo" width="48" height="48" loading="lazy">
          <div>
            <h3 class="program-card__title">Urip Gawe Urup</h3>
            <p class="program-card__subtitle">Direct Social Philanthropy</p>
          </div>
        </div>
        <div class="program-card__image">
          <img src="/media/Urip-Gawe-Urup-500px.jpg" alt="Urip Gawe Urup community impact" loading="lazy">
        </div>
        <div class="program-card__body">
          <p>"In life, do good deeds." Supporting education, community aid, and animal welfare for a better tomorrow.</p>
        </div>
        <div class="program-card__footer">
          <a class="program-card__link" href="/programs/urip-gawe-urup/">Our Impact <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</section>

{# ── STATS BAR ── #}
<section class="stats-bar" aria-label="Impact statistics">
  <div class="stats-bar__grid container">
    {% for stat in site.impactStats %}
    <div class="stat">
      <div class="stat__body">
        <span class="stat__number">{{ stat.number }}</span>
        <span class="stat__label">{{ stat.label }}</span>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

{# ── UPCOMING EVENT ── #}
{% set upcomingList = collections.events | upcomingEvents %}
{% if upcomingList.length %}
{% set nextEvent = upcomingList[0] %}
<section class="upcoming-event" aria-labelledby="upcoming-event-heading">
  <div class="upcoming-event__inner container">
    <div class="upcoming-event__image">
      <img src="{{ nextEvent.data.heroImage or '/media/Lokal-Indonesia-500px-Banner.jpg' }}" alt="{{ nextEvent.data.title }}" loading="lazy">
    </div>
    <div class="upcoming-event__content">
      <p class="upcoming-event__label">Upcoming Event</p>
      <h2 class="upcoming-event__title" id="upcoming-event-heading">{{ nextEvent.data.title }}</h2>
      {% if nextEvent.data.subtitle %}
      <p class="upcoming-event__subtitle">{{ nextEvent.data.subtitle }}</p>
      {% endif %}
      <div class="upcoming-event__details-grid">
        <div class="upcoming-event__details">
          {% if nextEvent.data.eventDate %}
          <p class="event-detail">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <time datetime="{{ nextEvent.data.eventDate | isoDate }}">{{ nextEvent.data.eventDate | formatDate }}</time>
            {% if nextEvent.data.eventEndDate %} to {{ nextEvent.data.eventEndDate | formatDate }}{% endif %}
          </p>
          {% endif %}
          {% if nextEvent.data.eventTime %}
          <p class="event-detail">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ nextEvent.data.eventTime }}
          </p>
          {% endif %}
          {% if nextEvent.data.location %}
          <p class="event-detail">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ nextEvent.data.location }}
          </p>
          {% endif %}
        </div>
        {% if nextEvent.data.features %}
        <ul class="upcoming-event__features">
          {% for feat in nextEvent.data.features %}
          <li class="upcoming-event__feature">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            {{ feat }}
          </li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      <a class="btn btn--gold" href="{{ nextEvent.url }}">View Event Details <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>
  </div>
</section>
{% endif %}

{# ── LATEST STORIES ── #}
{% if collections.stories.length %}
<section class="latest-stories" aria-labelledby="stories-heading">
  <div class="container">
    <div class="section-header section-header--centered">
      <h2 class="section-header__heading" id="stories-heading">Latest Stories</h2>
    </div>
    <div class="story-grid">
      {% for story in collections.stories | limit(3) %}
      <article class="story-card">
        {% if story.data.coverImage %}
        <a class="story-card__image" href="{{ story.url }}" tabindex="-1" aria-hidden="true">
          <img src="{{ story.data.coverImage }}" alt="{{ story.data.title }}" loading="lazy">
        </a>
        {% endif %}
        <div class="story-card__body">
          {% if story.data.category %}
          <p class="story-card__category">{{ story.data.category }}</p>
          {% endif %}
          <h3 class="story-card__title"><a href="{{ story.url }}">{{ story.data.title }}</a></h3>
          {% if story.data.excerpt %}<p class="story-card__excerpt">{{ story.data.excerpt }}</p>{% endif %}
          <footer class="story-card__meta">
            {% if story.data.author %}<span>{{ story.data.author }}</span>{% endif %}
            <time datetime="{{ story.date | isoDate }}">{{ story.date | formatDate }}</time>
          </footer>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

{# ── CTA BANNER ── #}
{% set heading = "Together, we can create<br>a lasting impact." %}
{% set eyebrow = "Be Part of the Change" %}
{% include "cta-banner.njk" %}
