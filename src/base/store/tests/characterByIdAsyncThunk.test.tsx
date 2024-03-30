import { fetchCharacterById } from "../slices";
global.fetch = jest.fn();

describe("CharacterById Thunk", () => {
  it("should fetch with resolved response", async () => {
    const mockCharacter = {
      name: "Greedo",
      height: "173",
      mass: "74",
      hair_color: "n/a",
      skin_color: "green",
      eye_color: "black",
      birth_year: "44BBY",
      gender: "male",
      homeworld: 23,
      films: [1],
      species: [4],
      vehicles: [],
      starships: [],
      created: "2014-12-10T17:03:30.334000Z",
      edited: "2014-12-20T21:17:50.336000Z",
      url: "https://sw-api.starnavi.io/people/15/",
    };

    (fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockCharacter),
    });

    const dispatch = jest.fn();
    const thunk = fetchCharacterById("15");

    await thunk(
      dispatch,
      () => ({}),
      () => {}
    );

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe("characters/fetchCharacterById/pending");
    expect(end[0].type).toBe("characters/fetchCharacterById/fulfilled");
    expect(end[0].payload).toEqual({
      films: [],
      info: { ...mockCharacter },
      starships: [],
    });
  });

  it("should fetch with rejected response", async () => {
    const dispatch = jest.fn();
    const thunk = fetchCharacterById("15");

    (fetch as any).mockResolvedValue({
      ok: false,
    });

    await thunk(
      dispatch,
      () => ({}),
      () => {}
    );

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe("characters/fetchCharacterById/pending");
    expect(end[0].type).toBe("characters/fetchCharacterById/rejected");
  });
});
