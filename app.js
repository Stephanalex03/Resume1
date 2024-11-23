let selectedTemplate = null;

function loadTemplate(template) {
    selectedTemplate = template;
    document.getElementById("resume-template-output").innerHTML = `
        <h3>Preview of ${template}</h3>
        <div id="template-preview"></div>
    `;
}

function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    let resumeContent = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Education</h2>
        <p>${education}</p>
    `;

    document.getElementById("template-preview").innerHTML = resumeContent;
}
