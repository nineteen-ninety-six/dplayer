import Template from './template';
import Danmaku from './danmaku';
import Events from './events';
import FullScreen from './fullscreen';
import User from './user';
import Subtitle from './subtitle';
import Bar from './bar';
import Timer from './timer';
import Bezel from './bezel';
import Controller from './controller';
import Setting from './setting';
import Comment from './comment';
import HotKey from './hotkey';
import ContextMenu from './contextmenu';
import InfoPanel from './info-panel';
import * as DPlayerType from './types';
declare class DPlayer {
    bar: Bar;
    bezel: Bezel;
    comment: Comment | null;
    contextmenu: ContextMenu;
    controller: Controller;
    danmaku: Danmaku | null;
    events: Events;
    fullScreen: FullScreen;
    hotkey: HotKey;
    infoPanel: InfoPanel;
    setting: Setting;
    subtitle: Subtitle | null;
    template: Template;
    timer: Timer;
    user: User;
    container: HTMLElement;
    containerClickFun: () => void;
    docClickFun: () => void;
    focus: boolean;
    narrow: boolean;
    noticeTime: number | null;
    options: DPlayerType.OptionsInternal;
    paused: boolean;
    plugins: DPlayerType.Plugins;
    prevVideoCurrentTime: number;
    prevVideo: HTMLVideoElement | null;
    quality: DPlayerType.VideoQualityInternal | null;
    qualityIndex: number | null;
    switchingQuality: boolean;
    resizeObserver: ResizeObserver;
    tran: (text: string) => string;
    type: DPlayerType.VideoType | string;
    video: HTMLVideoElement;
    /**
     * DPlayer constructor function
     *
     * @param {Object} options - See README
     * @constructor
     */
    constructor(options: DPlayerType.Options);
    /**
     * Seek video
     */
    seek(time: number, hideNotice?: boolean): void;
    /**
     * Sync video (live only)
     */
    sync(quiet?: boolean): void;
    /**
     * Play video
     */
    play(fromNative?: boolean): void;
    /**
     * Pause video
     */
    pause(fromNative?: boolean): void;
    switchVolumeIcon(): void;
    /**
     * Set volume
     */
    volume(percentage?: number | string, nostorage?: boolean, nonotice?: boolean): number;
    /**
     * Set volume muted
     */
    muted(muted?: boolean): boolean;
    /**
     * Toggle between play and pause
     */
    toggle(): void;
    /**
     * Attach event
     */
    on(name: DPlayerType.Events, callback: (info?: Event | any) => void, once?: boolean): void;
    /**
     * Detach event
     */
    off(name: DPlayerType.Events, callback: (info?: Event | any) => void): void;
    /**
     * Switch to a new video
     *
     * @param {Object} video - new video info
     * @param {Object | boolean} danmakuAPI - new danmaku info
     * @param {Boolean} remember - whether to remember the current video time and speed
     * @param {Object} apiBackend - new danmaku api backend info
     */
    switchVideo(video: {
        url: string;
        type?: DPlayerType.VideoType | string;
        pic?: string;
    }, danmakuAPI?: DPlayerType.Danmaku | boolean, remember?: boolean, apiBackend?: DPlayerType.APIBackend): void;
    initDanmaku(danmakuAPI?: DPlayerType.Danmaku | boolean, apiBackend?: DPlayerType.APIBackend): void;
    initMSE(video: HTMLVideoElement, type: DPlayerType.VideoType | string): void;
    initVideo(video: HTMLVideoElement, type: DPlayerType.VideoType | string): void;
    switchQuality(index: number): void;
    /**
     * Show notice
     * @param text Notice text
     * @param time Time to show (ms, if -1 then notice will not hide)
     * @param opacity Notice opacity
     * @param color Notice color
     */
    notice(text: string, time?: number, opacity?: number, color?: string): void;
    /**
     * Instantly hide notice
     */
    hideNotice(): void;
    resize(): void;
    speed(rate: number): void;
    /**
     * Destroy DPlayer, and it can not be used again
     * @param keepContainerInnerHTML If true, do not clean the innerHTML of the container
     */
    destroy(keepContainerInnerHTML?: boolean): void;
    static get version(): string;
}
export default DPlayer;
//# sourceMappingURL=player.d.ts.map