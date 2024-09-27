const API_KEY = "test_8a6a2f7dba839fcd61e60435f5bcc3f32b46250acfd8578aaddae9fad7ac3528efe8d04e6d233bd35cf2fabdeb93fb0d";
        
document.getElementById('searchButton').addEventListener('click', () => {
    const characterName = document.getElementById('characterName').value;
    const encodedCharacterName = encodeURIComponent(characterName);
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = ''; // 이전 검색 결과 초기화
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);  // 하루 전으로 설정
    const formattedDate = yesterday.toISOString().slice(0, 10); // 날짜를 'YYYY-MM-DD' 형식으로 포맷

    fetch(`https://open.api.nexon.com/maplestory/v1/id?character_name=${encodedCharacterName}`, {
        headers: {
            "x-nxopen-api-key": API_KEY
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('캐릭터를 찾을 수 없습니다.');
        }
        return response.json();
    })
    .then(data => {
        const ocid = data.ocid; 
        const urlString1 = 'https://open.api.nexon.com/maplestory/v1/character/cashitem-equipment?ocid='+ocid+'&date='+formattedDate;
        return fetch(urlString1, {
            headers: {
                "x-nxopen-api-key": API_KEY
            }
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('캐시 아이템을 찾을 수 없습니다.');
        }
        return response.json();
    })
    .then(data => {
        // 캐시 아이템 출력
        if (data.cash_item_equipment_base.length === 0) {
            itemsContainer.innerHTML = '<p>캐시 아이템이 없습니다.</p>';
        } else {
            data.cash_item_equipment_base.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `
                    <img src="${item.cash_item_icon}" alt="${item.cash_item_name}">
                    <h3>${item.cash_item_name}</h3>
                    <p>부위: ${item.cash_item_equipment_part}</p>
                `;
                itemsContainer.appendChild(itemDiv);
            });
        }
    })
    
    const characterInfoUrl = `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${ocid}&date=${formattedDate}`;
        return fetch(characterInfoUrl, {
            headers: {
                "x-nxopen-api-key": API_KEY
            }
        })
    
    .then(response => {
        if (!response.ok) {
            throw new Error('캐릭터 정보를 찾을 수 없습니다.');
        }
        return response.json();
    })
    .then(characterData => {
        // 캐릭터 기본 정보 출력
        characterInfoContainer.innerHTML = `
            <h2>캐릭터 정보</h2>
            <p>레벨: ${characterData.level}</p>
            <p>직업: ${characterData.job}</p>
            <p>길드: ${characterData.guild_name}</p>
        `;
    })
    .catch(error => {
        itemsContainer.innerHTML = `<p>${error.message}</p>`;
    });
});