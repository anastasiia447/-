import configureMockStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "./Search";

const mockStore = configureMockStore();

describe("Search component", () => {
  test("trims user input", async () => {
    const store = mockStore({
      favorites: [],
      cart: [],
    });
    const setSearchData = jest.fn();
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Search
            setSearchData={setSearchData}
            searchData={""}
            totalProducts={10}
          />
        </Provider>
      </BrowserRouter>
    );
    const input = getByRole("searchbox");
    userEvent.type(input, " Hewlett-Packard ");

    await waitFor(() => {
      expect(setSearchData).toHaveBeenCalledWith("Hewlett-Packard");
    });
  });
});