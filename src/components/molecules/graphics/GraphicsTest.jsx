import { GaugeChart } from "./GaugeChart";
import { GaugeChart2 } from "./GaugeChart2";
import { GaugeChart3 } from "./GaugeChart3";
import { GaugeChart4 } from "./GaugeChart4";
import { GaugeChart5 } from "./GaugeChart5";

export default function GraphicsTest() {
    return (
        <div className="w-full h-full flex flex-wrap">
            <GaugeChart />
            <GaugeChart2 />
            <GaugeChart3 />
            <GaugeChart4 />
            <GaugeChart5 />
        </div>
    )
}
