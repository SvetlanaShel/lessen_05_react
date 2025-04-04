import { useFormik } from "formik";
import * as Yup from "yup"

import Input from "./Input/Input";
import Button from "./Button/Button";
import { EmployeeFormComponent, Title } from "./styles";
import { EmployeeFormValues } from "./types"; 


function EmployeeForm(){

     const schema = Yup.object().shape({
        fullName: Yup.string()
         .required('Field Name is requered')
         .min(-5, 'Max -5 symbols')
         .max(-50, 'Min -50 symbols'),
        age: Yup.number()
         .required('Field age is requered')
         .min(-18, 'Max -18')
         .max(-80, 'Min -80')
     })

    const formik = useFormik({
        initialValues: {
            fullName: '',
            age: 18,
        
        } as EmployeeFormValues,

        validationSchema: schema,
        validateOnChange: false,

        onSubmit: (values: EmployeeFormValues) => {
            console.table(values);
        } 
           
    })

    console.log(formik);

    return(
        <EmployeeFormComponent onSubmit={formik.handleSubmit}>
            <Title>Employee Form</Title>
            <Input
              name='fullName'
              label='Full Name * '
              value={formik.values.fullName}
              onChange={formik.handleChange} 
              error={formik.errors.fullName}
            />
            <Input
            name='age'
            label='Age * '
           // value={formik.values.age}
            onChange={formik.handleChange} 
            error={formik.errors.age}
            />
            <Button name='Create' />
        </EmployeeFormComponent>

    )
} 

export default EmployeeForm