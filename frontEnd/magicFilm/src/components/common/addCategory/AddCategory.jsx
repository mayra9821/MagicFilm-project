import React from "react";
import "./addCategory.css";
import iconClip from "../../../assets/icon/clip.svg";
import { createCategory } from "../../../service/categoryServices";
import { Modal, Box } from "@mui/material";
import { getCategories } from "../../../service/categoryServices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddCategory = ({
  state,
  setState,
  initialState,
  setCategories,
  setNewCategories,
}) => {
  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        setState({
          ...state,
          [event.target.name]: base64String,
          file: file,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const saveCategory = (event) => {
    event.preventDefault();
    setNewCategories(true);
    const create = createCategory(state);
    create
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    getCategories().then((res) => {
      setCategories(res.data.filter((category) => category.id !== "0"));
    });
    setOpen(false);
  };

  const handleReset = () => {
    setState({ title: "", description: "", image: "" });
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (event) => {
    event.preventDefault();
    setNewCategories(false);

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="modal-button" onClick={handleOpen}>
        Crear nueva Categoría
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="formulario-add-movie">
            <h2 className="title">Agregar nueva Categoría</h2>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Categoría*"
              onChange={handleInputChange}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                gap: "1rem",
                flex: "1 1 auto",
                width: "100%",
              }}
            ></div>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descripción"
              onChange={handleInputChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: "1 1 auto",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            >
              {state?.file ? (
                <p style={{ fontSize: "0.9rem" }}>{state.file.title}</p>
              ) : (
                <p style={{ fontSize: "0.9rem" }}>
                  Cargar imagen*{" "}
                  <span style={{ fontSize: "0.7rem" }}>(JPEG, PNG)</span>
                </p>
              )}
              <label htmlFor="file" className="attach-button">
                <img className="icon" src={iconClip} alt="" />
                {state?.file ? "Cambiar" : "Adjuntar"}
              </label>
              <input
                id="file"
                type="file"
                accept=".jpg, .jpeg, .png"
                name="image"
                placeholder="Cargar portada"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flex: "1 1 auto",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            >
              <button className="solid" onClick={saveCategory}>
                Crear
              </button>

              <button className="solid" onClick={handleReset}>
                Cancelar
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddCategory;
