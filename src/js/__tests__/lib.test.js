import {calculateWallpaper} from "../lib.js";

test('should calculate wallpaper', () => {
    const heightInM = 13;
    const lengthInM = 22;

    const expected = 27;

    const result = calculateWallpaper(heightInM, lengthInM);

    expect(result).toBeCloseTo(expected, 0);
})