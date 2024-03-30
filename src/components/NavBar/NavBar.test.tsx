import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import NavBar from "./NavBar";
import { createReduxStore } from "@/base/store";

jest.mock("react-redux");

describe("NavBar component", () => {
  it("NavBar snapshot", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reduxHooks, "useDispatch").mockReturnValue(mockDispatch);
    jest.spyOn(reduxHooks, "useSelector").mockReturnValue(createReduxStore());
    const component = render(<NavBar />);

    expect(component).toMatchSnapshot();
  });
});
