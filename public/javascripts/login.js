/**
 * Created by Ruslan on 11/5/2017.
 */

document.getElementById('toggleProfile').addEventListener('click', function () {
    [].map.call(document.querySelectorAll('.profile'), function(el) {
        el.classList.toggle('profile--open');
    });
});