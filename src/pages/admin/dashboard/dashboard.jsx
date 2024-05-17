
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/Context'
    
    const Dashboard = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Dashboard</title>
                    {/* <link rel="icon" type="image/x-icon" href="x"></link> favicon*/}
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div>Dashboard page
                </div>
        </>
        )
    }
    
    export default Dashboard
        