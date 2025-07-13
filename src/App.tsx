import { Component, type ReactNode } from "react";
import {
  Alert,
  Button,
  Loading,
  PeopleList,
  SearchControl,
} from "./components";
import StarWarsService from "./services/StarwarsService";
import type { People } from "./types/People";

type Props = object;

type State = {
  searchTerm: string;
  results: People[];
  status: "loading" | "error" | "idle";
  brokeRender: boolean;
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
      brokeRender: false,
    };
  }

  componentDidMount(): void {
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
    if (this.state.brokeRender) throw new Error("Broke render method");

    return (
      <div className="max-w-3xl mx-auto px-2.5 my-4 flex flex-col gap-6">
        <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
          <SearchControl
            placeholder="Star Wars Person 🌚"
            value={this.state.searchTerm}
            onChange={this.handleInputSearch}
            onSearch={this.handleSearch}
            disabled={this.state.status === "loading"}
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

        <div className="flex justify-end">
          <Button
            variant="danger"
            onClick={() => {
              this.setState((prevState) => ({
                ...prevState,
                brokeRender: true,
              }));
            }}
          >
            Error Boundary
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
