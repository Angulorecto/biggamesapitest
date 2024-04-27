async function fetchClanDataAndCreateElements(clans) {
    const url = `https://biggamesapi.io/api/clans?page=1&pageSize=${clans}&sort=Points&sortOrder=desc`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const clanData = data.data.map(async clan => {
            const specificResponse = await fetch(`https://biggamesapi.io/api/clan/${clan.Name}`);
            const specificData = await specificResponse.json();
            const specificClanData = specificData.data;

            return {
                name: clan.Name,
                members: specificClanData.Members.length,
                memberCapacity: specificClanData.MemberCapacity,
                depositedDiamonds: specificClanData.DepositedDiamonds,
                points: specificClanData.Points,
                desc: specificClanData.Desc // Add the description to the clan data
            };
        });

        const body = document.querySelector('body');
        for (const clan of clanData) {
            const div = document.createElement('div');
            div.classList.add('clanDiv');

            const img = document.createElement('img');
            img.classList.add('clanIcon');
            // Set the image source as needed

            const name = document.createElement('h1');
            name.classList.add('clanName');
            name.innerText = clan.name;

            const members = document.createElement('p');
            members.classList.add('members');
            members.innerText = `${clan.members}/${clan.memberCapacity}`;

            const shout = document.createElement('p');
            shout.classList.add('shout');
            shout.innerHTML = clan.desc; // Set the shout innerHTML to the description

            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(members);
            div.appendChild(shout);
            body.appendChild(div);
        }
    } catch (error) {
        console.error('Error fetching clan data:', error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchClanDataAndCreateElements(10);
});
