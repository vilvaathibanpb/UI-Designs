import React, { Component } from 'react';
import '../../css/home.css';
import '../../../src/style.css';
import HomeHeader from '../Home/HomeHeader/HomeHeader.jsx';
import HomeDataContainer from '../Home/HomeDataContainer/HomeDataContainer.jsx';
import HomePropertycontainer from './Testimonial/HomePropertyContainer';
import Footer from '../Footer/Footer';

import PvtLtd from '../../assets/images/Home/Popular Services/Image_Private_Limited_Company.jpg';
import Encumberence from '../../assets/images/Home/Popular Services/Image_Encumbrance_Certificate.jpg';
import Gst from '../../assets/images/Home/Popular Services/Image_GST_Compliance.jpg';
import Rental from '../../assets/images/Home/Popular Services/Image_Rental Agreement.jpg';

import Agreements from '../../assets/images/Home/Documents/Image_Agreements.jpg';
import Affidavits from '../../assets/images/Home/Documents/Image_Affidavits.jpg';
import Bonds from '../../assets/images/Home/Documents/Image_Bonds.jpg';
import Deeds from '../../assets/images/Home/Popular Services/Image_Rental Agreement.jpg';

import Notary from '../../assets/images/Home/On Demands/Image_Notary.jpg';
import Estamp from '../../assets/images/Home/On Demands/Image_E- Stamp.jpg';
import Attestation from '../../assets/images/Home/On Demands/Image_Attestation.jpg';
import Franking from '../../assets/images/Home/On Demands/Image_Franking.jpg';

import Pvtltd from '../../assets/images/Home/Start A Business/Image_Private_Limited_Compny.jpg';
import LLP from '../../assets/images/Home/Start A Business/Image_LLP.jpg';
import Partenership from '../../assets/images/Home/Start A Business/Image_Partnership_Firm.jpg';
import Section8 from '../../assets/images/Home/Start A Business/Image_Section_8.jpg';

import ShopEst from '../../assets/images/Home/Licences/Image_Shope_Establishment.jpg';
import GSTReg from '../../assets/images/Home/Licences/Image_GST_Registration.jpg';
import ImpExp from '../../assets/images/Home/Licences/Image_Import_Export_Code.jpg';
import FSSAI from '../../assets/images/Home/Licences/Image_FSSAI.jpg';

import AnnualComp from '../../assets/images/Home/Compliances/Image_Annual_Compliances.jpg';
import EventBased from '../../assets/images/Home/Compliances/Image_Event_Based_Compliances.jpg';
import Closure from '../../assets/images/Home/Compliances/Image_Closure.jpg';
import GstCompliances from '../../assets/images/Home/Compliances/Image_GST_Compliances.jpg';

import Property from '../../assets/images/Home/Property/Image_Property.jpg';
import Testimonial_BG from '../../assets/images/Home/Testimonial/Image_BG.jpg';
import Client1 from '../../assets/images/Home/Testimonial/image1.jpeg';
import Client2 from '../../assets/images/Home/Testimonial/image2.jpeg';
import Client3 from '../../assets/images/Home/Testimonial/image3.jpeg';

