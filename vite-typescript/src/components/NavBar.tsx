import { useState } from "react";

interface Character {
  id: number;
  nombre: string;
  apellido: string;
  vive: boolean;
  poderes: Array<Object>;
}

export default function NavBar(): JSX.Element {
  const [character, setCharacter] = useState<null | Array<Character>>(
    null
  );

  return <div>{character && character.map((elem) => elem.id)}</div>;
}
