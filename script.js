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
        projects.innerHTML += `<div class="project-card">
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

function init() {
    init_projects();
}


document.addEventListener("DOMContentLoaded", init);
