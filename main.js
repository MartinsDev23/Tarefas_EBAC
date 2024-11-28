document.addEventListener('DOMContentLoaded', function(){
    
    const imageAvatar = document.getElementById('image-avatar');
    const nome = document.getElementById('name-profile');
    const username = document.getElementById('username-profile');
    const repo = document.getElementById('repo');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const linkProfile = document.getElementById('link-profile');

    fetch("https://api.github.com/users/MartinsDev23")
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nome.innerText = json.name;
        imageAvatar.src = json.avatar_url;
        username.innerText = json.login;
        repo.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        linkProfile.innerHTML = `<a href="${json.html_url}" id="link-profile" class="profile-link">Ver no Github</a>`
    })
})

