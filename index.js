async function fetchClanData() {
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
        return clanData;
    } catch (error) {
        console.error('Error fetching clan data:', error);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Example usage
    fetchClanData().then(data => {
        if (data) {
            console.log(data);
        }
    });
    let assetStr = "rbxassetid://14976576332";
    let assetId = extractAssetId(assetStr);
    console.log(assetId);
}
