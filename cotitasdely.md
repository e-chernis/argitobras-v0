---
layout: page
title: Cotitas Dely
permalink: /cotitasdely/
description: "Cotitas Dely es maquinista especializada en confeccion, arreglos y diseno textil. Trabaja con recta, collareta y overlock."
---

{% assign landing = site.data.landings.cotitasdely %}

{% include landing/hero.html data=landing %}
{% include landing/list-section.html data=landing section=landing.what_does %}
{% include landing/list-section.html data=landing section=landing.machines %}
{% include landing/list-section.html data=landing section=landing.services %}
{% include landing/cta.html section=landing.cross_link id_base='cross-link-semillas' %}

<section class="landing-block" id="contacto" aria-labelledby="contacto-title">
  <h2 id="contacto-title" class="landing-block__title">Contacto</h2>
  <p class="landing-block__subtitle">Canal principal de consulta y presupuesto.</p>
  <p>Por ahora podes dejar tu consulta por mensaje directo y luego activamos CTA final de WhatsApp.</p>
  <div id="whatsapp" class="landing-note" role="note" aria-label="Estado de integracion de WhatsApp">
    WhatsApp: placeholder listo para integrar numero y mensaje predeterminado.
  </div>
</section>

{% include landing/cta.html section=landing.cta id_base='cta-cotitas' %}
{% include landing/backlog-placeholders.html section=landing.future %}

