const fetchOcid = async () => {
    const urlString = 'https://open.api.nexon.com/maplestory/v1/id?character_name=' + characterName;

    const answer = await fetch(urlString, {
        headers: {
            'x-nxopen-api-key': API_KEY,
        },
    });
    const data = await answer.json();
    setOcid(data.ocid);
};