var popularServices = {
    title: "POPULAR SERVICES",
    products:
        [
            {
                image_src: Rental,
                heading: 'Rental Agreement',
                description: 'Lorem Ipsum is simply dummy text ...'
            },
            {
                image_src: Gst,
                heading: 'GST Compliances',
                description: 'Lorem Ipsum is simply dummy text ...'
            },
            {
                image_src: Encumberence,
                heading: 'Encumbrance Certificate',
                description: 'Lorem Ipsum is simply dummy text ...'
            },
            {
                image_src: PvtLtd,
                heading: 'Private Limited Company',
                description: 'Lorem Ipsum is simply dummy text ...'
            }
        ]
};
var documents = {
    title: 'DOCUMENTS',
    products: [
        {
            image_src: Agreements,
            heading: 'Agreements',
            description: 'Lorem Ipsum is simply dummy text ...'
        },
        {
            image_src: Affidavits,
            heading: 'Affidavits',
            description: 'Lorem Ipsum is simply dummy text ...'
        },
        {
            image_src: Bonds,
            heading: 'Bonds',
            description: 'Lorem Ipsum is simply dummy text ...'
        },
        {
            image_src: Deeds,
            heading: 'Deeds',
            description: 'Lorem Ipsum is simply dummy text ...'
        }
    ]
};
var ondemands = {
    title: 'ON DEMANDS',
    products: [
        {
            image_src: Notary,
            heading: 'Notary',
            description: 'Lorem Ipsum is simply dummy text ...'
        },
        {
            image_src: Estamp,
            heading: 'E-stamp',
            description: 'Lorem Ipsum is simply dummy text ...'
        },
        {
            image_src: Attestation,
            heading: 'Attestation',
            description: 'Lorem Ipsum is simply dummy text ...'
        },
        {
            image_src: Franking,
            heading: 'Franking',
            description: 'Lorem Ipsum is simply dummy text ...'
        }
    ]
};
var startBusiness = {
    title: 'START A BUSINESS',
    products: [
        {
            image_src: Pvtltd,
            heading: 'Pvt Ltd Company',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: LLP,
            heading: 'LLP',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: Partenership,
            heading: 'Partnership Firm',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: Section8,
            heading: 'Section8(non profit org)',
            description: 'Lorem Ipsum is simply dummy text  ...'
        }
    ]
};
var licences = {
    title: 'LICENCES',
    products: [
        {
            image_src: ShopEst,
            heading: 'Shop and Establishment',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: GSTReg,
            heading: 'GST Registration',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: ImpExp,
            heading: 'Import Export Code',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: FSSAI,
            heading: 'FSSAI',
            description: 'Lorem Ipsum is simply dummy text  ...'
        }
    ]
};
var compliances = {
    title: 'COMPLIANCES',
    products: [
        {
            image_src: AnnualComp,
            heading: 'Annual Compliances',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: EventBased,
            heading: 'Event Based Compliances',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: Closure,
            heading: 'Closure',
            description: 'Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: GstCompliances,
            heading: 'GST Compliances',
            description: 'Lorem Ipsum is simply dummy text  ...'
        }
    ]
};
var property = {
    title: 'PROPERTY',
    first: {
        image_src: Property,
        heading: 'Property Services',
        description: 'Lorem Ipsum is simply dummy text  ...'
    },
    cilentTestimonial: [
        {
            image_src: Client1,
            clientName: 'Client 1',
            clientDesc: 'Client 1 Details..Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: Client2,
            clientName: 'Client 2',
            clientDesc: 'Client 2 Details..Lorem Ipsum is simply dummy text  ...'
        },
        {
            image_src: Client3,
            clientName: 'Client 3',
            clientDesc: 'Client 3 Details..Lorem Ipsum is simply dummy text  ...'
        }
    ]
}

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeDataContainer data={popularServices} color="home-white" textColor="home-section-text-title" viewAllLink="/documents" />
                <HomeDataContainer data={documents} color="home-blue" textColor="home-section-text-title-white-bg" viewAllLink="/documents" />
                <HomeDataContainer data={ondemands} color="home-white" textColor="home-section-text-title" viewAllLink="/documents" />
                <HomeDataContainer data={startBusiness} color="home-blue" textColor="home-section-text-title-white-bg" viewAllLink="/business" />
                <HomeDataContainer data={licences} color="home-white" textColor="home-section-text-title" viewAllLink="/documents" />
                <HomeDataContainer data={compliances} color="home-blue" textColor="home-section-text-title-white-bg" viewAllLink="/documents" />
                <HomePropertycontainer data={property} color="home-white" textColor="home-section-text-title" viewAllLink="/documents"  />
                <Footer />
            </div>

        );
    }
}