import { Token } from "./config.js";

document.addEventListener('DOMContentLoaded', function(){
    
    const imageAvatar = document.getElementById('image-avatar');
    const nome = document.getElementById('name-profile');
    const username = document.getElementById('username-profile');
    const repo = document.getElementById('repo');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const linkProfile = document.getElementById('link-profile');

    async function consumirAPI() {
        const url = 'https://api.github.com/users/MartinsDev23';

        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (res.ok) {
                console.log('Tudo certo com a API !')
            }
            else {
                throw new Error (res.status);
            }
            
            const data = await res.json();

            imageAvatar.src = data.avatar_url
            nome.textContent = data.name
            username.textContent = data.login
            repo.textContent = data.public_repos
            followers.textContent = data.followers
            following.textContent = data.following
            linkProfile.innerHTML = `<a href="${data.html_url}" id="link-profile" class="profile-link">Ver no Github</a>`
            
        } 
            
            catch (error) {
                console.error('Erro ao consumir a API:', error);
            }
    }

    consumirAPI();
})