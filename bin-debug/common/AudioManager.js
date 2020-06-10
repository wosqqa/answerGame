var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 音乐管理器类
 */
var AudioManager = (function () {
    function AudioManager() {
        /**
         * 存放播放的声音
         * key：声音名称
         * value：对应的SoundChannel，调用play方法会返回这个对象
         */
        this.soundChannelList = {};
        /**
         * 是否静音
         */
        this.muted = false;
        /**
         * 播放列表
         */
        this.playList = new SelfMap();
    }
    Object.defineProperty(AudioManager, "instance", {
        get: function () {
            if (!this.audioManager) {
                this.audioManager = new AudioManager();
            }
            return this.audioManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置自动播放音乐列表
     * @param audioName 自动播放音乐名称
     */
    AudioManager.prototype.setAutoPlayAudio = function (audioName) {
        this.autoPlayAudioName = audioName;
        this.autoPlay();
    };
    /**
     * 自动播放音乐
     */
    AudioManager.prototype.autoPlay = function () {
        if (this.muted) {
            return;
        }
        if (!this.autoPlayAudioName) {
            return;
        }
        this.play(this.autoPlayAudioName, 0, 0);
    };
    /**
     * 播放音乐
     * @param name 音乐名称
     * @param startTime 应开始播放的初始位置（以秒为单位），默认值是 0
     * @param loops 播放次数，默认值是 1。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
     */
    AudioManager.prototype.play = function (audioName, startTime, loops) {
        if (startTime === void 0) { startTime = 0; }
        if (loops === void 0) { loops = 1; }
        this.stop(audioName);
        var audio = RES.getRes(audioName);
        if (audio && audio.play) {
            this.soundChannelList[audioName] = audio.play(startTime, loops);
            this.soundChannelList[audioName].volume = this.muted ? 0 : 1;
        }
        if (loops === 0 && !this.playList.get(audioName)) {
            this.playList.put(audioName, true);
        }
        console.log('play', audioName);
    };
    /**
     * 停止播放指定的音乐
     * @param audioName 音乐名称
     */
    AudioManager.prototype.stop = function (audioName) {
        var channel = this.soundChannelList[audioName];
        if (channel && channel.stop) {
            channel.stop();
            this.soundChannelList[audioName] = null;
            console.log('stop', audioName);
        }
        this.playList.delete(audioName);
    };
    /**
     * 停止播放所有音乐
     */
    AudioManager.prototype.stopAll = function () {
        for (var audioName in this.playList.list) {
            this.stop(audioName);
        }
    };
    /**
     * 设置是否静音
     */
    AudioManager.prototype.mute = function (muted) {
        this.muted = muted;
        if (muted) {
            this.setVolume(0);
        }
        else {
            this.setVolume(1);
        }
    };
    AudioManager.prototype.setVolume = function (volume) {
        for (var audioName in this.playList.list) {
            var channel = this.soundChannelList[audioName];
            if (channel && channel.volume >= 0) {
                channel.volume = volume;
                console.log('volume', audioName, volume);
            }
        }
    };
    /**
     * 是否正在播放
     */
    AudioManager.prototype.isPlaying = function (audioName) {
        return !this.muted && this.soundChannelList[audioName];
    };
    return AudioManager;
}());
__reflect(AudioManager.prototype, "AudioManager");
