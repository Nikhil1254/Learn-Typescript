/**
 * 1. very userful for classes. Sets blueprint for classes like in java we implement interface like that
 * 2. we can do more than whats necessary but not less than that
 * 3. means fields in interface should be there
 */
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story{
    createStory():void
}


class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        this.cameraMode = cameraMode;
        this.burst = burst;
        this.filter = filter;
    }
}

class Youtube implements TakePhoto, Story {
    constructor(public cameraMode: string, public filter: string, public burst: number,public short) {
        this.cameraMode = cameraMode;
        this.burst = burst;
        this.filter = filter;
    }

    createStory(): void {
        console.log(`Story was created.`)
    }
}