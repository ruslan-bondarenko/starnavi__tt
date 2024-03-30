import React from "react";
import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import CharactersList from "./CharactersList";
import { createReduxStore } from "@/base/store";

jest.mock("react-redux");

describe("CharactersList test", () => {
  it("CharactersList with empty data", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reduxHooks, "useDispatch").mockReturnValue(mockDispatch);
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue(createReduxStore());
    const component = render(<CharactersList />);

    expect(component).toMatchSnapshot();
  });

  it("CharactersList with data", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reduxHooks, "useDispatch").mockReturnValue(mockDispatch);
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue(
      createReduxStore({
        header: {
          isMenuOpen: false,
        },
        characters: {
          data: {
            previous: null,
            next: "https://sw-api.starnavi.io/people/?page=2",
            count: 2,
            results: [
              {
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
              },
              {
                name: "Wilhuff Tarkin",
                height: "180",
                mass: "unknown",
                hair_color: "auburn, grey",
                skin_color: "fair",
                eye_color: "blue",
                birth_year: "64BBY",
                gender: "male",
                homeworld: 21,
                films: [1, 6],
                species: [1],
                vehicles: [],
                starships: [],
                created: "2014-12-10T16:26:56.138000Z",
                edited: "2014-12-20T21:17:50.330000Z",
                url: "https://sw-api.starnavi.io/people/12/",
              },
            ],
          },
          selectedCharacter: null,
          isLoading: false,
          error: "",
        },
      })
    );
    const component = render(<CharactersList />);

    expect(component).toMatchSnapshot();
  });
});
