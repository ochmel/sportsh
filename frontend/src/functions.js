export function scrollToLink(anchorLink) {
    if (anchorLink) {
        const element = document.querySelector("#" + anchorLink);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }
}

export function getPhotoUrl(id) {
    if (id) {
        return window.location.origin + "/files/" + id;
    }
    return "";
}