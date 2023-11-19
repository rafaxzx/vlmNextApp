"use client";
import ContentArea from "@/components/ContentArea/ContentArea";
import { useState, useEffect } from "react";

export default function ItemDetail() {
  const placeHolder = "digite aqui";
  const [stateForm, setState] = useState({
    inputCodeIntern: "",
    inputName: "",
    inputSpecification: "",
    inputTrayNumber: "",
    inputTrayLocation: "",
    inputMinimumStock: "",
    inputMaximumStock: "",
    inputCurrentStock: "",
    listOfManufacturers: [],
    listOfSectors: [],
  });

  useEffect(() => {
    //Getting all manufacturers
    const manufacturersData = fetch("/api/manufacturer");

    //Getting all sectors
    const sectorsData = fetch("/api/sector");

    Promise.all([manufacturersData, sectorsData]).then(
      ([manufacturersReq, sectorsReq]) => {
        const manufacturersJson = manufacturersReq.json();
        const sectorsJson = sectorsReq.json();
        Promise.all([manufacturersJson, sectorsJson]).then(
          ([manufacturers, sectors]) => {
            const manufacturersSorted = manufacturers.manufacturers.sort(
              (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            );

            const sectorsSorted = sectors.sectors.sort((a, b) =>
              a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            );

            setState({
              ...stateForm,
              listOfManufacturers: manufacturersSorted,
              listOfSectors: sectorsSorted,
            });
          }
        );
      }
    );
  }, []);

  //Handles of inputs
  function handleInputCodeInternChange(event) {
    setState({
      ...stateForm,
      inputCodeIntern: event.target.value,
    });
  }

  function handleInputNameChange(event) {
    setState({
      ...stateForm,
      inputName: event.target.value,
    });
  }

  function handleInputSpecificationChange(event) {
    setState({
      ...stateForm,
      inputSpecification: event.target.value,
    });
  }

  function handleInputTrayNumberChange(event) {
    setState({
      ...stateForm,
      inputTrayNumber: event.target.value,
    });
  }

  function handleInputTrayLocationChange(event) {
    setState({
      ...stateForm,
      inputTrayLocation: event.target.value,
    });
  }

  function handleInputMinimumStockChange(event) {
    setState({
      ...stateForm,
      inputMinimumStock: event.target.value,
    });
  }

  function handleInputMaximumStockChange(event) {
    setState({
      ...stateForm,
      inputMaximumStock: event.target.value,
    });
  }

  function handleInputCurrentStockChange(event) {
    setState({
      ...stateForm,
      inputCurrentStock: event.target.value,
    });
  }

  function handleManufacturerSelectChange(event) {
    setState({
      ...stateForm,
      selectManufacturerId: event.target.value,
    });
  }
  function handleSectorSelectChange(event) {
    setState({
      ...stateForm,
      selectSectorId: event.target.value,
    });
  }

  function handleOnSubmitForm(event) {
    event.preventDefault();

    const form = event.target;
    const url = form.action;
    const formFields = new FormData(form);
    const formDataObject = Object.fromEntries(formFields.entries());
    const formDataJsonString = JSON.stringify(formDataObject);
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: formDataJsonString,
    };
    fetch(url, fetchOptions);
  }

  return (
    <ContentArea>
      <div className="mb-16 flex flex-col p-4 justify-center items-center ">
        <form
          onSubmit={handleOnSubmitForm}
          className="flex p-2 flex-col items-end justify-center bg-gray-500 border-2 shadow-lg rounded-md"
          action="/api/item/"
          method="post"
        >
          <label className="m-2 text-xl">
            Código interno:
            <input
              name="codeIntern"
              className="m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              type="text"
              size={9}
              maxLength={9}
              value={stateForm.inputCodeIntern}
              onChange={handleInputCodeInternChange}
            ></input>
          </label>
          <label className="m-2 text-xl">
            Nome:
            <input
              name="name"
              className="m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              type="text"
              size={20}
              value={stateForm.inputName}
              onChange={handleInputNameChange}
            ></input>
          </label>
          <label className="flex items-center m-2 text-xl">
            Especificação:
            <textarea
              name="specification"
              className="m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              size={20}
              maxLength={100}
              cols={20}
              rows={2}
              type="text"
              value={stateForm.inputSpecification}
              onChange={handleInputSpecificationChange}
            ></textarea>
          </label>
          <label className="flex items-center m-2 text-xl">
            Fabricante:
            <select
              className="m-2 bg-gray-200 text-xl text-black shadow-lg p-2 rounded-lg"
              name="manufacturerId"
              id="manufacturerOptions"
              onChange={handleManufacturerSelectChange}
            >
              {stateForm.listOfManufacturers &&
                stateForm.listOfManufacturers.map((manufacturerOption) => {
                  return (
                    <option
                      key={
                        manufacturerOption.name + "-" + manufacturerOption.id
                      }
                      name={"manufacturerId"}
                      value={manufacturerOption.id}
                    >
                      {manufacturerOption.name}
                    </option>
                  );
                })}
            </select>
          </label>
          <label className="flex items-center m-2 text-xl">
            Setor/Equip. :
            <select
              className="m-2 bg-gray-200 text-xl text-black shadow-lg p-2 rounded-lg"
              name="equipSectorId"
              id="sectorOptions"
              onChange={handleSectorSelectChange}
            >
              {stateForm.listOfSectors &&
                stateForm.listOfSectors.map((sectorOption) => {
                  return (
                    <option
                      key={sectorOption.name + "-" + sectorOption.id}
                      name={"equipSectorId"}
                      value={sectorOption.id}
                    >
                      {sectorOption.name}
                    </option>
                  );
                })}
            </select>
          </label>
          <label className="m-2 text-xl">
            Número gaveta: UDC-
            <input
              name="trayNumber"
              className="m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              size={5}
              type="text"
              value={stateForm.inputTrayNumber}
              onChange={handleInputTrayNumberChange}
            ></input>
          </label>
          <label className="m-2 text-xl">
            Local gaveta:
            <input
              name="trayLocation"
              className="m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              size={10}
              type="text"
              value={stateForm.inputTrayLocation}
              onChange={handleInputTrayLocationChange}
            ></input>
          </label>
          <label className="m-2 text-xl">
            Estoque mínimo:
            <input
              name="minimumStock"
              className="w-16 m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              max={99}
              type="number"
              value={stateForm.inputMinimumStock}
              onChange={handleInputMinimumStockChange}
            ></input>
          </label>
          <label className="m-2 text-xl">
            Estoque máximo:
            <input
              name="maxStock"
              className="w-16 m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              max={99}
              type="number"
              value={stateForm.inputMaximumStock}
              onChange={handleInputMaximumStockChange}
            ></input>
          </label>
          <label className="m-2 text-xl">
            Estoque atual:
            <input
              name="currentStock"
              className="w-16 m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              max={99}
              type="number"
              value={stateForm.inputCurrentStock}
              onChange={handleInputCurrentStockChange}
            ></input>
          </label>
          <input type="hidden" name="image" value={null}></input>
          <div className="w-full flex justify-center gap-x-3">
            <button
              type="submit"
              className="text-xl w-fit gap-x-3 bg-gray-200 text-black shadow-lg p-3 rounded-lg"
            >
              Cadastrar
            </button>
            <button
              type="reset"
              className="text-xl w-fit   gap-x-3 bg-gray-200 text-black shadow-lg p-3 rounded-lg"
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </ContentArea>
  );
}
