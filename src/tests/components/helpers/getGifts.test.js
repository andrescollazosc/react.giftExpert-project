import { getGift } from "../../../helpers/getGifts";

describe('Testing with getGifts Fetch', () => {
    test('Must  returning 10 items ', async() => {
        const gifs = await getGift('One punch');

        expect(gifs.length).toBe(10);
    });

    test('When parameter in empty, the arrar has 0 elements ', async () => {
        const gifs = await getGift('');

        expect(gifs.length).toBe(0);
    });
})
