import { render, screen } from "@testing-library/react";

import CharacterCard from "./CharacterCard";
import { describe, it } from "@jest/globals";

declare const expect: jest.Expect;

const character = {
  name: "Obi-Wan Kenobi",
  height: "182",
  mass: "77",
  hair_color: "auburn, white",
  skin_color: "fair",
  eye_color: "blue-gray",
  birth_year: "57BBY",
  gender: "male",
  homeworld: 20,
  films: [1, 2, 3, 4, 5, 6],
  species: [1],
  vehicles: [38],
  starships: [48, 59, 64, 65, 74],
  created: "2014-12-10T16:16:29.192000Z",
  edited: "2014-12-20T21:17:50.325000Z",
  url: "https://sw-api.starnavi.io/people/10/",
};

describe("CharacterCard component", () => {
  it("CharacterCard renders", () => {
    render(<CharacterCard character={character} />);

    expect(screen.getByText("Obi-Wan Kenobi")).toBeInTheDocument();
  });

  it("CharacterCard snapshot", () => {
    const card = render(<CharacterCard character={character} />);

    expect(card).toMatchSnapshot();
  });
});
