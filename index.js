function stripFontTags(response) {
    return response.replace(/<\/?font[^>]*>/g, "");
}
function formatNumber(value) {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor((""+value).length/3);
    let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(3));
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
}
async function fetchClanDataAndCreateElements(clans) {
    const url = `https://biggamesapi.io/api/clans?page=1&pageSize=${clans}&sort=DepositedDiamonds&sortOrder=desc`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const clanData = data.data;

        const body = document.querySelector('body');
        for (const clan of clanData) {
            const specificResponse = await fetch(`https://biggamesapi.io/api/clan/${clan.Name}`);
            const specificData = await specificResponse.json();
            const specificClanData = specificData.data;

            const div = document.createElement('div');
            div.classList.add('clanDiv');

            const img = document.createElement('img');
            img.classList.add('clanIcon');
            if (clan.Icon) {
                const id = extractAssetId(clan.Icon);
                img.src = `https://biggamesapi.io/image/${id}`;
            } else {
                // Set a default image if clan.Icon is not defined
                img.src = 'default-icon-url.jpg';
            }

            const name = document.createElement('h1');
            name.classList.add('clanName');
            name.innerText = clan.Name;

            const members = document.createElement('p');
            members.classList.add('members');
            members.innerText = `${specificClanData.Members.length}/${specificClanData.MemberCapacity}`;

            const desc = document.createElement('p');
            desc.classList.add('desc');
            desc.innerText = specificClanData.Desc; // Set the shout text to the description

            const shout = document.createElement('p');
            shout.classList.add('shout');
            shout.innerText = stripFontTags(specificClanData.Status) + "|| " + specificClanData.StatusUsername; // Set the shout text to the description

            const diamonds = document.createElement('p');
            diamonds.classList.add('diamonds');
            diamonds.innerText = formatNumber(specificClanData.DepositedDiamonds); // Set the shout text to the description

            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(members);
            div.appendChild(shout);
            div.appendChild(desc);
            div.appendChild(diamonds);
            body.appendChild(div);
        }
    } catch (error) {
        console.error('Error fetching clan data:', error);
    }
}

function extractAssetId(assetStr) {
    return assetStr.replace("rbxassetid://", "");
}

document.addEventListener("DOMContentLoaded", function() {
    fetchClanDataAndCreateElements(10);
});
