<script>
    document.addEventListener('DOMContentLoaded', function () {
        const burger = document.getElementById('burger');
        const navList = document.querySelector('.topbar__nav-list');

        burger.addEventListener('click', function () {
            burger.classList.toggle('open');
            navList.classList.toggle('open');
        });
    });
</script>
