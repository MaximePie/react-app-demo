import React from 'react';
import Card from "./Card";
import Button from "./Button";

export default function Login() {
  return (
    <div className="Login">
      <h3>Voulez-vous vous connecter ?</h3>
      <Card>
        <Button text="Oui"/>
        <Button text="Non"/>
      </Card>
    </div>
  );
}
