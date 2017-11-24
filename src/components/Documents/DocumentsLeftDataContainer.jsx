import React, { Component } from 'react';
import '../../css/documents.css';
import '../../css/home.css';
import '../../css/style.css';

export default class DocumentsLeftDataContainer extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        var affidavits = document.getElementById("affidavits-block");
        var bonds = document.getElementById("bonds-block");
        var deeds = document.getElementById("deeds-block");
        var affidavits_section_offset = affidavits.offsetTop;
        var bonds_section_offset = bonds.offsetTop;
        var deeds_section_offset = deeds.offsetTop;
        var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
       

        if (scrollPos >= affidavits_section_offset - window.innerHeight + 50) {
            document.getElementById("para2").classList.add("righttoleft");
            document.getElementById("image2").classList.add("lefttoright");

        }

        if (scrollPos >= deeds_section_offset - window.innerHeight + 50) {
            document.getElementById("para4").classList.add("righttoleft");
            document.getElementById("image4").classList.add("lefttoright");
        }
    }

    render() {
        let data = this.props.data;
        return (
            <div>
                <section  id={data.id} className="document-sections-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 margin-top-2 margin-bottom-2">
                                <div id={data.imgno} className="col-md-6 col-sm-12 col-xs-12 document-data-bg documents-left-z-index">
                                    <h1 className="banner-header">{data.title}</h1>
                                    <p>{data.content}</p>
                                    <button className="margin-top-5 margin-bottom-5 documents-section-button">{data.buttonName}</button>
                                </div>
                                <div id={data.parano} className="col-md-6 col-sm-12 col-xs-12">
                                    <img src={data.src} className="img-responsive" width={500} height={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}