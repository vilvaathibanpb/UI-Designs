import React, { Component } from 'react';
import '../../../css/home.css';
import '../../../css/style.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let wpcom = WPCOM();
        var output = '<p class="footer-head">BLOG</p>';
        wpcom
            .site('blog.dockettech.com')
            .postsList({ number: 3 }, function (err, data) {
                if (err) throw err;
                console.log('the newest 5 blog post titles are:\n', data);

                data.posts.forEach(function (post, i) {
                    console.log('  %d: "%s"', i + 1, post.title);
                    output = output + '<div class="icons_container"><img height="50" width="50" class="icon_left" src="' + post.featured_image + '">'
                        + '<p class="icon_right padding_left footer-content">' + post.title + '<span class="line-break"> <a href="' + post.URL + '" target="_blank">READ MORE...</a></span><p></div>';
                });
                var z = document.createElement('div');
                z.innerHTML = output;
                document.getElementById("wpblog").appendChild(z);
            });
    }

    render() {
        return (
            <div>
                <section id="footer" className="home-footer margin-bottom-2">
                    <div className="container-fluid home-sections-footer-margins">
                        <div className="row home-data-row">
                            <div className="col-md-12 clearfix">
                                <div className="col-md-2 col-sm-6 col-xs-6">
                                    <p className="footer-head">DOCKET TECH</p>
                                    <p className="footer-content">Home</p>
                                    <hr />
                                    <p className="footer-content">About</p>
                                    <hr />
                                    <p className="footer-content">Team</p>
                                    <hr />
                                    <p className="footer-content">Help</p>
                                    <hr />
                                    <p className="footer-content">Careers</p>
                                    <hr />
                                    <p className="footer-content">Contact</p>
                                    <hr />
                                </div>
                                <div className="col-md-1">
                                </div>
                                <div className="col-md-2 col-sm-6 col-xs-6">
                                    <p className="footer-head">SERVICES</p>
                                    <p className="footer-content">Documents</p>
                                    <hr />
                                    <p className="footer-content">On Demand</p>
                                    <hr />
                                    <p className="footer-content">Start A Business</p>
                                    <hr />
                                    <p className="footer-content">Licences</p>
                                    <hr />
                                    <p className="footer-content">Compliances</p>
                                    <hr />
                                    <p className="footer-content">Property</p>
                                    <hr />
                                </div>
                               
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <p className="footer-head">OFFICE ADDRESS</p>
                                    <p className="footer-content">New Bridge Center,<span className="line-break">Embassay Golf Links Business Park,</span>
                                        <span className="line-break">Block B - 1st floor, Pebble Beach,</span>
                                        <span className="line-break">Off Intermediate Ring Road,Domlur</span>
                                        <span className="line-break">Bangalore - 560071,India</span></p>
                                    <p className="footer-content"><span className="line-break" />support@dockettech.com</p>
                                    <p className="footer-content"><span className="line-break" />080 - 4656 4656</p>
                                    <span className="line-break" />
                                    <span className="line-break" />
                                </div>
                                <div className="col-md-1">
                                </div>
                                <div id="wpblog" className="col-md-3 col-sm-12 col-xs-12">
                                </div>
                        
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row home-data-row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <p className="footer-content">Policies : Disclaimer
                                        <span className="verticalLine"> Terms </span>
                                        <span className="verticalLine"> Privacy <span className="custom_hr" />
                                        </span></p>
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <div className="icons_container">
                                        <img className="icon_left" src="images/Home/Footer/Icon_FB.png"  />
                                        <img className="icon_center" src="images/Home/Footer/Icon_Twitter.png"  />
                                        <img className="icon_right" src="images/Home/Footer/Icon_Google.png"  />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 col-xs-12">
                                    <a href="http://blog.dockettech.com/"><button className="buttonStyle">VIEW ALL</button></a>
                                </div>
                            </div>
                        </div>
                        <p className="copyRightText">Copyright © 2017.Dcoket Tech Solutions Private Limited</p>
                    </div>
                </section>
            </div>
        );
    }
}