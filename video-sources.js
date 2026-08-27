(() => {
  const VERCEL_BLOB_VIDEOS = {
    278: 'https://s7ndi867krgyx8v8.public.blob.vercel-storage.com/Indicator%20278.MOV',
    74: 'https://s7ndi867krgyx8v8.public.blob.vercel-storage.com/Indicator%2074.MOV',
    70: 'https://s7ndi867krgyx8v8.public.blob.vercel-storage.com/Indicator%2070.MOV',
    41: 'https://s7ndi867krgyx8v8.public.blob.vercel-storage.com/Indicator%2041.MOV'
  };

  Object.entries(VERCEL_BLOB_VIDEOS).forEach(([id, url]) => {
    const indicator = indicators.find(i => i.id === Number(id));
    if (indicator) {
      indicator.video = url;
      indicator.videoMime = 'video/quicktime';
      indicator.videoHost = 'Vercel Blob CDN';
    }
  });

  const previousRenderIndicator = renderIndicator;
  renderIndicator = function(id) {
    previousRenderIndicator(id);
    const indicator = indicators.find(i => i.id === Number(id));
    if (!indicator?.video) return;

    const video = document.getElementById('learning-video');
    const source = video?.querySelector('source');
    if (source) {
      source.src = indicator.video;
      source.type = indicator.videoMime || '';
      video.load();
    }

    const meta = document.querySelector('.learning-meta');
    if (meta && !meta.querySelector('.video-cdn-badge')) {
      meta.insertAdjacentHTML('beforeend', '<span class="video-cdn-badge">Streaming from Vercel Blob CDN</span>');
    }
  };

  const previousRoute = route;
  route = function() {
    previousRoute();
    if (location.pathname === '/demo-check') {
      const card = document.querySelector('#video-checks')?.closest('.card');
      if (card) {
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = 'Vercel Blob video checks';
        const checks = document.getElementById('video-checks');
        if (checks) checks.textContent = 'Click “Run Smoke Check” to verify the four Vercel Blob video URLs.';
      }
    }
  };

  document.addEventListener('click', async e => {
    const trigger = e.target.closest('[data-upgrade-action="run-smoke"]');
    if (!trigger) return;

    e.stopImmediatePropagation();
    e.preventDefault();

    const root = document.getElementById('video-checks');
    if (!root) return;
    root.innerHTML = '<div class="muted">Checking Vercel Blob video URLs…</div>';

    const results = await Promise.all(Object.entries(VERCEL_BLOB_VIDEOS).map(async ([id, url]) => {
      try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        return [`MSDS ${id}`, url, response.ok];
      } catch {
        return [`MSDS ${id}`, url, false];
      }
    }));

    root.innerHTML = results.map(([label, url, ok]) => `
      <div class="video-check ${ok ? 'ok' : 'fail'}">
        <strong>${label}</strong>
        <span>${ok ? 'Available on Vercel Blob' : 'Could not verify — test playback manually'}</span>
        <a href="${url}" target="_blank" rel="noopener">Open source</a>
      </div>`).join('');
  }, true);
})();
