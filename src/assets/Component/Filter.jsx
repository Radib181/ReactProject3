import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { Button } from "@nextui-org/button";

const FilterItem = ({ label, options }) => (
  <div className="flex flex-col justify-center items-start mx-4 w-full sm:w-auto">
    <label className="w-full">
      <span className="font-medium text-sm text-gray-500 mb-2 inline-block">{label}</span>
      <select className="w-full px-3 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
        {options.map((option, index) => (
          <option key={index} className="font-medium">
            {option}
          </option>
        ))}
      </select>
    </label>
  </div>
);

const FilterSearch = () => {
  return (
    <section className="mt-16 px-6 bg-gray-100 py-10">
      <h1 className="font-bold text-3xl sm:text-4xl text-center text-gray-800">
        Find Your Dream Vehicle
      </h1>
      <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
        Use the filters below to refine your search and discover the best options for you.
      </p>

      <div className="flex flex-wrap justify-center items-center mt-8 space-y-4 sm:space-y-0 gap-4">
        <FilterItem
          label="Type"
          options={["Used Car", "New Car", "Vangri Car"]}
        />
        <FilterItem
          label="Make"
          options={["Toyota", "Honda", "Ford"]}
        />
        <FilterItem
          label="Year"
          options={["2000", "2005", "2024"]}
        />
        <FilterItem
          label="Model"
          options={["Sedan", "SUV", "Truck"]}
        />
        <FilterItem
          label="Price"
          options={["Below $10,000", "$10,000 - $20,000", "$20,000+"]}
        />
      </div>

      <div className="text-center mt-10 items-center mx-auto block">
      <Button className="px-6 py-3 align-middle text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md  items-center justify-center">
          <SavedSearchIcon className="mr-2" /> Search
        </Button>
      </div>
    </section>
  );
};

export default FilterSearch;
