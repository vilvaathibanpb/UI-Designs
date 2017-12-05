import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/home.css';
import '../../css/agreements.css';
import SearchIcon from '../../assets/images/Home/Web Banner/Icon_Search.png'

export default class AgreementsSearchSection extends Component {

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 margin-top-5">
                                <div className="col-md-2" />
                                <div className="col-md-8">
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.text of the printing and typesetting industry.</p>
                                </div>
                                <div className="col-md-2" />
                            </div>
                            <div className="col-md-12 margin-top-2">
                                <div className="col-md-3" />
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control inputfield" placeholder="Search your agreement" name="search" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-search" type="submit"><img src={SearchIcon} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}