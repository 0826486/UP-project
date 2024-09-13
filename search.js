function searchTMI() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    // 두 개의 목록 가져오기
    const tmiItems = document.querySelectorAll('.tmi-container ul li');
    const tmi2Items = document.querySelectorAll('.tmi2-container ul li');

    // 모든 항목들을 확인하고, 검색어가 포함된 항목만 표시
    tmiItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
            item.style.display = ''; // 검색어가 있으면 보이기
        } else {
            item.style.display = 'none'; // 검색어가 없으면 숨기기
        }
    });

    tmi2Items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
            item.style.display = ''; // 검색어가 있으면 보이기
        } else {
            item.style.display = 'none'; // 검색어가 없으면 숨기기
        }
    });
}

// 엔터키를 눌렀을 때도 검색이 가능
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchTMI(); // 엔터키를 누르면 검색 함수 호출
    }
});
