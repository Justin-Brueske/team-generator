const cardengineer = (profile) => `
<div>
<span class="text-2xl">${profile.getName()}</span> 
    <ul class="list-none"> 
        <li>${profile.getRole()}</li> 
        <li>${profile.getId()}</li>
        <li>${profile.getEmail()}</li>
        <li>${profile.getGithub()}</li>
    </ul>
<div>


`;

module.exports = cardengineer;