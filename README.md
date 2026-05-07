# 🌿 Cringe LinkedIn Posts Blocker

A Chromium extension that blocks LinkedIn and tells you to go touch some grass.

---

## What it does

Intercepts any attempt to visit `linkedin.com` and replaces it with a flat, sensible reminder that the whole feed is cringe. Includes a toggle to temporarily disable the blocker when you absolutely must log on.

---

## Installation

This extension is not on the Chrome Web Store. Load it manually:

1. Download or clone this repo
2. Open Chrome (or any Chromium-based browser) and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the folder containing the extension files

The extension icon will appear in your toolbar.

---

## Usage

| Action | How |
|---|---|
| Turn blocker on/off | Click the toolbar icon and flip the toggle |
| Navigate away when blocked | Hit **Go Back** or **Close Tab** on the blocked page |

State persists across browser restarts — if you turn it off, it stays off until you turn it back on.

---

## Files

```
manifest.json       Extension config (Manifest V3)
rules.json          declarativeNetRequest rule — redirects linkedin.com
blocked.html        The page shown instead of LinkedIn
popup.html          Toolbar popup with the on/off toggle
popup.js            Toggle logic (enables/disables ruleset, persists state)
icons/
  icon16.png
  icon48.png
  icon128.png
```

---

## Permissions used

| Permission | Why |
|---|---|
| `declarativeNetRequest` | Redirects linkedin.com requests |
| `storage` | Remembers whether the blocker is on or off |
| `host_permissions: *://*.linkedin.com/*` | Required to match and redirect LinkedIn URLs |

---

## Browser compatibility

Works on any Chromium-based browser that supports Manifest V3:

- Google Chrome 88+
- Microsoft Edge 88+
- Brave
- Arc

Firefox is not supported (uses a different extension API).

---

## License

Do whatever you want with it. Just go touch some grass occasionally.
