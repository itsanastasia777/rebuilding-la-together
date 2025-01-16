// Resources for each category
const resources = {
    victim: [
        { text: "Los Angeles Regional Food Bank", link: "https://www.lafoodbank.org/" },
        { text: "California Fire Foundation", link: "https://www.cafirefoundation.org/" },
        { text: "Federal Assistance Programs", link: "https://www.disasterassistance.gov/" },
        { text: "United Way of Greater Los Angeles", link: "https://www.unitedwayla.org/" },
        { text: "Crisis Text Line", link: "https://www.crisistextline.org/" },
        { text: "American Red Cross Disaster Relief", link: "https://www.redcross.org/local/california.html" },
        { text: "211 LA County", link: "https://211la.org/" },
        { text: "California Department of Social Services", link: "https://www.cdss.ca.gov/" },
    ],
    volunteerLocal: [
        { text: "L.A. Works", link: "https://www.laworks.com/" },
        { text: "Local Fire Agencies", link: "https://www.lafd.org/" },
        { text: "Mutual Aid Groups", link: "https://www.mutualaid.org/" },
        { text: "VolunteerMatch", link: "https://www.volunteermatch.org/" },
        { text: "HandsOn Greater Los Angeles", link: "https://www.handsonla.org/" },
        { text: "Red Cross Volunteer Opportunities", link: "https://www.redcross.org/volunteer/" },
        { text: "Team Rubicon", link: "https://teamrubiconusa.org/" },
        { text: "Los Angeles Emergency Preparedness Foundation", link: "https://laepf.org/" },
    ],
    volunteerRemote: [
        { text: "Volunteer with California Fire Foundation", link: "https://www.cafirefoundation.org/volunteer/" },
        { text: "Verified GoFundMe Campaigns", link: "https://www.gofundme.com/c/act/california-wildfires" },
        { text: "Local Nonprofits Needing Support", link: "https://www.nonprofitlist.org/" },
        { text: "Virtual Red Cross Volunteering", link: "https://www.redcross.org/volunteer/" },
        { text: "Disaster Recovery Volunteering with Team Rubicon", link: "https://teamrubiconusa.org/" },
        { text: "Charity Navigator: Remote Opportunities", link: "https://www.charitynavigator.org/" },
        { text: "All for Good", link: "https://www.allforgood.org/" },
        { text: "DoSomething.org", link: "https://www.dosomething.org/" },
    ],
    donate: [
        { text: "GoFundMe Campaigns", link: "https://www.gofundme.com/c/act/california-wildfires" },
        { text: "Los Angeles Regional Food Bank", link: "https://www.lafoodbank.org/donate/" },
        { text: "California Fire Foundation", link: "https://www.cafirefoundation.org/donate/" },
        { text: "American Red Cross", link: "https://www.redcross.org/donate/donation.html/" },
        { text: "United Way of Greater Los Angeles", link: "https://www.unitedwayla.org/donate" },
        { text: "Direct Relief", link: "https://www.directrelief.org/" },
        { text: "GlobalGiving Wildfire Relief Fund", link: "https://www.globalgiving.org/projects/california-wildfire-relief-fund/" },
        { text: "California Community Foundation Wildfire Relief Fund", link: "https://www.calfund.org/wildfire-relief-fund/" },
    ],
    petition: [
        { text: "Start or Support a Petition on Change.org", link: "https://www.change.org" },
        { text: "File a Complaint with LA County", link: "https://www.lacity.org/" },
        { text: "Consult a Lawyer or Advocate", link: "https://www.findlaw.com/" },
        { text: "Wildfire-Related Legislative Petitions", link: "https://www.wildfirereform.com/" },
        { text: "California Public Utilities Commission", link: "https://www.cpuc.ca.gov/" },
        { text: "Petition for Fire Safety Policies", link: "https://www.petitiononline.com/" },
        { text: "Contact Your Local Representative", link: "https://www.house.gov/representatives/find-your-representative" },
        { text: "Legal Aid Foundation of Los Angeles", link: "https://lafla.org/" },
    ],
    supportGroups: [
        { text: "Facebook Support Groups", link: "https://www.facebook.com/groups/" },
        { text: "SAMHSA Disaster Distress Helpline", link: "https://www.samhsa.gov/find-help/disaster-distress-helpline" },
        { text: "NAMI: National Alliance on Mental Illness", link: "https://www.nami.org/Home" },
        { text: "Reddit Communities (Wildfire Relief)", link: "https://www.reddit.com/r/Wildfire/" },
        { text: "Mental Health America", link: "https://mhanational.org/" },
        { text: "Crisis Text Line", link: "https://www.crisistextline.org/" },
        { text: "Disaster Recovery Support Groups", link: "https://www.disasterrecoverygroup.org/" },
        { text: "Therapy for Fire Victims", link: "https://www.betterhelp.com/" },
    ],
    updates: [
        { text: "Evacuation Zones (Ready LA)", link: "https://ready.lacounty.gov/" },
        { text: "Temporary Shelters in LA", link: "https://www.lacity.org/" },
        { text: "Relief Fund Applications", link: "https://www.disasterassistance.gov/" },
        { text: "California Fire Updates", link: "https://www.fire.ca.gov/incidents/" },
        { text: "Los Angeles County Emergency Alerts", link: "https://ready.lacounty.gov/emergency-alerts/" },
        { text: "Wildfire Air Quality Monitoring", link: "https://www.airnow.gov/" },
        { text: "Local Road Closures", link: "https://quickmap.dot.ca.gov/" },
        { text: "Real-Time Wildfire Maps", link: "https://www.fireweatheravalanche.org/" },
    ],
};

// Function to dynamically display links for a selected category
function showLinks(category) {
    const container = document.getElementById("response-buttons");
    container.innerHTML = ""; // Clear previous buttons

    // Validate category
    if (!resources[category]) {
        container.innerHTML = "<p>No resources available for this category.</p>";
        return;
    }

    // Generate resource buttons
    resources[category].forEach((resource) => {
        const button = document.createElement("a");
        button.href = resource.link;
        button.target = "_blank";
        button.className = "btn";
        button.textContent = resource.text;
        container.appendChild(button);
    });

    // Scroll to the section with dynamically generated buttons
    document.getElementById("dynamic-links").scrollIntoView({ behavior: "smooth" });
}

// Confirm the JavaScript file is loaded
console.log("JavaScript loaded successfully!");
