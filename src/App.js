import './App.css';
import { Formik } from 'formik';


function App() {
  return (
    <div className="App">
      {/* <h1>Fauna DB Example</h1> */}
      <h1>Fauna DB curp app</h1>
      <Formik
       initialValues={{ message: '' }}
       validate={values => {
         const errors = {};
         if (!values.message) {
           errors.message = 'Required';
         }  
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
          console.log("values",values)
          fetch('/.netlify/functions/addMessage',{
            method:"post",
            body:JSON.stringify(values)
          })
          .then(resp=>resp.json())
          .then(data=>console.log("data",data))
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="message"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
           />
           {errors.message && touched.message && errors.message}
        
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  );
}

export default App;
