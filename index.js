var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://biggamesapi.io/api/clans?page=1&pageSize=50&sort=Points&sortOrder=desc", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      
function extractAssetId(assetStr) {
  return assetStr.replace("rbxassetid://", "");
}
// Example usage
let assetStr = "rbxassetid://14976576332";
let assetId = extractAssetId(assetStr);
console.log(assetId);
