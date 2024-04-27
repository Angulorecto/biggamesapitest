async function fetchClanDataAndCreateElements() {
    const url = 'https://biggamesapi.io/api/clans?page=1&pageSize=10&sort=Points&sortOrder=desc';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const clanData = data.data.map(clan => ({
            name: clan.Name,
            members: clan.Members,
            memberCapacity: clan.MemberCapacity,
            depositedDiamonds: clan.DepositedDiamonds,
            points: clan.Points,
            icon: clan.Icon // Add the icon property to the mapped clan data
        }));
        
        const body = document.querySelector('body');
        clanData.forEach(clan => {
            const specificResponse = await fetch(url);
            const specificData = await specificResponse.json();
            const specificClanData = specificData.data.map(clanData => ({
                desc: clanData.Desc
            }));
            const div = document.createElement('div');
            div.classList.add('clanDiv');

            const img = document.createElement('img');
            img.classList.add('clanIcon');
            if (clan.icon) {
                const id = extractAssetId(clan.icon);
                img.src = `https://biggamesapi.io/image/${id}`;
            } else {
                // Set a default image if clan.icon is not defined
                img.src = 'default-icon-url.jpg';
            }

            const name = document.createElement('h1');
            name.classList.add('clanName');
            name.innerText = clan.name;

            const members = document.createElement('p');
            members.classList.add('members');
            members.innerText = `${clan.members}/${clan.memberCapacity}`;

            const shout = document.createElement('p');
            shout.classList.add('shout');
            shout.innerText = clanData.desc; // Set the latest shout here

            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(members);
            div.appendChild(shout);
            body.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching clan data:', error);
    }
}

function extractAssetId(assetStr) {
    return assetStr.replace("rbxassetid://", "");
}

document.addEventListener("DOMContentLoaded", function() {
    fetchClanDataAndCreateElements();
});
