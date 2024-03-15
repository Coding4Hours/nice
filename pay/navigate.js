navigator.serviceWorker.addEventListener("message", (event) => {
  location.replace("https://blobe.geometrytip.site/launch.html?domain=" + event.data.url);
});
