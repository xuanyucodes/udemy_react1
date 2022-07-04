import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, whenVideoSelect}) => {
    console.log(`${videos.length} videos`);

    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} whenVideoSelect={whenVideoSelect}/>;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;