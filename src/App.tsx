import { Component, type ReactNode } from "react";
import { SearchControl } from "./components";

type Props = object;

type State = {
  searchTerm: string;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const searchTerm = localStorage.getItem("searchTerm") ?? "";

    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      searchTerm,
    };
  }

  handleInputSearch(value: string) {
    this.setState((prevState) => ({ ...prevState, searchTerm: value }));
  }

  handleSearch() {
    localStorage.setItem("searchTerm", this.state.searchTerm);
  }

  render(): ReactNode {
    return (
      <div className="max-w-3xl mx-auto px-2.5 my-4">
        <div className="px-4 py-4 border-2 border-zinc-200 rounded-lg">
          <SearchControl
            placeholder="Pokemon Name 🦄"
            value={this.state.searchTerm}
            onChange={this.handleInputSearch}
            onSearch={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default App;
