import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";

function UserForm({addUser}){
    const schema = Yup.object({
        name:Yup.string()
        .required("Required"),

        email: Yup.string()
        .email("Invalid email")
        .required("Required"),
    });

    return (
        <Formik
            initialValues={{
                name:"",
                email:""
            }}
            validationSchema={schema}
            onSubmit={(values,{resetForm})=>{
                addUser({
                    id: Date.now(),
                    ...values
                });
                resetForm();
            }}>
        <Form className="bg-white p-4 shadow rounded">
            <Field
                name="name"
                placeholder="Name"
                className="border p-2 block mb-2">
            </Field>
            <ErrorMessage name ="name" component ="div"></ErrorMessage>
            <Field
                name="email"
                placeholder="Email"
                classname="border p-2 block mb-2">        
            </Field>
            <ErrorMessage name="email" component="div"/>
            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded">
                AddUser    
            </button>
        </Form>      
        </Formik>
    );
}

export default UserForm;