chrome.webRequest.onBeforeRequest.addListener(details => {
  try {
    const url = new URL(details.url);
    const hasIdn = url.hostname.split('.').some(label => label.startsWith('xn--'));

    return { cancel: hasIdn };
  } catch (err) {
    console.error(err.stack);
    return { cancel: false };
  }
}, { urls: ['<all_urls>'] }, ['blocking']);
