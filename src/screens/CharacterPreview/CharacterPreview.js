import { useEffect } from "react";
import { useQuery } from "react-query";

import { changeScreen, resetUser } from "../../contexts/actions";
import { useAppContext } from "../../hooks/useAppContext";
import { fetchData } from "../../utils/fetchData";

import CharacterSheet from "../../components/CharacterSheet";

const CharacterPreview = () => {
  const {
    state: { user },
    dispatch,
  } = useAppContext();
  const { data: subclassNameData, loading: subclassesNamesLoading } = useQuery(
    ["subclasses", `classes/${user.class.toLowerCase()}/subclasses`],
    fetchData
  );
  const subclassName = subclassNameData && subclassNameData.results[0].name;
  const { data: equipmentData, loading: equipmentLoading } = useQuery(
    [
      `${user.class.toLowerCase()}_starting_equipment`,
      `classes/${user.class.toLowerCase()}/starting-equipment`,
    ],
    fetchData
  );
  const startingEquipment = (
    (equipmentData && equipmentData.starting_equipment) ||
    []
  ).map((equip) => equip.equipment.name);
  const { data: classesSpellsData, loading: spellsLoading } = useQuery(
    [
      `${user.class.toLowerCase()}_spells`,
      `classes/${user.class.toLowerCase()}/spells`,
    ],
    fetchData
  );
  const classesSpells = (
    (classesSpellsData && classesSpellsData.results) ||
    []
  ).map(({ name }) => name);
  const { data: sublcassesData, loading: subclassesLoading } = useQuery(
    [
      `${subclassName && subclassName.toLowerCase()}_subclassesData`,
      `subclasses/${subclassName ? subclassName.toLowerCase() : undefined}`,
    ],
    fetchData
  );
  const subclassesSpells = (
    (sublcassesData && sublcassesData.spells) ||
    []
  ).map(({ spell }) => spell.name);
  const spells = [
    ...new Set(
      classesSpells.filter((spell) => subclassesSpells.includes(spell))
    ),
  ];

  useEffect(() => {
    if (!user) {
      dispatch(changeScreen("preview"));
    }
  }, [user, dispatch]);

  const resetData = () => {
    sessionStorage.removeItem("userConfig");
    dispatch(resetUser());
  };

  const dataLoading =
    subclassesNamesLoading ||
    spellsLoading ||
    subclassesLoading ||
    equipmentLoading;

  return (
    <CharacterSheet
      user={user}
      subclass={subclassName}
      startingEquipment={startingEquipment}
      spells={spells}
      reset={resetData}
      loading={dataLoading}
    />
  );
};

export default CharacterPreview;
