import uniqid from 'uniqid';

import { Formik, Field } from 'formik';
import defaultImg from './img.jpg';

// import { Styled} from './StyledRecipeForm';
import * as Yup from 'yup';
import {
  StyledLable,
  StyledButton,
  StyledForm,
  StyledErrorMessage,
} from './StyledRecipeForm';
export default function RecipeForm(props) {
  const { addNewRecipe } = props;
  const defaultValues = values => {
    if (values.image === '') {
      return defaultImg;
    }
    return values.image;
  };
  const defaultName = values =>
    values.name === '' ? ' No name' : values.name;
  const RecipeValidationSchema = Yup.object().shape({
    name: Yup.string()
      // .required('Required')
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.'
      )
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),

    time: Yup.string().required(),
    servings: Yup.number().required().positive(),
    calories: Yup.number().required().positive(),
    image: Yup.string().default(
      'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'
    ),
    difficulty:
      Yup.array().oneOf[('easy', 'medium', 'hard')],
  });
  return (
    <Formik
      initialValues={{
        name: '',
        time: '',
        servings: '',
        calories: '',
        image: '',
        difficulty: 'easy',
      }}
      onSubmit={values => {
        console.log(values.time);
        addNewRecipe({
          id: uniqid('recipe-'),
          ...values,
          image: defaultValues(values),
          servings: Number(values.servings),
          calories: Number(values.calories),
          name: defaultName(values),
        });
      }}
      validationSchema={RecipeValidationSchema}
    >
      <StyledForm>
        <StyledLable>
          Name
          <Field name="name" />
          <StyledErrorMessage name="name" component="div" />
        </StyledLable>
        <StyledLable>
          Time
          <Field name="time" />
          <StyledErrorMessage name="time" component="div" />
        </StyledLable>
        <StyledLable>
          Servings
          <Field name="servings" />
          <StyledErrorMessage
            name="servings"
            mponent="div"
          />
        </StyledLable>
        <StyledLable>
          Calories
          <Field name="calories" />
          <StyledErrorMessage
            name="calories"
            component="div"
          />
        </StyledLable>
        <StyledLable>
          Image
          <Field name="image" />
          <StyledErrorMessage
            name="image"
            component="div"
          />
        </StyledLable>
        <StyledLable>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
        </StyledLable>

        <StyledButton type="submit">
          Add recipe
        </StyledButton>
      </StyledForm>
    </Formik>
  );
}
