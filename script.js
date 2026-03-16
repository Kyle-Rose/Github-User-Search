userInput = document.getElementById('username-input');
searchButton = document.getElementById('search-button');
userProfile = document.getElementById('user-profile');
userAvatar = document.getElementById('user-avatar-img');
userFollowers = document.getElementById('user-followers');
userRepos = document.getElementById('user-repos');


async function fetchGitHubUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return await response.json();
}

searchButton.addEventListener('click', async () => {
    const username = userInput.value.trim();
    if (username) {
        try {
            const userData = await fetchGitHubUser(username);
            userAvatar.src = userData.avatar_url;
            userFollowers.textContent = `Followers: ${userData.followers}`;
            userRepos.textContent = `Public Repos: ${userData.public_repos}`;
            userProfile.textContent = `GitHub User: ${userData.login}`;
        } catch (error) {
            alert(error.message);
            userProfile.style.display = 'none';
        }
    }
});

