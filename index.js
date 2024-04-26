async function fetchClanDataAndUpdateElement(elementId) {
    const url = 'https://biggamesapi.io/api/clans?page=1&pageSize=10&sort=Points&sortOrder=desc';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const clanData = data.data.map(clan => ({
            name: clan.Name,
            members: clan.Members,
            memberCapacity: clan.MemberCapacity,
            depositedDiamonds: clan.DepositedDiamonds,
            points: clan.Points
        }));
        const clanName = clanData[0].name; // Assuming you want to use the name of the first clan
        document.getElementById(elementId).innerHTML = clanName;
    } catch (error) {
        console.error('Error fetching clan data:', error);
    }
}

function extractAssetId(assetStr) {
  return assetStr.replace("rbxassetid://", "");
}

document.addEventListener("DOMContentLoaded", function() {
    fetchClanDataAndUpdateElement('clanNameElementId');
    let assetStr = "rbxassetid://14976576332";
    let assetId = extractAssetId(assetStr);
    console.log(assetId);
});
