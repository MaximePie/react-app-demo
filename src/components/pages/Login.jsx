import React from 'react';
import Card from "../molecules/Card";
import {useForm} from "react-hook-form";

export default function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  return (
    <div className="Login">
      <h3 className="Login__header">Voulez-vous vous connecter ?</h3>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email
            <input {...register("email", {required: true})}/>
          </label>
          {errors.email && <span>Email requis</span>}
          <label>
            Password
            <input {...register("pass", {required: true})}/>
          </label>
          {errors.pass && <span>Password requis</span>}

          <input type="submit"/>
        </form>

      </Card>
    </div>
  );

  function onSubmit(values) {
    console.log("Prêts à soumettre");
    console.log(values);
  }
}
