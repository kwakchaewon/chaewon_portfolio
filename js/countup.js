/* count-up driven by deck-stage's slidechange event */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function fmt(n) { return Math.round(n).toLocaleString("en-US"); }

  function animateEl(el) {
    var target = parseFloat(el.dataset.target);
    var dur = parseFloat(el.dataset.dur || 1600);
    var startDelay = parseFloat(el.dataset.delay || 200);
    var t0 = null;
    el.textContent = "0";
    function step(ts) {
      if (t0 === null) t0 = ts;
      var e = ts - t0;
      if (e < startDelay) { requestAnimationFrame(step); return; }
      var p = Math.min((e - startDelay) / dur, 1);
      el.textContent = fmt(target * easeOutCubic(p));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }

  function run(slide) {
    if (!slide) return;
    // Guard: a slide's countups run once per entrance. Cleared when the slide
    // loses [data-deck-active] so re-entering the slide replays the count.
    if (slide.__countRan) return;
    slide.__countRan = true;
    var els = slide.querySelectorAll(".countup");
    els.forEach(function (el) {
      if (reduce) { el.textContent = fmt(parseFloat(el.dataset.target)); return; }
      animateEl(el);
    });
  }

  document.addEventListener("slidechange", function (e) {
    if (!e.detail) return;
    // Reset the guard on the slide we just left so it can replay next visit.
    var slides = document.querySelectorAll("deck-stage > section");
    slides.forEach(function (s) {
      if (!s.hasAttribute("data-deck-active")) s.__countRan = false;
    });
    if (e.detail.slide) run(e.detail.slide);
  });

  // Fallback for the very first slide: when everything is inlined (standalone
  // build), deck-stage's initial `slidechange` can fire before this listener
  // is attached, so slide 1's counter is missed and stays at 0. Re-run the
  // currently-active slide once the page has settled. The per-slide guard
  // above keeps this from double-animating when the event DID arrive in time.
  function runActive() {
    run(document.querySelector("deck-stage > section[data-deck-active]"));
  }
  if (document.readyState === "complete") { runActive(); }
  else { window.addEventListener("load", runActive); }
  // Belt-and-suspenders: fonts.ready gates deck-stage's first paint, so re-check
  // shortly after in case the active slide wasn't marked yet at load.
  setTimeout(runActive, 400);

  // Print / PDF: count-up is rAF-driven and never runs for slides that were
  // never shown on screen, so their numbers print as "0". Force every countup
  // across the whole deck to its final value before printing.
  function settleAll() {
    document.querySelectorAll(".countup").forEach(function (el) {
      el.textContent = fmt(parseFloat(el.dataset.target));
    });
  }
  window.addEventListener("beforeprint", settleAll);
  // Safari/Chrome "Save as PDF" via the print dialog reliably fires beforeprint,
  // but guard with the media-query listener too for engines that only toggle it.
  var mql = window.matchMedia("print");
  if (mql.addEventListener) mql.addEventListener("change", function (e) { if (e.matches) settleAll(); });
})();
