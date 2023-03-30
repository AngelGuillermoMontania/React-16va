import Card from "./Card";

function ContainCards({ characters }) {
  const hicieronClick = () => {
    console.log("HELLO");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {characters.map((character) => (
        <Card personaje={character} click={hicieronClick} />
      ))}
    </div>
  );
}

export default ContainCards;
