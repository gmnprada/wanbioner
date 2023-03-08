import { BasePacket } from "../core/packet.mjs";
import { performance, PerformanceObserver } from "node:perf_hooks";
import { randomBytes } from 'crypto';

const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks();
});
obs.observe({ type: 'measure' });


async function run() {
    performance.mark("A");
    for (let i = 0; i <= 1024; i++) {
        console.time(`Packet ${i.toString()}`);
        let packet = new BasePacket("", randomBytes(1+i));
        await packet.Encode();
        await packet.Compress();
        console.timeEnd(`Packet ${i.toString()}`);
    }
    performance.mark("B");
    console.log("Measuring Metric in MS");
    performance.measure('A to B', 'A', 'B');
}

run();