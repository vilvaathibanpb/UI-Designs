import React, { Component } from 'react';
import '../../css/documents.css';
import '../../css/home.css';
import '../../css/style.css';
import Header from './DocumentHeader';
import DocumentsRightDataContainer from './DocumentsRightDataContainer';
import DocumentsLeftDataContainer from './DocumentsLeftDataContainer';
import Footer from '../Footer/Footer';

import Agreements from '../../assets/images/Documents/Image_Agreements.jpg';
import Affidavits from '../../assets/images/Documents/Image_Affidavits.jpg';
import Bonds from '../../assets/images/Documents/Image_Bonds.jpg';
import Deeds from '../../assets/images/Documents/Image_Deeds.jpg';

var agreements = {
    id: 'agreements-block',
    src: Agreements,
    imgno: 'image1',
    parano: 'para1',
    title: 'Agreements',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'VIEW ALL AGREEMENT SERVICES'
}
var affidavits = {
    id: 'affidavits-block',
    src: Affidavits,
    imgno: 'image2',
    parano: 'para2',
    title: 'Affidavits',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'VIEW ALL AFFIDAVITS SERVICES'
}
var bonds = {
    id: 'bonds-block',
    src: Bonds,
    imgno: 'image3',
    parano: 'para3',
    title: 'Bonds',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'VIEW ALL BONDS SERVICES'
}
var deeds = {
    id: 'deeds-block',
    src: Deeds,
    imgno: 'image4',
    parano: 'para4',
    title: 'Deeds',
    content: 'Lorem Ipsum is simply dummy text of the printing ... when an unknown printer took a galley of typeand scrambled it to make a type specimen book.It was popularised in the 1960s with the releaseof Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonName: 'VIEW ALL DEEDS SERVICES'
}
export default class Documents extends Component {
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
                <DocumentsRightDataContainer data={agreements} />
                <DocumentsLeftDataContainer data={affidavits} />
                <DocumentsRightDataContainer data={bonds} />
                <DocumentsLeftDataContainer data={deeds} />
                <Footer />
            </div>
        );
    }
}