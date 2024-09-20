export async function loadTopbar() {
    try {
        const response = await fetch('components/topbar.html');
        const topbarHTML = await response.text();
        console.log(topbarHTML); // Check if topbar content is fetched correctly
        document.getElementById('topbar-placeholder').innerHTML = topbarHTML;
    } catch (error) {
        console.error('Error loading topbar:', error);
    }
}
