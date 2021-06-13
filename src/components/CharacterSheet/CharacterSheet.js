import styles from "./CharacterSheet.module.css";
import Button from "../../components/Button";

const CharacterSheet = ({
  user,
  subclass,
  startingEquipment,
  spells,
  reset,
  loading,
}) => {
  if (loading) return <div className={styles.wrapper}>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      {user.class && (
        <img
          height="100px"
          src={`/images/${user.class.toLowerCase()}.png`}
          alt={`${user.class} class symbol`}
        />
      )}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Race: {user.race}</p>
      <p>Class: {user.class}</p>
      {(subclass, length > 0 && <p>Sublcass: {subclass}</p>)}
      {startingEquipment.length > 0 && (
        <p>
          Starting Equipment:
          {startingEquipment.map((item, index) => (
            <span key={item}>
              {item}
              {startingEquipment.length > 1 &&
              startingEquipment.length - 1 !== index
                ? ","
                : ""}
            </span>
          ))}
        </p>
      )}
      {spells.length > 0 && (
        <p>
          Spells:
          {spells.map((item, index) => (
            <span key={item}>
              {item}
              {spells.length > 1 && spells.length - 1 !== index ? "," : ""}
            </span>
          ))}
        </p>
      )}

      <Button onClick={reset}>Restart configuration</Button>
    </div>
  );
};

export default CharacterSheet;
