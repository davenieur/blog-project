export const extractSlugs = ( array1, array2 ) => {
    let slugsEN = [];
    let slugsES = [];

    const extractSlug = (element) => {
        slugsEN.push(element.slugEN);
        slugsES.push(element.slugES);
    };

    array1.forEach(extractSlug);
    array2.forEach(extractSlug);

    return [slugsEN, slugsES];
}