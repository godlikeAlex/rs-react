import { Component, type ReactNode } from "react";
import { Alert, Loading, PeopleList, SearchControl } from "./components";
import StarWarsService from "./services/StarwarsService";
import type { People } from "./types/People";

type Props = object;

type State = {
  searchTerm: string;
  results: People[];
  status: "loading" | "error" | "idle";
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const searchTerm = localStorage.getItem("searchTerm") ?? "";

    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      searchTerm,
      status: "loading",
      results: [],
    };

    this.loadResults();
  }

  handleInputSearch(value: string) {
    this.setState((prevState) => ({ ...prevState, searchTerm: value }));
  }

  handleSearch() {
    localStorage.setItem("searchTerm", this.state.searchTerm);

    this.loadResults();
  }

  async loadResults() {
    this.setState((prevState) => ({ ...prevState, status: "loading" }));

    try {
      const response = await StarWarsService.search(this.state.searchTerm);

      this.setState((prevState) => ({
        ...prevState,
        results: response.results,
        status: "idle",
      }));
    } catch {
      this.setState((prevState) => ({
        ...prevState,
        results: [],
        status: "error",
      }));
    }
  }

  render(): ReactNode {
    return (
      <div className="max-w-3xl mx-auto px-2.5 my-4 flex flex-col gap-6">
        <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
          <SearchControl
            placeholder="Star Wars Person 🌚"
            value={this.state.searchTerm}
            onChange={this.handleInputSearch}
            onSearch={this.handleSearch}
          />
        </div>

        <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
          {this.state.status === "loading" && <Loading />}
          {this.state.status === "error" && (
            <Alert variant="danger">Whoops... Something went wrong</Alert>
          )}
          {this.state.status === "idle" && (
            <PeopleList peoples={this.state.results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
