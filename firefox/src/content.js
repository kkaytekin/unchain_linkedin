function removeNewsFeed() {
  const feedSelectors = [
    '[data-id="main-feed"]',
    '.core-rail',
    '.feed-container-theme',
    '.feed-container',
    '[role="main"] .scaffold-finite-scroll',
    '.scaffold-finite-scroll__content',
    '.feed-shared-update-v2',
    'main .scaffold-finite-scroll'
  ];

  feedSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.display = 'none';
      console.log('LinkedIn Unchain: Hidden element with selector:', selector);
    });
  });

  const feedContainer = document.querySelector('.scaffold-layout__main');
  if (feedContainer) {
    const replacement = document.createElement('div');
    replacement.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      height: 400px;
      background: #f3f6f8;
      border-radius: 8px;
      margin: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;
    replacement.innerHTML = `
      <div style="text-align: center; color: #666;">
        <h2 style="margin: 0 0 10px 0; color: #0a66c2;">LinkedIn News Feed Removed</h2>
        <p style="margin: 0;">Stay focused and productive! 🎯</p>
      </div>
    `;

    feedContainer.innerHTML = '';
    feedContainer.appendChild(replacement);
  }
}

function waitForPageLoad() {
  if (document.readyState === 'complete') {
    setTimeout(removeNewsFeed, 1000);
  } else {
    window.addEventListener('load', () => {
      setTimeout(removeNewsFeed, 1000);
    });
  }
}

const observer = new MutationObserver(() => {
  removeNewsFeed();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

waitForPageLoad();

setInterval(removeNewsFeed, 3000);