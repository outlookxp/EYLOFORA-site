document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-amazon-cta]");
  if (!link || typeof window.gtag !== "function") return;
  window.gtag("event", "amazon_cta_click", {
    product_slug: link.dataset.productSlug,
    asin: link.dataset.asin,
    link_type: link.dataset.linkType,
    transport_type: "beacon",
  });
});
