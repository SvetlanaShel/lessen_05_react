import { useFormik } from "formik";
import * as Yup from "yup"

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Homework15Container, Checkbox, ErrorMessage, CheckboxContainer, CheckboxLabel } from "./styles";

function Homework15(){

    const schema = Yup.object().shape({
        validation_code: Yup.number().typeError('Тип значения - число')
         .test('max length', 'Мax 6 символов', (value)=>String(value).length <= 6),
        privacy_policy: Yup.boolean().oneOf([true], 'Privacy and policy'),
    });
        
    const formik = useFormik ({
        initialValues: {
            validation_code: '',
            privacy_policy: false,
            login: '',
        },
        validationSchema: schema,
        validateOnChange: false, 
        onSubmit: (values) => {
            console.table('Вы успешно вошли')
        },
    });

    console.log(formik);

    return(

        <form onSubmit={formik.handleSubmit}>
            <label>Validation Code:</label>
               <Input
                    name="validation_code"
                    type="number"
                    value={formik.values.validation_code}
                    onChange={formik.handleChange}
                />
            <CheckboxContainer>
                <Checkbox
                    name='privacy_policy'
                    type='checkbox'
                    id='privacy_policy_id'
                    checked={formik.values.privacy_policy}
                    onChange={formik.handleChange}
                    />
                <CheckboxLabel htmlFor='privacy_policy_id'>
                    Privacy and policy
                </CheckboxLabel>
            </CheckboxContainer>
             <ErrorMessage>{formik.errors.privacy_policy}</ErrorMessage>
             <Button type='Submit'>Login</Button>
        </form>
    );
}

export default Homework15
      