# ARK Program 26-27 Educational Resources

A website hosting educational resources for UCLA's ARK Program, covering WebDev, PCB Design, and Machine Learning.

## Sections

### 1. Intro to WebDev
- Everything GitHub
- HTML/CSS Explained
- UI/UX for the Non-Artists

### 2. Intro to PCB Design
- Circuitry for the Unexperienced
- Principles of FAFO: Guide to Prototyping

### 3. Machine Learning
- Python in 5 Minutes(ish)
- Machines were Learned: Types of ML

## How to Update Overleaf Links

1. Open `script.js`
2. Update the `overleafLinks` object with your Overleaf document URLs
3. Replace the placeholder URLs (currently `https://www.overleaf.com/`) with actual links to your Overleaf projects

Example:
```javascript
const overleafLinks = {
    "Everything GitHub": "https://www.overleaf.com/read/abcdefghijkl",
    "HTML/CSS Explained": "https://www.overleaf.com/read/mnopqrstuvwx",
    // ... etc
};
```

## Hosting

This website can be hosted on GitHub Pages. Enable it in repository settings:
1. Go to Settings → Pages
2. Select `main` branch as source
3. The site will be available at `https://ttnandi156.github.io/ARK-Program-26-27/`

## File Structure

```
ARK-Program-26-27/
├── index.html       # Main webpage structure
├── styles.css       # Website styling
├── script.js        # Link management and interactivity
└── README.md        # This file
```

## Notes

- All subsections currently display a "Coming Soon" status
- Status labels automatically hide when Overleaf links are added
- The site is fully responsive and mobile-friendly
