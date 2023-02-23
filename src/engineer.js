const cardengineer = (profile) => `
<div class="text-center border-2 rounded border-sky-500>
<span class="text-2xl">${profile.getName()}</span> 
    <ul class="list-none"> 
        <li>${profile.getRole()}</li> 
        <li>ID: ${profile.getId()}</li>
        <li>Email: <a href="mailto:${profile.getEmail()}">${profile.getEmail()}</li>
        <li>GitHub: <a href="https://www.github.com/${profile.getGithub()}">${profile.getGithub()}</li>
    </ul>
</div>

`;

module.exports = cardengineer;