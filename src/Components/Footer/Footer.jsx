import { AiOutlineMail } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Footer = () => {

    const initialValues = {
        email: '',
      };

      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
      });

      const handleSubmit = (values) => {
        console.log('Form submitted:', values);
      };

  return (
    <div className=' bg-RealBlack py-14 px-8 '>
        <div className=' container mx-auto '>
            <div className=' flex flex-col md:flex-row justify-center'>
                <div className='px-3'>
                    <h3 className=' text-customGreen font-bold py-4 text-3xl'>Glint.</h3>
                    <p className=' text-customWhiteOnBlack text-sm md:max-w-[450px] leading-[1.6]'> Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.</p>
                </div>
                <div className='px-3'>
                    <h4 className=' text-customWhite py-4 text-lg font-bold'>Get Notified</h4>
                    <p className=' text-customWhiteOnBlack text-sm md:max-w-[450px] leading-[1.6]'>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                        <Form className=" flex w-[100%] mx-auto sm:mx-0 flex-col sm:flex-row items-start my-6">
                            <div className=" relative w-full">
                                <AiOutlineMail className="absolute left-0 top-0 text-customWhite font-bold text-2xl my-3 sm:my-1"/>
                                <Field className=" w-full text-customLightGray bg-RealBlack h-[48px] sm:h-8  outline-0 pl-8"  type="email" id="email" name="email" placeholder="Email Address" />
                                <ErrorMessage name="email" component="div" className="error text-red-700  " />
                            </div>

                            <button className=" w-full sm:w-fit h-fit py-3 sm:py-1 px-5 bg-customGreen text-customWhite font-bold" type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row items-center md:justify-center pt-12'>
                <span className=' text-customWhiteOnBlack md:mr-5 text-sm inline-block'>© Copyright Glint 2022</span>
                <span className=' text-customWhiteOnBlack text-sm'> Site Template by <a href="#" className=' text-customWhite hover:text-customGreen duration-500'>Colorlib</a></span>
            </div>
        </div>
    </div>
  )
}

export default Footer