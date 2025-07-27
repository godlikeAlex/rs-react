import { renderHook } from "@testing-library/react";
import { describe, expect, it, afterEach, vi } from "vitest";
import useLocalStorage from "../useLocalStorage";

const EXAMPLE_STORAGE_KEY = "example";

describe("useLocalStorage hook", () => {
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should return 3 functions: get, set, remove", () => {
    const { result } = renderHook(() => useLocalStorage("example"));

    expect(typeof result.current.get).toBe("function");
    expect(typeof result.current.set).toBe("function");
    expect(typeof result.current.remove).toBe("function");
  });

  it("should get correct value from localStorage", () => {
    const exampleValue = "Hello";
    localStorage.setItem(EXAMPLE_STORAGE_KEY, JSON.stringify(exampleValue));

    const { result } = renderHook(() => useLocalStorage(EXAMPLE_STORAGE_KEY));

    expect(result.current.get()).toEqual(exampleValue);
  });

  it("should set correct value to localStorage", () => {
    const exampleValue = "Hello";

    const { result } = renderHook(() => useLocalStorage(EXAMPLE_STORAGE_KEY));

    result.current.set(exampleValue);

    expect(localStorage.getItem(EXAMPLE_STORAGE_KEY)).toEqual(
      JSON.stringify(exampleValue)
    );
  });

  it("should remove from localstorage", () => {
    const { result } = renderHook(() => useLocalStorage(EXAMPLE_STORAGE_KEY));

    result.current.set("EXAMPLE");
    result.current.remove();

    expect(localStorage.getItem(EXAMPLE_STORAGE_KEY)).toBeNull();
  });
});
