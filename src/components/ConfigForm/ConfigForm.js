import { Formik, Field } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button";
import Form from "../../components/Form";
import FieldLabel from "../../components/FieldLabel";
import FieldInput from "../../components/FieldInput";
import FieldError from "../../components/FieldError";
import SelectField from "../../components/SelectField";

const ConfigForm = ({ classes, races, onSubmit }) => {
  const initialValues = {
    name: "",
    age: "",
    class: { label: "", value: "" },
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

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <FieldInput
            name="name"
            error={errors.name && touched.name}
            disabled={isSubmitting}
          />
          <FieldError error={touched.name && errors.name} />
          <FieldLabel htmlFor="age">Age</FieldLabel>
          <FieldInput
            type="number"
            name="age"
            error={errors.age && touched.age}
            disabled={isSubmitting}
          />
          <FieldError error={touched.age && errors.age} />
          <FieldLabel htmlFor="race">Race</FieldLabel>
          <Field
            name="race"
            component={SelectField}
            options={races}
            disabled={isSubmitting}
            error={touched.race && errors.race && errors.race.value}
          />
          <FieldError
            error={touched.race && errors.race && errors.race.value}
          />
          <FieldLabel htmlFor="class">Class</FieldLabel>
          <Field
            name="class"
            component={SelectField}
            options={classes}
            disabled={isSubmitting}
            error={touched.class && errors.class && errors.class.value}
          />
          <FieldError
            error={touched.class && errors.class && errors.class.value}
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ConfigForm;
