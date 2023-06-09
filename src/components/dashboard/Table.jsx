/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setFormMode, setFormValues } from "../../features/modal/FormSlice";
import "./Table.css";
import { openModal } from "../../features/modal/modalSlice";
import { deleteEras, fetchData } from "../../features/dashboard/dashboard";

const Table = ({ data }) => {
  const dispatch = useDispatch();

  if (!data || data.length === 0) {
    return <div>No data Avalible</div>;
  }

  const tableHeaders = Object.keys(data[0]).filter((key) => {
    return (
      key !== "id" &&
      key !== "__v" &&
      key !== "passwordChnagedAt" &&
      key !== "updatedAt" &&
      key !== "createdBy" &&
      key !== "updatedBy" &&
      key !== "thumbnail" &&
      key !== "is_publish" &&
      key !== "createdAt" &&
      key !== "era_id" &&
      key !== "event_id" &&
      key !== "tags" &&
      key !== "prefix" &&
      key !== "is_active"
    );
  });

  const handleOpenEdite = (data) => {
    dispatch(setFormValues(data));
    dispatch(setFormMode("update"));
    dispatch(openModal());
  };

  const handleDelete = async (id) => {
    const isDeleted = await dispatch(deleteEras(id));
    if (isDeleted?.payload.status === 200) {
      console.log("Deleted Success...");
      dispatch(fetchData());
    }
    else {
      console.warn("Error while fetching data");
    }

  }

  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders?.map((key) => {
            return <th key={key}>{key}</th>;
          })}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            {tableHeaders.map((headerkey, index) => (
              <td key={index}> {data[headerkey]} </td>
            ))}
            <td>
              <i
                className="fa-solid fa-pen-to-square table_edite"
                onClick={() => handleOpenEdite(data)}
              ></i>
              <i className="fa-solid fa-trash table_delete" onClick={() => handleDelete(data?.id)}></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
