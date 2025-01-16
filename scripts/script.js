function showLinks(category) {
    console.log("Button clicked for category:", category);

    // Get the response container
    const container = document.getElementById("response-buttons");
    container.innerHTML = ""; // Clear previous buttons

    // Example hardcoded response for testing
    const testLinks = [
        { text: "Example Link 1", link: "https://example.com" },
        { text: "Example Link 2", link: "https://example.com" },
    ];

    // Create buttons dynamically
    testLinks.forEach((resource) => {
        const button = document.createElement("a");
        button.href = resource.link;
        button.target = "_blank";
        button.className = "btn";
        button.textContent = resource.text;
        container.appendChild(button);
    });

    // Scroll to the section with dynamic buttons
    document.getElementById("dynamic-links").scrollIntoView({ behavior: "smooth" });
}
