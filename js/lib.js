export function calculateWallpaper(heightInM, lengthInM) {
    const brideOfWallpaper = 1.06; //ширина рулона
    const numberOfColumns = lengthInM / brideOfWallpaper; //число полотнищ
    const lengthOfWallpaper = 10; //длина рулона
    const totalHeightInM = heightInM + 0.1; //высота стены с запасом
    const totalNumberOfColumns = lengthOfWallpaper / totalHeightInM; //количество полных полос из одного рулона
    const wallpaper = numberOfColumns / totalNumberOfColumns; //количество рулонов
    return wallpaper;
}