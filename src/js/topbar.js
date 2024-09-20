export async function loadTopbar() {
    const response = await fetch('components/topbar.html');
    const topbarHTML = await response.text();
    document.getElementById('topbar-placeholder').innerHTML = topbarHTML;
}
