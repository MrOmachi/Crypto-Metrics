import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../component/NavBar/NavBar";
import CryptoContainer from "../component/Home/CryptoContainer";
import CoinDetails from "../component/Details/CoinDetails";
import { store } from "../app/store";

describe("Testing for all components", () => {
  it("Testing for the CryptoContainer Components", () => {
    const UI = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<CryptoContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(UI).toMatchSnapshot();
  });

  it("Testing for the coinDetails component", () => {
    const UI = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<CoinDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(UI).toMatchSnapshot();
  });

  it("Testing the NavBar component", () => {
    const Navbar = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(Navbar).toMatchSnapshot();
  });
});
