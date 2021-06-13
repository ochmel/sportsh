export function scrollToLink(link)
{
    document.querySelector(link).scrollIntoView({behavior: 'smooth'})
}

export function getPhotoUrl(id)
{
    if (id)
    {
        return window.location.origin + "/files/" + id;
    }
    return "";
}