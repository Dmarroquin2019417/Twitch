import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { ChannelDescription } from "./ChannelsDescription";
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from '../LoadingSpinner'
import { getChannels } from "../../services";
 

export const Stream = ({streamUrl}) => {
    return(
        <div className="channel-video-container">
            <ReactFlvPlayer width='100%' heigt='100%' url={streamUrl} />
        </div>
    )
}

export const ChannelView = ({getChannels}) =>{
    const { isFetching, getChannelsDetails, ChannelsDetails} = useChannelDetails();
    const {id} = useParams()
    useEffect(() => {
        getChannelsDetails(id)
    }, [])
    if(isFetching){
        return<LoadingSpinner/>
    }

    return(
        <div className="channel-conatiner">
            <div className="channel-video-description-section">
                {ChannelsDetails.data.isOnline ? (
                    <Stream streamUrl={ChannelsDetails.data.streamUrl}/>
                ) : (
                    <div className="channel-offline-placholder">
                        <span>Channel is offline ....</span>
                    </div>
                )}

                <ChannelDescription
                channelId={ChannelsDetails.data.id}
                title={getChannelsDetails.data.title}
                username={getChannelsDetails.data.username}
                description={getChannelsDetails.data.description}
                getChannels={getChannelsDetails.data.getChannels}
                ></ChannelDescription>
            </div>
        </div>
    )
    
}