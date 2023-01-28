const shareData = {
    text: document.title,
    url: window.location.href
}

const btn = document.querySelector('button#share');

btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData)
        console.log('Shared successfully');
    } catch (err) {
        console.log(`Error: ${err}`)
    }
});