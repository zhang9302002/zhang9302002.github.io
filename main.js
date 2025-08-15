// main.js
document.addEventListener('DOMContentLoaded', function () {
    // DOM refs
    const pubList = document.getElementById('publications-list');
    const pubYears = document.getElementById('pub-years');
    const pubTopics = document.getElementById('pub-topics');
    const btnSelected = document.getElementById('show-selected');
    const btnDate = document.getElementById('show-date');
    const btnTopic = document.getElementById('show-topic');

    // Collect all years and topics
    const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
    const topicsSet = new Set();
    publications.forEach(pub => (pub.topics || []).forEach(t => topicsSet.add(t)));
    // const topics = Array.from(topicsSet);
    const topics = Array.from(topicsSet);


    // Render year links
    pubYears.innerHTML = "<strong>Year:</strong> " + years.map(y =>
        `<a href="#year-${y}" class="pub-year-link">${y}</a>`
    ).join(" / ");

    // Render topic links
    pubTopics.innerHTML = "<strong>Research Topics</strong>: " +
        topics.map(t =>
            `<a href="#topic-${encodeURIComponent(t)}" class="pub-topic-link">${t}</a>`
        ).join(" / ");

    function scrollToPubList() {
        // Some bugs
        const pubList = document.getElementById('publications-anchor');
        if (pubList) {
            // pubList.scrollIntoView({ behavior: "smooth", block: "start" });
            pubList.scrollIntoView();
            console.log('scrool to anchor')
        } else {
            console.error('Error')
        }
    }

    // Switch logic
    function setActive(btn) {
        [btnSelected, btnDate, btnTopic].forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    function renderSelected() {
        setActive(btnSelected);
        pubList.innerHTML = publications.filter(p => p.selected).map(renderPub).join('');
    }

    function renderByDate() {
        setActive(btnDate);
        let html = '';
        years.forEach(year => {
            html += `<h3 id="year-${year}" class="pub-sticky-header">${year}</h3>`;
            html += publications.filter(p => p.year === year).map(renderPub).join('');
        });
        pubList.innerHTML = html;
    }

    function renderByTopic() {
        setActive(btnTopic);
        let html = '';
        topics.forEach(topic => {
            html += `<h3 id="topic-${encodeURIComponent(topic)}" class="pub-sticky-header">${topic}</h3>`;
            html += publications.filter(p => p.topics && p.topics.includes(topic)).map(renderPub).join('');
        });
        pubList.innerHTML = html;
    }

    // Publication HTML
    function renderPub(pub) {
        // 匹配 images/xxx.任意图片后缀，转为 images/webp/xxx.webp
        let webpImage = pub.image.replace(/images\/([^\/]+)\.(png|jpg|jpeg)$/i, 'images/webp/$1.webp');

        return `
            <table class="publication-table">
            <tr>
                <td class="pub-img-cell">
                    <img src="${webpImage}" alt="pub-img" class="pub-img" loading="lazy">
                </td>
                <td class="pub-text-cell">
                    <div class="publication-title">${pub.title}</div>
                    <div class="publication-authors">${pub.authors}</div>
                    <div class="publication-venue">${pub.venue}, ${pub.year}</div>
                    <div class="publication-links">
                        ${pub.links ? pub.links.map(link => `<a href="${link.url}">[${link.label}]</a>`).join(' ') : ''}
                    </div>
                    ${pub.badge ? `<span class="pub-badge">${pub.badge}</span>` : ''}
                </td>
            </tr>
            </table>
        `;
        // <div class="publication-desc">${pub.description || ''}</div>
    }

    // Initial render
    renderSelected();

    // Event listeners
    btnSelected.onclick = function () {
        renderSelected();
        setTimeout(scrollToPubList, 0);
    };
    btnDate.onclick = function () {
        renderByDate();
        setTimeout(scrollToPubList, 0);
    };
    btnTopic.onclick = function () {
        renderByTopic();
        setTimeout(scrollToPubList, 0);
    };

    // Year/topic anchor jump
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('pub-year-link')) {
            renderByDate();
            setTimeout(() => {
                document.getElementById(e.target.getAttribute('href').slice(1)).scrollIntoView({ behavior: "smooth", block: "start" });
            }, 10);
            e.preventDefault();
        }
        if (e.target.classList.contains('pub-topic-link')) {
            renderByTopic();
            setTimeout(() => {
                document.getElementById(e.target.getAttribute('href').slice(1)).scrollIntoView({ behavior: "smooth", block: "start" });
            }, 10);
            e.preventDefault();
        }
    });
});
