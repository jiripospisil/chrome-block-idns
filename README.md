# Block internationalized domain names (IDNs)

### What is this?

It's a Chrome extension which blocks requests to websites which use
[Internationalized domain
name](https://en.wikipedia.org/wiki/Internationalized_domain_name). In short,
it allows users to use non-ASCII based alphabets in domain names.

### That sounds useful for a lot of people.

It is useful. There's a lot of people out there who don't use the Latin
alphabet and there's no valid reason why we should force them to use it.

### Then why would I want to block it?

Because unless you're one of those people, it only opens possibilities for [IDN
homograph attacks](https://en.wikipedia.org/wiki/IDN_homograph_attack).  These
kind of [spoofing attacks](https://en.wikipedia.org/wiki/Spoofing_attack) have
been demonstrated in the past and recently [popped
up](https://www.wordfence.com/blog/2017/04/chrome-firefox-unicode-phishing/)
[again](https://www.xudongz.com/blog/2017/idn-phishing/) demonstrating there're
still cases where browsers cannot protect the user.

(Whether it's actually a browser's job to do so is a completely separate
discussion as one might argue it's the domain registrants' responsibility to
make sure these lookalike domain names cannot be registered. Nevertheless
they're out there.)

### The extension is really basic. I can't even temporarily allow a domain!

It sure is. My hope is that browsers
[will](https://bugs.chromium.org/p/chromium/issues/detail?id=683314)
[soon](https://bugzilla.mozilla.org/show_bug.cgi?id=1332714) figure out a
solution to this and the extension will not be needed.

### But it crashes and does all sorts of nasty things!

Well, it's my first Chrome extension after all! But seriously should that ever
happen, please open an issue or let me have it on Twitter
[@jiripospisil](https://twitter.com/jiripospisil).
