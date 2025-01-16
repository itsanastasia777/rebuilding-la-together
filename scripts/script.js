// Resources for each category
const resources = {
    victim: [
        { text: "Los Angeles Regional Food Bank", link: "https://www.lafoodbank.org/" },
        { text: "California Fire Foundation", link: "https://www.cafirefoundation.org/" },
    ],
    volunteerLocal: [
        { text: "L.A. Works", link: "https://www.laworks.com/" },
    ],
};

// Function to display links dynamically
function showLinks(category) {
    const container = document.getElementById("response-buttons");
    container.innerHTML = ""; // Clear previous buttons
    resources[category].forEach((resource) => {
        const btn = document.createElement("a");
        btn.href = resource.link;
        btn.target = "_blank";
        btn.className = "btn";
        btn.textContent = resource.text;
        container.appendChild(btn);
    });
}

