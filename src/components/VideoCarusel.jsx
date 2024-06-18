import React from 'react';
import '../sass/VideoCarusel.sass';
import { Carousel } from 'react-bootstrap';
import Vid1 from '../videos/video1.mp4';
import Vid2 from '../videos/video2.mp4';
import Vid3 from '../videos/video3.mp4';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';

const VideoCarusel = () => {

    const videosProperites = [
        {
            id: 1,
            title: "Video 1",
            src: Vid1
        },
        {
            id: 2,
            title: "Video 2",
            src: Vid2
        },
        {
            id: 3,
            title: "Video 3",
            src: Vid3
        }
    ];

    return (
        <Carousel>
            {videosProperites.map(video => (
                <Carousel.Item key={video.id}>
                    <ReactPlayer
                        url={video.src}
                        width="100%"
                        pip={true}
                        controls={true}
                        playing={true}
                    />
                    <Carousel.Caption>
                        <h3>{video.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default VideoCarusel;
