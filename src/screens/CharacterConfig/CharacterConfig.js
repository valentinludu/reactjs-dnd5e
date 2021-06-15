import { useEffect } from "react";
import { useQuery } from "react-query";

import { useAppContext } from "../../hooks/useAppContext";
import { addUserConfig, changeScreen } from "../../contexts/actions";
import { fetchData } from "../../utils/fetchData";

import ConfigForm from "../../components/ConfigForm";

const CharacterConfig = () => {
  const {
    state: { user },
    dispatch,
  } = useAppContext();

  const { data: classes, isLoading: isClassesLoading } = useQuery(
    ["classesList", "classes"],
    fetchData
  );
  const classesList =
    classes &&
    classes.results.map(({ index, name }) => ({ label: name, value: index }));

  const { data: racesData, isLoading: isRacesLoading } = useQuery(
    ["racesList", "races"],
    fetchData
  );
  const races = ((racesData && racesData.results) || []).map(
    ({ index, name }) => ({ label: name, value: index })
  );

  const onSubmit = (values) => {
    const userConfig = {
      name: values.name,
      age: values.age,
      class: values.class.label,
      race: values.race.label,
    };
    dispatch(addUserConfig(userConfig));
    sessionStorage.setItem("userConfig", JSON.stringify(userConfig));
  };

  useEffect(() => {
    if (!user && sessionStorage.getItem("userConfig")) {
      dispatch(addUserConfig(JSON.parse(sessionStorage.getItem("userConfig"))));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(changeScreen("preview"));
    }
  }, [user, dispatch]);

  if (isClassesLoading || isRacesLoading) return "Loading...";

  return <ConfigForm classes={classesList} races={races} onSubmit={onSubmit} />;
};

export default CharacterConfig;
