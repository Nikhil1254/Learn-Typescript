/**
 * 1. Its blueprint , we cant create object from it.
 * 2. we need to extend it - inheritance
 * 3. we can just give signature of function using abstract keyword
 * 4. We can also provide defination to function, we can't do that in interface that's major difference
 * 5. Interface is implemented and abstract class is extended. 
 */


abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {

    }

    // must be implemented in class who will extend this class
    abstract getSepia(): void

    // not compulsory to be implemented in class which will extend it cause it already has defination
    getReelTime(): number {
        return 8;
    }
}


class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log(`Sepia`)
    }
}

const ig = new Instagram("test", "test",3);
console.log(ig.getReelTime());
export { }