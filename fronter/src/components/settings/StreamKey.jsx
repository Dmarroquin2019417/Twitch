import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import { LoadingSpinner } from '../LoadingSpinner'

export const Settings = () => {
    const { channelSettings, isFetching, saveSettings } = useChannelSettings()

    if (isFetching) {
        return <LoadingSpinner />
    }

    return (
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings} />
        </div>
    )
}
export const StreamKey = (props) => {
    const { streamKey } = props
    return (
        <div className="settings-stream-key-container">
            <span>{streamKey}</span>
        </div>
    )
}