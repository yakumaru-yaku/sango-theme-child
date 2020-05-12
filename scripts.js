function snsbtnRemove() {
    var path = location.pathname;
    if (path === '/contact/' || path === '/contact' || path === '/privacy-policy/' || path === '/privacy-policy') {
        $('.article-footer').remove();
    }
}
snsbtnRemove();