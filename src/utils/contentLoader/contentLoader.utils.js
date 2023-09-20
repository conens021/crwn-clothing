export const loadImage = async (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve(image));
        image.addEventListener('error', reject);
        image.src = src;
    });
}
