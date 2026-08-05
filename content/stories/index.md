---
layout: base.njk
permalink: /stories/
title: News & Stories
pageDescription: "Stories of impact, community, and heritage from The Darius Tobing Foundation."
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">News &amp; Stories</h1>
    <p class="page-hero__subtitle">Impact reports, community voices, and stories from the field.</p>
  </div>
</div>

<section class="stories-page" aria-label="All stories">
  <div class="container">
    <div class="stories-filters" role="group" aria-label="Filter stories by category">
      <button class="filter-btn filter-btn--active">All</button>
      <button class="filter-btn">Community</button>
      <button class="filter-btn">Artisan</button>
      <button class="filter-btn">Animal Welfare</button>
      <button class="filter-btn">Events</button>
    </div>

    {% if collections.stories.length %}
    <div class="story-grid">
      {% for story in collections.stories %}
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
          <h2 class="story-card__title"><a href="{{ story.url }}">{{ story.data.title }}</a></h2>
          {% if story.data.excerpt %}<p class="story-card__excerpt">{{ story.data.excerpt }}</p>{% endif %}
          <footer class="story-card__meta">
            {% if story.data.author %}<span>{{ story.data.author }}</span>{% endif %}
            <time datetime="{{ story.date | isoDate }}">{{ story.date | formatDate }}</time>
          </footer>
        </div>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <div class="empty-state">
      <h2 class="empty-state__heading">Stories coming soon</h2>
      <p>Check back later for updates from our programs and community.</p>
    </div>
    {% endif %}
  </div>
</section>
