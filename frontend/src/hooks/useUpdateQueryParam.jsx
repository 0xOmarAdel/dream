import { useSearchParams } from "react-router-dom";

const useUpdateQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParam = (paramName, paramValue, expand = false) => {
    if (expand) {
      const currentValues = searchParams.getAll(paramName);

      currentValues.push(paramValue);

      searchParams.set(paramName, currentValues);
    } else {
      searchParams.set(paramName, paramValue);
    }

    setSearchParams(searchParams);
  };

  return updateQueryParam;
};

export default useUpdateQueryParam;
