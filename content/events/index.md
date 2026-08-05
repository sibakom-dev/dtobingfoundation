---
layout: base.njk
permalink: /events/
title: Events
pageDescription: "Upcoming and past events from The Darius Tobing Foundation, including artisan markets, community drives, and fundraisers."
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">Events</h1>
    <p class="page-hero__subtitle">Markets, community drives, and gatherings that bring people together for a shared cause.</p>
  </div>
</div>

<section class="events-page" aria-label="All events">
  <div class="container">

    {% set upcoming = collections.events | upcomingEvents %}
    {% set past = collections.events | upcomingEvents | reverse %}

    {% if upcoming.length %}
    <div class="section-header">
      <h2 class="section-header__heading">Upcoming Events</h2>
    </div>
    <div class="events-grid" style="margin-bottom: var(--space-2xl);">
      {% for event in upcoming %}
      <article class="event-card">
        {% if event.data.heroImage %}
        <div class="event-card__image">
          <img src="{{ event.data.heroImage }}" alt="{{ event.data.title }}" loading="lazy">
        </div>
        {% endif %}
        <div class="event-card__body">
          <p class="event-card__date">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <time datetime="{{ event.data.eventDate | isoDate }}">{{ event.data.eventDate | formatDate }}</time>
          </p>
          {% if event.data.location %}
          <p class="event-card__location">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ event.data.location }}
          </p>
          {% endif %}
          <h2 class="event-card__title"><a href="{{ event.url }}">{{ event.data.title }}</a></h2>
          {% if event.data.summary %}<p class="event-card__summary">{{ event.data.summary }}</p>{% endif %}
          <a class="btn btn--gold btn--sm" href="{{ event.url }}">View Event <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <div class="empty-state">
      <h2 class="empty-state__heading">No upcoming events right now</h2>
      <p>Check back soon, or follow us on social media for the latest announcements.</p>
    </div>
    {% endif %}

    {% if collections.events.length %}
    <div class="section-header">
      <h2 class="section-header__heading">All Events</h2>
    </div>
    <div class="events-grid">
      {% for event in collections.events %}
      <article class="event-card">
        {% if event.data.heroImage %}
        <div class="event-card__image">
          <img src="{{ event.data.heroImage }}" alt="{{ event.data.title }}" loading="lazy">
        </div>
        {% endif %}
        <div class="event-card__body">
          <p class="event-card__date">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <time datetime="{{ event.data.eventDate | isoDate }}">{{ event.data.eventDate | formatDate }}</time>
          </p>
          {% if event.data.location %}
          <p class="event-card__location">
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ event.data.location }}
          </p>
          {% endif %}
          <h2 class="event-card__title"><a href="{{ event.url }}">{{ event.data.title }}</a></h2>
          {% if event.data.summary %}<p class="event-card__summary">{{ event.data.summary }}</p>{% endif %}
          <a class="btn btn--gold btn--sm" href="{{ event.url }}">View Event <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        </div>
      </article>
      {% endfor %}
    </div>
    {% endif %}

  </div>
</section>
