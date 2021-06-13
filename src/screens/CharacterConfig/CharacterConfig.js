import { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useQuery } from "react-query";

import { useAppContext } from "../../hooks/useAppContext";
import { addUserConfig, changeScreen } from "../../contexts/actions";
import { fetchData } from "../../utils/fetchData";

import Button from "../../components/Button";
import Form from "../../components/Form";
import FieldLabel from "../../components/FieldLabel";
import FieldInput from "../../components/FieldInput";
import FieldError from "../../components/FieldError";
import SelectField from "../../components/SelectField";

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
  const { data: racesData, loading: isRacesLoading } = useQuery(
    ["racesList", "races"],
    fetchData
  );
  const races = ((racesData && racesData.results) || []).map(
    ({ index, name }) => ({ label: name, value: index })
  );

  const initialValues = {
    name: "",
    age: "",
    classList: { label: "", value: "" },
    race: { label: "", value: "" },
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    race: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
    class: Yup.object().shape({
      label: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    const userConfig = {
      name: values.name,
      age: values.age,
      class: values.class.label,
      race: values.race.label,
    };
    console.log(userConfig);
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

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <FieldInput name="name" error={errors.name} disabled={isSubmitting} />
          <FieldError error={errors.name} />
          <FieldLabel htmlFor="age">Age</FieldLabel>
          <FieldInput
            type="number"
            name="age"
            error={errors.age}
            disabled={isSubmitting}
          />
          <FieldError error={errors.age} />
          <FieldLabel htmlFor="race">Race</FieldLabel>
          <Field
            name="race"
            component={SelectField}
            options={races}
            disabled={isSubmitting}
            error={errors.race && errors.race.value}
          />
          <FieldError error={errors.race && errors.race.value} />
          <FieldLabel htmlFor="class">Class</FieldLabel>
          <Field
            name="class"
            component={SelectField}
            options={classesList}
            disabled={isSubmitting}
            error={errors.class && errors.class.value}
          />
          <FieldError error={errors.class && errors.class.value} />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CharacterConfig;
