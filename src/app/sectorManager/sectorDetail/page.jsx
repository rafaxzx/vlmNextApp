"use client";
import { useState } from "react";
import ContentArea from "@/components/ContentArea/ContentArea";

export default function SectorDetail() {
  const placeHolder = "digite aqui";
  const [state, setState] = useState({ buttonText: "Cadastrar" });

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
        Accept: "application;json",
      },
      body: formDataJsonString,
    };
    fetch(url, fetchOptions).then(() =>
      setState({ buttonText: "Cadastrado!" })
    );
  }

  return (
    <ContentArea>
      <div className="mb-16 flex flex-col justify-center items-center ">
        <form
          onSubmit={handleOnSubmitForm}
          className="w-full flex p-2 flex-col items-end justify-center bg-gray-500 border-2 shadow-lg"
          action="/api/sector/"
          method="post"
        >
          <label className="m-2 text-xl">
            Nome fabricante:
            <input
              name="name"
              className="m-2 rounded-lg bg-gray-200 p-2 text-xl text-black"
              placeholder={placeHolder}
              type="text"
              size={20}
              maxLength={20}
            ></input>
          </label>
          <div className="w-full flex justify-center gap-x-3">
            <button
              type="submit"
              className="text-xl w-fit gap-x-3 bg-gray-200 text-black shadow-lg p-3 rounded-lg"
            >
              {state.buttonText}
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
