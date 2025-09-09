function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
    } else {
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('collapsed');
    }
}
(document.querySelector('meta[name="author"]') || document.head.appendChild(document.createElement("meta"))).setAttribute("name", "author"), document.querySelector('meta[name="author"]').setAttribute("content", "Shrishail Bagale");
