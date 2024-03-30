import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import Header from "./Header";
import { createReduxStore } from "@/base/store";

jest.mock("react-redux");

describe("Header component", () => {
  it("Header snapshot", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reduxHooks, "useDispatch").mockReturnValue(mockDispatch);
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue(createReduxStore());
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
