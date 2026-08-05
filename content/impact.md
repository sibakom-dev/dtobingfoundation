---
layout: base.njk
permalink: /impact/
title: Our Impact
pageDescription: "See the measurable difference The Darius Tobing Foundation makes: statistics, testimonials, beneficiaries, and annual highlights."
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">Our Impact</h1>
    <p class="page-hero__subtitle">Real change. Real lives. Measured results.</p>
  </div>
</div>

<div class="impact-page container">

  {# STATISTICS #}
  <section aria-labelledby="impact-stats">
    <div class="section-header">
      <h2 class="section-header__heading" id="impact-stats">Impact at a Glance</h2>
    </div>
    <div class="stats-bar" style="border-radius: 8px; overflow: hidden; margin-top: 1.5rem;">
      <div class="stats-bar__grid" style="padding: 0;">
        {% for stat in site.impactStats %}
        <div class="stat">
          <div class="stat__body">
            <span class="stat__number">{{ stat.number }}</span>
            <span class="stat__label">{{ stat.label }}</span>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  {# TESTIMONIALS #}
  <section aria-labelledby="testimonials" style="margin-top: var(--space-2xl);">
    <div class="section-header">
      <h2 class="section-header__heading" id="testimonials">Voices of Change</h2>
    </div>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p class="testimonial-card__quote">"Being part of Lokal Indonesia changed my business. I now reach customers I never could before, and my crafts are valued as they deserve to be."</p>
        <p class="testimonial-card__author">Ibu Wati, Batik Artisan, Solo</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-card__quote">"The scholarship from Urip Gawe Urup gave my daughter the chance to go to university. It changed our family's future."</p>
        <p class="testimonial-card__author">Pak Rudi, Community Member, East Java</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-card__quote">"Paisley Things helped me turn my grandmother's weaving tradition into a sustainable livelihood. Now I teach the craft to younger women in my village."</p>
        <p class="testimonial-card__author">Ibu Sari, Tenun Artisan, NTT</p>
      </div>
    </div>
  </section>

  {# BENEFICIARIES #}
  <section aria-labelledby="beneficiaries" style="margin-top: var(--space-2xl);">
    <div class="section-header">
      <h2 class="section-header__heading" id="beneficiaries">Who We Serve</h2>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
      <div style="background: var(--color-cream); border-radius: 8px; overflow: hidden;">
        <img src="/media/Paisley.png" alt="Artisan community" loading="lazy" style="width:100%; aspect-ratio:4/3; object-fit:cover;">
        <div style="padding: 1.25rem;">
          <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-navy); margin-bottom: .4rem;">Rural Artisans</h3>
          <p style="font-size: .88rem; color: var(--color-text-muted);">Weavers, batik makers, and woodcarvers from across the archipelago.</p>
        </div>
      </div>
      <div style="background: var(--color-cream); border-radius: 8px; overflow: hidden;">
        <img src="/media/Hati-Suci-Orphanage.jpg" alt="Children at orphanage" loading="lazy" style="width:100%; aspect-ratio:4/3; object-fit:cover;">
        <div style="padding: 1.25rem;">
          <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-navy); margin-bottom: .4rem;">Children &amp; Youth</h3>
          <p style="font-size: .88rem; color: var(--color-text-muted);">Orphaned and underprivileged children receiving education and care.</p>
        </div>
      </div>
      <div style="background: var(--color-cream); border-radius: 8px; overflow: hidden;">
        <img src="/media/Animal-Shelter.jpg" alt="Animals in shelter" loading="lazy" style="width:100%; aspect-ratio:4/3; object-fit:cover;">
        <div style="padding: 1.25rem;">
          <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--color-navy); margin-bottom: .4rem;">Animals in Need</h3>
          <p style="font-size: .88rem; color: var(--color-text-muted);">Rescued and sheltered animals receiving veterinary care and rehoming.</p>
        </div>
      </div>
    </div>
  </section>

  {# ANNUAL HIGHLIGHTS #}
  <section aria-labelledby="annual" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
    <div class="section-header">
      <h2 class="section-header__heading" id="annual">Annual Highlights</h2>
    </div>
    <div class="annual-highlights-grid">
      <div class="highlight-card">
        <p class="highlight-card__year">2024</p>
        <h3 class="highlight-card__title">Lokal Indonesia Goes National</h3>
        <p class="highlight-card__text">Expanded from Jakarta to 3 new cities with 12 artisan markets, reaching over 15,000 visitors.</p>
      </div>
      <div class="highlight-card">
        <p class="highlight-card__year">2023</p>
        <h3 class="highlight-card__title">Community Library Launch</h3>
        <p class="highlight-card__text">Opened the second Fajar Baru community library, providing free resources to 500+ children.</p>
      </div>
      <div class="highlight-card">
        <p class="highlight-card__year">2022</p>
        <h3 class="highlight-card__title">Paisley Things Export Milestone</h3>
        <p class="highlight-card__text">First international export of hand-crafted goods to European ethical retail partners.</p>
      </div>
      <div class="highlight-card">
        <p class="highlight-card__year">2022</p>
        <h3 class="highlight-card__title">Animal Welfare Drive</h3>
        <p class="highlight-card__text">Partnered with local vets to vaccinate and sterilize over 200 animals across Jakarta.</p>
      </div>
    </div>
  </section>

</div>

{% set heading = "Help us create more stories like these." %}
{% set eyebrow = "Be the Change" %}
{% include "cta-banner.njk" %}
