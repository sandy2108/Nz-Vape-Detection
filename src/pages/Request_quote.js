import ServiceArea from '../components/ServiceArea'
import Contact from '../components/Contact'
import Form from '../components/Form'
import Head from 'next/head'

export default function Request_quote() {
  return (
    <div>
        <Head>
          <title>NZ Vape Detection | Request a Quote</title>
          
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="keywords" content="Vape Services ,Vape Electrican , School vape, College Vape, Offices  Vape, Vape detection solutions Auckland, Vape detection systems NZ, Vape-free environments Auckland, Vape detection specialists, Compliant vape detection services, Advanced vape detection technology"/>
          <meta name="description" content="Request a quote for our leading vape detection system installation services in Auckland, NZ. Trust our experts to create a vape-free environment and ensure compliance with regulations."/>
          
          <meta property="og:title" content="Request a Quote for Vape Detection System Installation"/>
          <meta property="og:description" content="Request a quote for our leading vape detection system installation services in Auckland, NZ. Trust our experts to create a vape-free environment and ensure compliance with regulations."/>
          <meta property="og:image:alt" content="Vape Detection System Installation"/>


        </Head>
        <Contact/>
        <Form/>
        <ServiceArea/>
    </div>
  )
}
