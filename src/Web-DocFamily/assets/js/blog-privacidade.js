function toggleCard(id, btn) {
    const content = document.getElementById(id);
    const icon = btn.querySelector('ion-icon');

    content.classList.toggle('active');

    if (content.classList.contains('active')) {
        btn.innerHTML = 'Leia menos <ion-icon name="chevron-up-outline" aria-hidden="true"></ion-icon>';
    } else {
        btn.innerHTML = 'Leia mais <ion-icon name="chevron-down-outline" aria-hidden="true"></ion-icon>';
    }
}
