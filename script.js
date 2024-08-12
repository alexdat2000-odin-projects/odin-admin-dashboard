function init_left_menu() {
    const left_panel = document.querySelector("#left-panel");

    const options_top = [
        ["home", "Home"],
        ["card-account-details-outline", "Profile"],
        ["message-reply", "Messages"],
        ["history", "History"],
        ["file-multiple", "Tasks"],
        ["account-group", "Communities"],
    ];

    const options_bottom = [
        ["cog-outline", "Settings"],
        ["face-agent", "Support"],
        ["security", "Privacy"],
    ];

    for (const [filename, name] of options_top) {
        left_panel.innerHTML += `
      <img src="static/icons/${filename}.svg" alt="${name} icon" class="action-icon">
      <p>${name}</p>`
    }
    left_panel.innerHTML += `<div></div><div></div>`
    for (const [filename, name] of options_bottom) {
        left_panel.innerHTML += `
      <img src="static/icons/${filename}.svg" alt="${name} icon" class="action-icon">
      <p>${name}</p>`
    }
}

function init_projects() {
    const projects = document.querySelector("#project-cards");

    const content = [
        ["feder-cr/linkedIn_auto_jobs_applier_with_AI", "LinkedIn_AIHawk is a tool that automates the jobs application process on LinkedIn."],
        ["Stirling-Tools / Stirling-PDF", "#1 Locally hosted web application that allows you to perform various operations on PDF files"],
        ["electron / electron", "Build cross-platform desktop apps with JavaScript, HTML, and CSS"],
        ["Raphire / Win11Debloat", "A simple, easy to use PowerShell script to remove pre-installed apps from Windows, disable telemetry, remove Bing from Windows search as well as perform various other changes to declutter and improve your Windows experience. This script works for both Windows 10 and Windows 11."],
        ["mbrg / power-pwn", " An offensive security toolset for Microsoft 365 focused on Microsoft Copilot, Copilot Studio and Power Platform"],
        ["geekan / MetaGPT", "The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming"],
    ];

    for (const [title, description] of content) {
        projects.innerHTML += `
        <div class="project-card">
          <h3>${title}</h3>
          ${description}
          <div class="project-buttons">
            <img src="static/icons/star-plus-outline.svg" alt="star">
            <img src="static/icons/eye-plus-outline.svg" alt="watch">
            <img src="static/icons/source-fork.svg" alt="fork">
          </div>
        </div>`
    }
}

function init_announcements() {
    const announcements = document.querySelector("#announcements-list");

    const content = [
        ["Copilot Metrics API Organization Team Metrics", "We’re excited to share that usage metrics for GitHub Organization Teams are now available on the public beta of the GitHub Copilot Metrics API!"],
        ["Metrics for push protection bypass requests are included in the secret scanning metrics page", "The secret scanning metrics page within an organization’s “Security” tab now includes metrics for push protection bypass requests."],
        ["Enterprise Team Metrics Now Available on the Copilot Metrics API", "We’re happy to announce that metrics for GitHub Enterprise Teams are now available on the public beta of the GitHub Copilot Metrics API as of today."],
    ];

    for (const [title, cont] of content) {
        announcements.innerHTML += `
        <div class="announcement">
          <h4>${title}</h4>
          <div class="announcement-text">${cont}</div>
        </div>`
    }
}

function init_trending() {
    const trending = document.querySelector("#trending-list");

    const people = [
        ["cat-avatar", "@Alexdat2000", "Design author"],
        ["avatar1", "@unknown_cat", "Contributor"],
        ["avatar2", "@unknown_otter", "Reviewer"],
        ["avatar3", "@unknown_bat", "Senior developer"],
    ];

    for (const [filename, name, desc] of people) {
        trending.innerHTML += `
        <div class="trending-person">
          <img src="static/images/${filename}.png" alt="${filename}">
          <div class="trending-description">
            <p>${name}</p>
            ${desc}
          </div>
        </div>`
    }
}

function init() {
    init_left_menu();
    init_projects();
    init_announcements();
    init_trending();
}


document.addEventListener("DOMContentLoaded", init);
