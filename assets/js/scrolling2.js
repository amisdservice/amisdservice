document.addEventListener("DOMContentLoaded", function() {
    const marqueeContainer = document.querySelector('.latest-updates-content');

    if (marqueeContainer) {
        // Marquee content (can be updated regularly here)
        const marqueeHtml = `
            <marquee behavior="scroll" direction="left">
                <ul class="list-unstyled">
                    <li>
                        <a class="navbar-brand" href="index.html">
                            <span style="font-family: 'Adelon Bold'; font-weight: bold; color: red; font-size: 1.1em;">
                                Page under construction. Please check back later.
                            </span>
                        </a>
                        <!-- Adding a new dynamic link here -->
                        <a href="https://yourlink.com" style="color: blue; font-size: 1em; font-weight: normal;">
                            Page under construction. Please check back later.
                        </a> 
                    </li>
                </ul>
            </marquee>
        `;

        // Injecting the content dynamically
        marqueeContainer.innerHTML = marqueeHtml;
    } else {
        console.error("Marquee container not found on the page.");
    }
});
