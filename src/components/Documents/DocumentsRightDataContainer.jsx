import React, { Component } from 'react';
import '../../css/documents.css';
import '../../css/home.css';
import '../../css/style.css';

export default class DocumentsRightDataContainer extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        var bonds = document.getElementById("bonds-block");
        var bonds_section_offset = bonds.offsetTop;
        var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;


        if (scrollPos >= bonds_section_offset - window.innerHeight + 50) {
            document.getElementById("image3").classList.add("lefttoright");
            document.getElementById("para3").classList.add("righttoleft");
        }
    }
    handleLoad() {
        let data = this.props.data;
        console.log(data);
        var scrollPos = window.scrollY || window.scollTop || document.getElementsByTagName("html")[0].scrollTop;
        var agreements = document.getElementById("agreements-block");
        var aggrements_section_offset = agreements.offsetTop;

        // if (scrollPos >= (aggrements_section_offset - window.innerHeight + 50)) {
        document.getElementById("image1").classList.add("lefttoright");
        document.getElementById("para1").classList.add("righttoleft");
        // }
    }


    render() {
        let data = this.props.data;
        return (
            <div>
                <section onLoad={this.handleLoad} id={data.id} className="document-sections-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 margin-top-2 margin-bottom-2">
                                <div id={data.imgno} className="col-md-6 col-sm-12 col-xs-12 image1">
                                    <img src={data.src} className="img-responsive" width={500} height={500} />
                                </div>
                                <div id={data.parano} className="col-md-6 col-sm-12 col-xs-12 document-data-bg documents-right-z-index para1">
                                    <p className="content-header">{data.title}</p>
                                    <p>{data.content}</p>
                                    <button className="margin-top-5 margin-bottom-5 documents-section-button">{data.buttonName}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}