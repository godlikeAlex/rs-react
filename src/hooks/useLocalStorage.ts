function useLocalStorage<T>(
  key: string,
  defaultValue: T
): {
  get: () => T;
  set: (value: T) => void;
  remove: () => void;
};
function useLocalStorage<T>(key: string): {
  get: () => T | undefined;
  set: (value: T) => void;
  remove: () => void;
};

function useLocalStorage<T>(key: string, defaultValue?: T) {
  const set = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error", error);
    }
  };

  const get = (): T | undefined => {
    try {
      const value = localStorage.getItem(key);

      if (!value) return defaultValue;

      return JSON.parse(value ?? "") as T;
    } catch (error) {
      console.log("Error while get value", error);
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log("Error while remove item", error);
    }
  };

  return {
    set,
    get,
    remove,
  };
}

export default useLocalStorage;
