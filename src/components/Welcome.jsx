import React from 'react';
import Card from "./Card";
import Button from "./Button";

export default function Welcome() {
  return (
    <div className="Welcome">
      <h3>Bienvenue !</h3>
      <Card>
        <Button text="Bienvenue les Men in Black !"/>
      </Card>
    </div>
  );
}
