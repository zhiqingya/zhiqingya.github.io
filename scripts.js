function searchROM(showResults) {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const romList = document.getElementById('rom-list');
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    const romItems = romList.getElementsByClassName('rom-item');
    let found = false;

    const matchedItems = [];

    for (let i = 0; i < romItems.length; i++) {
        const item = romItems[i];
        const version = item.querySelector('p span').textContent.toLowerCase();
        const name = item.querySelector('h3').textContent.toLowerCase();

        item.style.display = 'none';

        if (version.includes(query) || name.includes(query)) {
            const result = document.createElement('div');
            result.className = 'rom-item';
            result.innerHTML = item.innerHTML;
            matchedItems.push(result);
            found = true;
        }
    }

    if (found) {
        for (let i = 0; i < matchedItems.length; i++) {
            resultsContainer.appendChild(matchedItems[i]);
        }
    } else {
        resultsContainer.innerHTML = '<p>没有找到相关的ROM。</p>';
    }

    if (showResults) {
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}