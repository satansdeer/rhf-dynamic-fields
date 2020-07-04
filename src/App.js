import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch } = useForm();
  const likesCakes = watch("likesCakes");

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" ref={register} />
      </div>

      <div>
        <label htmlFor="likesCakes">Likes Cakes: </label>
        <input
          type="checkbox"
          name="likesCakes"
          id="likesCakes"
          ref={register}
        />
      </div>

      {likesCakes && (
        <div>
          <label htmlFor="favouriteFlavour">Favourite Flavour:</label>
          <select id="favouriteFlavour" name="favouriteFlavour" ref={register}>
            <option value="chocolate">Chocolate</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
      )}

      <button>Submit</button>
    </form>
  );
}

export default App;
