import { ErrorMessage, Field, Form, Formik } from "formik";
import { closeModal, openEditeForm } from "../../features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFormMode } from "../../features/modal/FormSlice";
import {
  createNewEra,
  fetchData,
  updateEraData,
} from "../../features/dashboard/dashboard";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const formValue = useSelector((store) => store.form.values);
  const formMode = useSelector((store) => store.form.formMode);

  const handleSubmit = async (values, { setSubmit }) => {
    const createdEra = await dispatch(createNewEra(values));

    if (createdEra.payload.status === 201) {
      dispatch(closeModal());
      dispatch(fetchData());
    } else {
      console.warn("Error White Creating Era");
    }
    setSubmit(true);
  };

  const handleCloseModal = () => {
    dispatch(setFormMode("create"));
    dispatch(closeModal());
    dispatch(openEditeForm());
  };

  const handleUpdate = async (values, resetForm) => {
    const { id, accentColor, eraTo, eraFrom } = values;
    const updateData = {
      eraId: id,
      accentColor,
      eraTo,
      eraFrom,
    };

    const isUpdated = await dispatch(updateEraData(updateData));
    console.log(isUpdated.payload.status, "Is Updated");

    if (isUpdated.payload.status === 201) {
      dispatch(fetchData());
      dispatch(closeModal());
      resetForm();
    } else {
      console.warn("Error While Creating Era..");
    }
  };

  return (
    <div className="modal_overlay">
      <div className="modal_container">
        <h1> {formMode === "create" ? "Create Era" : "Update Era"} </h1>
        <Formik initialValues={formValue} onSubmit={handleSubmit}>
          {({ isSubmitting, values, resetForm }) => (
            <Form>
              <div className="input_container">
                <Field
                  type="number"
                  name="eraFrom"
                  className="input_date"
                  placeholder="Select a year"
                  value={values?.eraFrom}
                />
                <ErrorMessage name="eraFrom" />

                <Field
                  type="number"
                  name="eraTo"
                  className="input_date"
                  placeholder="Select a year"
                  value={values?.eraTo}
                />
                <ErrorMessage name="eraTo" />
              </div>

              <div className="input_container">
                <Field
                  type="text"
                  name="prefix"
                  className="input_date"
                  placeholder="prefix"
                  value={values?.prefix}
                />
                <ErrorMessage name="prefix" />

                <Field
                  type="text"
                  name="accentColor"
                  className="input_date"
                  placeholder="color"
                  value={values?.accentColor}
                />
                <ErrorMessage name="accentColor" />
              </div>

              <div className="modal_buttons">
                {formMode === "create" && (
                  <button
                    className="modal_btn"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Create
                  </button>
                )}

                {formMode === "update" && (
                  <button
                    className="modal_btn"
                    disabled={isSubmitting}
                    type="button"
                    onClick={() => handleUpdate(values, resetForm)}
                  >
                    Update
                  </button>
                )}

                <button className="modal_btn" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
