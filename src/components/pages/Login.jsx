import React from 'react';
import Card from "../molecules/Card";
import Button from "../atoms/Button";

export default function Login() {
  return (
    <div className="Login">
      <h3 className="Login__header">Voulez-vous vous connecter ?</h3>
      <Card>
        <Button text="Oui"/>
        <Button text="Non"/>
      </Card>
    </div>
  );
}
