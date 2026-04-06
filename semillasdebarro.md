---
layout: page
title: Semillas de Barro
permalink: /semillasdebarro/
description: "Semillas de Barro desarrolla ceramica artistica y de produccion para eventos y grandes pedidos."
---

{% assign landing = site.data.landings.semillasdebarro %}

{% include landing/hero.html data=landing %}
{% include landing/list-section.html data=landing section=landing.what_does %}
{% include landing/list-section.html data=landing section=landing.services %}
{% include landing/process.html section=landing.process %}
{% include landing/gallery.html section=landing.gallery %}
{% include landing/cta.html section=landing.cross_link id_base='cross-link-cotitas' %}

<section class="landing-block" id="contacto" aria-labelledby="contacto-semillas-title">
  <h2 id="contacto-semillas-title" class="landing-block__title">Contacto</h2>
  <p class="landing-block__subtitle">Contanos fecha del evento, cantidad y estilo general para avanzar.</p>
  <p>Con esos datos se arma una propuesta de trabajo y tiempos estimados.</p>
</section>

{% include landing/cta.html section=landing.cta id_base='cta-semillas' %}
{% include landing/backlog-placeholders.html section=landing.future %}

