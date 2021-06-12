import { useEffect } from "react";
import { useQuery } from "react-query";

import { changeScreen, resetUser } from "../../contexts/actions";
import { useAppContext } from "../../hooks/useAppContext";
import { fetchData } from "../../utils/fetchData";

import CharacterSheet from "../../components/CharacterSheet";

const CharacterPreview = () => {
    const { state: { user }, dispatch } = useAppContext();
    const { data: subclassNameData } = useQuery(["subclasses", `classes/${user.class.toLowerCase()}/subclasses`], fetchData);
    const subclassName = subclassNameData && subclassNameData.results[0].name;
    const { data: equipmentData } = useQuery(["starting_equipment", `classes/${user.class.toLowerCase()}/starting-equipment`], fetchData);
    const startingEquipment = ((equipmentData && equipmentData.starting_equipment) || []).map(equip => equip.equipment.name);
    const { data: classesSpellsData } = useQuery(["spells", `classes/${user.class.toLowerCase()}/spells`], fetchData);
    const classesSpells = ((classesSpellsData && classesSpellsData.results) || []).map(({ name }) => name);
    const { data: sublcassesData } = useQuery(["subclassesData", `subclasses/${subclassName ? subclassName.toLowerCase() : undefined}`], fetchData);
    const subclassesSpells = ((sublcassesData && sublcassesData.spells) || []).map(({ spell }) => spell.name);
    const spells = [...new Set(classesSpells.filter(spell => subclassesSpells.includes(spell)))];

    useEffect(() => {
        if(!user) {
            dispatch(changeScreen("preview"));
        }
    }, [user, dispatch]);

    const resetData = () => {
        sessionStorage.removeItem("userConfig");
        dispatch(resetUser());
    };

    return <CharacterSheet user={user} subclass={subclassName} startingEquipment={startingEquipment} spells={spells} reset={resetData} />;
};

export default CharacterPreview;