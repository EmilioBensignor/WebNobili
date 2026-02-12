// Image Comparison Slider
function initImageComparison(selector) {
  const containers = document.querySelectorAll(selector);

  containers.forEach(container => {
    const slider = container.querySelector('.comparison-slider');
    const before = container.querySelector('.comparison-before');
    let isDown = false;

    function move(x) {
      const rect = container.getBoundingClientRect();
      let pos = ((x - rect.left) / rect.width) * 100;
      pos = Math.max(0, Math.min(100, pos));
      slider.style.left = pos + '%';
      before.style.clipPath = 'inset(0 ' + (100 - pos) + '% 0 0)';
    }

    slider.addEventListener('mousedown', () => isDown = true);
    window.addEventListener('mouseup', () => isDown = false);
    window.addEventListener('mousemove', (e) => { if (isDown) move(e.clientX); });

    slider.addEventListener('touchstart', () => isDown = true);
    window.addEventListener('touchend', () => isDown = false);
    window.addEventListener('touchmove', (e) => { if (isDown) move(e.touches[0].clientX); });

    move(container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2);
  });
}

// Counter Animation
function initCounters(selector) {
  const counters = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseFloat(entry.target.dataset.target);
        const suffix = entry.target.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        const isDecimal = target % 1 !== 0;

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          const display = isDecimal
            ? current.toFixed(1).replace('.', ',')
            : Math.round(current).toString();
          entry.target.textContent = display + ' ' + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function initVideoModal(btnId, modalId, closeBtnId, iframeId, videoUrl) {
  const btn = document.getElementById(btnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);
  const iframe = document.getElementById(iframeId);
  if (!btn || !modal) return;
  btn.onclick = function () {
    iframe.src = videoUrl + '&autoplay=1';
    modal.style.display = 'block';
  };
  closeBtn.onclick = function () {
    modal.style.display = 'none';
    iframe.src = '';
  };
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      iframe.src = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initImageComparison('.comparison-container');
  initCounters('.counter-value');
  initVideoModal(
    'reproducirVideoWidd',
    'videoModalWidd',
    'closeModalBtnWidd',
    'youtubeIframeWidd',
    'https://www.youtube.com/embed/zq4geEVg7hM?si=iHVz7Xl6SZiV-bfN'
  );
  initVideoModal(
    'reproducirVideoWidd2020',
    'videoModalWidd2020',
    'closeModalBtnWidd2020',
    'youtubeIframeWidd2020',
    'https://www.youtube.com/embed/zq4geEVg7hM?si=iHVz7Xl6SZiV-bfN'
  );
  initVideoModal(
    'reproducirVideoThermotech',
    'videoModalThermotech',
    'closeModalBtnThermotech',
    'youtubeIframeThermotech',
    'https://www.youtube.com/embed/zq4geEVg7hM?si=iHVz7Xl6SZiV-bfN'
  );
});
