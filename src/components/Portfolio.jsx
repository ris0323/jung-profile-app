import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-portfolio" data-section="portfolio">
          <div className="colorlib-narrow-content">
            <div className="row">
              < div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Protfolio</h2>
                <p >作品集</p>
                {/* <div className='col-sm-6'>
                  <h1><b>PM專案經理</b></h1>
                  <ul>
                    <li>描繪產品樣貌</li>
                    <li>協調時程，確保產品上線</li>
                  </ul>
                  <blockquote><b>打造產品從 0 到 1</b></blockquote>

                  <div className='col-xl-4 col-md-6'>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/XG66UpNdtx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div> */}
              </div>
              <section>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <div className='col-sm-6'>
                    <h1><b>系統專案負責人</b></h1>
                    <ul>
                      <li>需求訪談，制定期程</li>
                      <li>與RD合作打造符合業主需求之管理系統</li>
                    </ul>
                    <p></p>
                    <blockquote><b>國土署基礎建設專案</b></blockquote>
                  </div>
                  <div className='col-xl-4 col-md-6'>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/XG66UpNdtx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                  </div>
                </div>
              </section>
              <section>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <div className='col-sm-6'>
                    <h1><b>IRUP</b></h1>
                    <p>國際組織官網</p>
                    <ul>
                      <li>專案管理</li>
                      <li>切版</li>
                    </ul>
                    <p></p>
                    <blockquote><b>國家政策應用</b></blockquote>
                  </div>
                  <div className='col-xl-4 col-md-6'>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/wAMaCt6catY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </section>
              <hr></hr>
              <section>
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <div className='col-sm-6'>
                    <h1><b>影片編輯</b></h1>
                    <ul>
                      <li>影片主題發想及延伸</li>
                      <li>分鏡拍攝</li>
                    </ul>
                    <p></p>
                    <blockquote><b>用影像說故事</b></blockquote>
                  </div>
                  <div className='col-xl-4 col-md-6'>
                    <iframe width="400" height="200" src="https://www.youtube.com/embed/9ooPmLNNZhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </section >
      </div >

    )
  }
}
