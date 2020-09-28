import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { ChevronRight } from 'react-bootstrap-icons'
import YouTube from 'react-youtube'
import '../styles/style.css'

const LatestVideos = () => {
    const [videoList] =useState(
        [{url: 'https://youtu.be/kSQmhvgN7So'},
        {url: 'https://youtu.be/ov0lMIqinNg'},
        {url: 'https://youtu.be/sKYjtapD5Sg'}])

    function onPlayerReady(event){
        event.target.pauseVideo();
    }

    function videoAvailable(index, inputHeight, inputWidth) {
        let videoUrl = videoList[index].url;
        let sign = false;
        let opts = {
            height: inputHeight,
            width: inputWidth,
            playerVars: {
                autoplaye: 0
            }
        }
        for (let i = 0; i < videoUrl.length; i++) {
          if (videoUrl[i] === '=') {
            sign = true;
            break;
          }
        }
        if (sign) {
          videoUrl = videoUrl.split('=').pop();
        } else {
          videoUrl = videoUrl.split('https://youtu.be/').pop();
        }
        return <YouTube videoId={videoUrl} opts={opts} onReady={onPlayerReady} />;
    }

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <div style={{fontSize: '22px'}}><strong>Latest Videos</strong></div>
                    <Row>
                        <Col>
                            <div className="text-muted">Watch and learn, ladies</div>
                        </Col>
                        <Col className="text-right">
                            <Link to="#" style={{color: '#be1854', }}>See More &nbsp; &nbsp;<ChevronRight/></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    {videoAvailable((videoList.length - 1), '420', '730')}
                </Col>
                <Col sm={4}>
                    <Row>
                        {videoAvailable((videoList.length - 2), '205', '370')}
                    </Row>
                    <Row className='pt-1'>
                        {videoAvailable((videoList.length - 3), '205', '370')}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LatestVideos;
