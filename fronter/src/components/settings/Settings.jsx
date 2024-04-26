import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import { LoadingSpinner} from '../LoadingSpinner'
import { PasswordSetings } from "./PasswordSetings";

export const Settings = () => {
    const { channelSettings, isFetching, saveSettings} = useChannelSettings()

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
            <PasswordSetings/>
            <StreamKey streamKey={channelSettings.streamKey}/>
        </div>
    )
}