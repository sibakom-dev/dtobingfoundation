---
layout: base.njk
permalink: /about/
title: About Us
subtitle: "Who we are and why we do what we do."
pageDescription: "Learn about The Darius Tobing Foundation, our story, vision, mission, values, and the people behind our work."
ogImage: /media/YDT_Full_Logo_English_Color_On_White_5x-scaled.png
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">About The Foundation</h1>
    <p class="page-hero__subtitle">Rooted in Indonesian culture. Driven by compassion.</p>
  </div>
</div>

<div class="about-page container">

  <section aria-labelledby="our-story">
    <div class="section-content">
      <div class="section-content__text">
        <div class="section-header">
          <h2 class="section-header__heading" id="our-story">Our Story</h2>
        </div>
        <p>The Darius Tobing Foundation was established in Jakarta with a singular belief: that commerce, culture, and compassion can coexist. Named after a visionary whose passion for Indonesia's heritage ran deep, the foundation channels that spirit into three interconnected programs.</p>
        <p>We work alongside rural artisans, urban communities, and animal shelters, weaving together a mission that touches both heritage and humanity.</p>
      </div>
      <div class="section-content__image">
        <img src="/media/IMG_7909.jpg" alt="Foundation founders with community" loading="lazy">
      </div>
    </div>
  </section>

  <section aria-labelledby="vision-mission" style="background: var(--color-cream); padding: var(--space-xl); border-radius: 8px; margin-bottom: var(--space-2xl);">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
      <div>
        <div class="section-header">
          <h2 class="section-header__heading" id="vision-mission">Vision</h2>
        </div>
        <p style="color: var(--color-text-muted);">A more compassionate and sustainable Indonesia, where cultural heritage thrives, communities are empowered, and every living being is treated with dignity.</p>
      </div>
      <div>
        <div class="section-header">
          <h2 class="section-header__heading">Mission</h2>
        </div>
        <p style="color: var(--color-text-muted);">To preserve Indonesian craftsmanship, support marginalized communities through ethical commerce and direct philanthropy, and champion animal welfare through education and shelter.</p>
      </div>
    </div>
  </section>

  <section aria-labelledby="values">
    <div class="section-header">
      <h2 class="section-header__heading" id="values">Our Values</h2>
    </div>
    <div class="values-list">
      <div class="value-item">
        <h3 class="value-item__name">Heritage</h3>
        <p class="value-item__desc">We honor and preserve Indonesia's rich cultural identity through every product and program.</p>
      </div>
      <div class="value-item">
        <h3 class="value-item__name">Compassion</h3>
        <p class="value-item__desc">We lead with empathy, for artisans, for communities, and for animals.</p>
      </div>
      <div class="value-item">
        <h3 class="value-item__name">Integrity</h3>
        <p class="value-item__desc">We operate with full transparency and accountability to our donors, partners, and beneficiaries.</p>
      </div>
      <div class="value-item">
        <h3 class="value-item__name">Sustainability</h3>
        <p class="value-item__desc">We build programs that create lasting systemic change, not just short-term relief.</p>
      </div>
    </div>
  </section>

  <section aria-labelledby="founders" style="margin-top: var(--space-2xl);">
    <div class="section-header">
      <h2 class="section-header__heading" id="founders">Our Founders</h2>
    </div>
    <div class="founders-grid">
      <div class="founder-card">
        <div class="founder-card__image">
          <img src="/media/IMG_7533.jpg" alt="Founder" loading="lazy">
        </div>
        <h3 class="founder-card__name">The Darius Tobing Foundation</h3>
        <p class="founder-card__role">Jakarta, Indonesia</p>
      </div>
    </div>
  </section>

  <section aria-labelledby="partners" style="margin-top: var(--space-2xl); margin-bottom: var(--space-2xl);">
    <div class="section-header">
      <h2 class="section-header__heading" id="partners">Our Partners</h2>
    </div>
    <div class="partners-grid">
      <img class="partner-logo" src="/media/Logo-Paisley-Things-150px.jpg" alt="Paisley Things" loading="lazy">
      <img class="partner-logo" src="/media/Logo-Lokal-Indonesia-150px.jpg" alt="Lokal Indonesia" loading="lazy">
      <img class="partner-logo" src="/media/Logo-Urip-Gawe-Urup-150px.jpg" alt="Urip Gawe Urup" loading="lazy">
    </div>
  </section>

</div>

{% set heading = "Together, we can create<br>a lasting impact." %}
{% set eyebrow = "Get Involved" %}
{% include "cta-banner.njk" %}
