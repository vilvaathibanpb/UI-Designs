import React, { Component } from 'react';
import '../../css/documents.css';
import '../../css/home.css';
import '../../css/style.css';
import Header from './BusinessHeader';
import DocumentsRightDataContainer from '../Documents/DocumentsRightDataContainer';
import DocumentsLeftDataContainer from '../Documents/DocumentsLeftDataContainer';
import Footer from '../Footer/Footer';

import propietorship from '../../assets/images/startABusiness/Image_proprietorship.jpg';
import partnership from '../../assets/images/startABusiness/Image_Partnership.jpg';
import pvtltd from '../../assets/images/startABusiness/Image_Private_Limited.jpg';
import llp from '../../assets/images/startABusiness/Image_LLP.jpg';

var propietorshipBlock = {
    id: 'agreements-block',
    src: propietorship,
    imgno: 'image1',
    parano: 'para1',
    title: 'Propietorship Registration',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'KNOW MORE'
}
var partnershipBlock = {
    id: 'affidavits-block',
    src: partnership,
    imgno: 'image2',
    parano: 'para2',
    title: 'Partnership Firm Registration',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'KNOW MORE'
}
var pvtltdBlock = {
    id: 'bonds-block',
    src: pvtltd,
    imgno: 'image3',
    parano: 'para3',
    title: 'Private Limited Company Registration',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'KNOW MORE'
}
var llpBlock = {
    id: 'deeds-block',
    src: llp,
    imgno: 'image4',
    parano: 'para4',
    title: 'Limited Liability Partnership Registration',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'KNOW MORE'
}
export default class Business extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
        // var agreements = document.getElementsByClassName("agreements");
        // var aggrements_section_offset = agreements.offsetTop;

        //   if (scrollPos >= (aggrements_section_offset - window.innerHeight + 50) ) {
        //     document.getElementsByClassName("image1").classList.add("lefttoright");
        //     document.getElementsByClassName("para1").classList.add("righttoleft");
        // }

    }

    render() {
        return (
            <div>
                <Header />
                <DocumentsRightDataContainer data={propietorshipBlock} />
                <DocumentsLeftDataContainer data={partnershipBlock} />
                <DocumentsRightDataContainer data={pvtltdBlock} />
                <DocumentsLeftDataContainer data={llpBlock} />
                <Footer />
            </div>
        );
    }
}