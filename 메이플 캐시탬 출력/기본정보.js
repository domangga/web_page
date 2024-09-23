const API_KEY = "test_8a6a2f7dba839fcd61e60435f5bcc3f32b46250acfd8578aaddae9fad7ac3528efe8d04e6d233bd35cf2fabdeb93fb0d";
const characterName = "넌왜잘못했어";
const encodedCharacterName = encodeURIComponent(characterName);
const urlString = 'https://open.api.nexon.com/maplestory/v1/id?character_name=' + encodedCharacterName; 

fetch(urlString, {
    headers: {
        "x-nxopen-api-key": API_KEY
    }
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data); 
    const ocid = data.ocid; 
    const urlString1 = "https://open.api.nexon.com/maplestory/v1/character/basic?ocid=" + ocid + '&date=2024-09-22';
    return fetch(urlString1, {
        headers: {
            "x-nxopen-api-key": API_KEY
        }
    });
})
.then(response => {
    return response.json();
})
.then(data => console.log(data))
