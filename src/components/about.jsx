import React, { Component } from 'react'



export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>過去的幾年時間學習了國外文化，眼界擴大的同時也觀察世界的變化</p>
                                            <p>學習科技新技術一直在我腦海裡，此刻投入網路技術領域，結合我對資訊安全的理解，
                                                期望在網路工程累積更多實務經驗~
                                            <br></br>
                                                <mark>Hash Tag</mark>
                                                <ul>
                                            <li>好奇心</li>
                                            <li>愛挑戰</li>
                                            <li>對生活充滿熱情</li>
                                            <li>對工作保持穩定輸出</li>
                                          <li>解決問題</li>
                                        </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">學習歷程</span>
                                <h2 className="colorlib-heading">Skill</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>專案相關</h3>
                                        <ul>
                                            <li>系統專案期程管理</li>
                                            <li>業務簡報</li>
                                            <li>跨部門專案合作</li>
                                            <li>系統測試手冊編寫</li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>網頁相關</h3>
                                        <ul>
                                            <li>前端網頁維護</li>
                                            <li>網頁弱點掃描</li>
                                                                                 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>其他</h3>
                                        <ul>
                                        <li>電腦硬體組裝</li>
                                        <li>Adobe premiere</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>


                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div >
                </section >
            </div >
        )
    }
}
