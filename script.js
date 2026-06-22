// Replace subsection links with actual Overleaf URLs
// Instructions: Update the following object with your Overleaf document URLs

const overleafLinks = {
    "Everything GitHub": "https://www.overleaf.com/",
    "HTML/CSS Explained": "https://www.overleaf.com/",
    "UI/UX for the Non-Artists": "https://www.overleaf.com/",
    "Circuitry for the Unexperienced": "https://www.overleaf.com/",
    "Principles of FAFO: Guide to Prototyping": "https://www.overleaf.com/",
    "Python in 5 Minutes(ish)": "https://www.overleaf.com/",
    "Machines were Learned: Types of ML": "https://www.overleaf.com/"
};

// Initialize links on page load
document.addEventListener('DOMContentLoaded', function() {
    const subsectionLinks = document.querySelectorAll('.subsection-link');
    
    subsectionLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (overleafLinks[linkText]) {
            link.href = overleafLinks[linkText];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });

    // Remove "Coming Soon" status if link has a valid URL
    const subsections = document.querySelectorAll('.subsection');
    subsections.forEach(subsection => {
        const link = subsection.querySelector('.subsection-link');
        const status = subsection.querySelector('.status');
        if (link.href && link.href !== '#') {
            status.style.display = 'none';
        }
    });
});

// Optional: Add smooth scroll behavior for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
