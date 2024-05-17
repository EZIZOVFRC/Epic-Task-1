
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/Context'
import { Formik } from 'formik'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
    
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Add</title>
                   
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div>
                    
                <Formik
        initialValues={{ title: "", image: "", price: "", desc: "" }}
        onSubmit={(values, { setSubmitting }) => {
            axios.post('http://localhost:8080/api/blogs',{
                id:uuidv4(),
                title:values.title,
                description:values.desc,
                price:values.price,
                image:values.image
            }).then((res)=>console.log(res))
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
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="TITLE..."
            />

            <input
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              placeholder="IMAGE..."
            />

            <input
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              placeholder="PRICE..."
            />

            <input
              type="text"
              name="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder="desc..."
            />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
                </div>
        </>
        )
    }
    
    export default Add
        