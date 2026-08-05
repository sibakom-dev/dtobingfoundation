---
layout: base.njk
permalink: /get-involved/
title: Get Involved
pageDescription: "Donate, volunteer, partner, or donate goods. There are many ways to support The Darius Tobing Foundation."
---

<div class="page-hero--simple" style="background: var(--color-navy);">
  <div class="container" style="padding-block: var(--space-xl);">
    <h1 class="page-hero__title">Get Involved</h1>
    <p class="page-hero__subtitle">Every act of support, big or small, creates ripples of change.</p>
  </div>
</div>

<div class="get-involved-page container">

  <div class="involved-grid">

    <div class="involved-card" id="donate">
      <div class="involved-card__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </div>
      <h2 class="involved-card__title">Donate</h2>
      <p class="involved-card__text">Your financial contribution directly funds artisan livelihoods, community scholarships, animal welfare, and library operations. Every rupiah makes a difference.</p>
      <a class="btn btn--navy" href="{{ site.donateUrl }}" rel="noopener" target="_blank">Donate Now <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>

    <div class="involved-card" id="volunteer">
      <div class="involved-card__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
      </div>
      <h2 class="involved-card__title">Volunteer</h2>
      <p class="involved-card__text">Give your time and skills. Whether you're a designer, educator, event organizer, or animal lover, we have meaningful volunteer opportunities for you.</p>
      <a class="btn btn--navy" href="mailto:volunteer@dtobingfoundation.org">Apply to Volunteer <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>

    <div class="involved-card" id="partnership">
      <div class="involved-card__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      </div>
      <h2 class="involved-card__title">Corporate Partnership</h2>
      <p class="involved-card__text">Align your brand with Indonesia's cultural and social impact. We offer co-branded events, CSR programs, and employee engagement opportunities.</p>
      <a class="btn btn--navy" href="mailto:partners@dtobingfoundation.org">Partner With Us <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>

    <div class="involved-card" id="donate-goods">
      <div class="involved-card__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
      </div>
      <h2 class="involved-card__title">Donate Goods</h2>
      <p class="involved-card__text">Books for libraries, supplies for shelters, or craft materials for artisans. Donate in kind and see your goods put to immediate use in our communities.</p>
      <a class="btn btn--navy" href="/contact/">Contact Us <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>

  </div>

</div>

{% set heading = "Ready to make a difference?" %}
{% set eyebrow = "Join Us" %}
{% include "cta-banner.njk" %}
