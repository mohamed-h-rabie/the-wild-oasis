import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "all" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "sort by name from (A-Z)" },
          { value: "name-des", label: "sort by name from (Z-A)" },
          { value: "regularPrice-asc", label: "sort by price from low-frist" },
          { value: "regularPrice-des", label: "sort by price from high-frist" },
          {
            value: "maxCapacity-asc",
            label: "sort by capacity from low-frist",
          },
          {
            value: "maxCapacity-des",
            label: "sort by capacity from high-frist",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
