// Resources for each category
const resources = {
    victim: [
        { text: "Los Angeles Regional Food Bank", link: "https://www.lafoodbank.org/" },
        { text: "California Fire Foundation", link: "https://www.cafirefoundation.org/" },
        { text: "Federal Assistance Programs", link: "https://www.disasterassistance.gov/" },
    ],
    volunteerLocal: [
        { text: "L.A. Works", link: "https://www.laworks.com/" },
        { text: "Local Fire Agencies", link: "https://www.lafd.org/" },
        { text: "Mutual Aid Groups", link: "https://www.mutualaid.org/" },
    ],
    volunteerRemote: [
        { text: "Volunteer with California Fire Foundation", link: "https://www.cafirefoundation.org/volunteer/" },
        { text: "Verified GoFundMe Campaigns", link: "https://www.gofundme.com/c/act/california-wildfires" },
        { text: "Local Nonprofits Needing Support", link: "https://www.nonprofitlist.org/" },
    ],
    donate: [
        { text: "GoFundMe Campaigns", link: "https://www.gofundme.com/c/act/california-wildfires" },
        { text: "Los Angeles Regional Food Bank", link: "https://www.lafoodbank.org/donate/" },
        { text: "California Fire Foundation", link: "https://www.cafirefoundation.org/donate/" },
    ],
    petition: [
        { text: "Start or Support a Petition on Change.org", link: "https://www.change.org" },
        { text: "File a Complaint with LA County", link: "https://www.lacity.org/" },
        { text: "Consult a Lawyer or Advocate", link: "https://www.findlaw.com/" },
    ],
    supportGroups: [
        { text: "Facebook Support Groups", link: "https://www.facebook.com/groups/" },
        { text: "SAMHSA Disaster Distress Helpline", link: "https://www.samhsa.gov/find-help/disaster-distress-helpline" },
        { text: "NAMI: National Alliance on Mental Illness", link: "https://www.nami.org/Home" },
    ],
    updates: [
        { text: "Evacuation Zones (Ready LA)", link: "https://ready.lacounty.gov/" },
        { text: "Temporary Shelters in LA", link: "https://www.lacity.org/" },
        { text: "Relief Fund Applications", link: "https://www.disasterassistance.gov/" },
    ],
};

// Function to dynamically display links for a selected category
function showLinks(category) {
    // Validate category
    if (!resources[category]) {
        console.error("Invalid category:", category);
        return;
    }

    // Get the container where the links will be displayed
    const container = document.getElementById("response-buttons");
    container.innerHTML = ""; // Clear any previously displayed links

    // Loop through the resources for the selected category and create buttons
    resources[category].forEach((resource) => {
        const button = document.createElement("a");
        button.href = resource.link;
        button.target = "_blank"; // Open link in a new tab
        button.className = "btn"; // Apply button styling
        button.textContent = resource.text;
        container.appendChild(button);
    });

    // Scroll to the section with the dynamically generated buttons
    document.getElementById("dynamic-links").scrollIntoView({ behavior: "smooth" });
}

// Log a message to confirm the JavaScript file is loaded
console.log("JavaScript loaded successfully!");
