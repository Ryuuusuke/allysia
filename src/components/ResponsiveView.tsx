import { useMediaQuery } from "react-responsive";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import SmallPhoneView from "./SmallPhoneView";

interface ResponsiveViewProps {
    onReady?: () => void;
}

function ResponsiveView({ onReady }: ResponsiveViewProps) {
    const isSmallPhone = useMediaQuery({ maxWidth: 430 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 1023 }); // Mobile sampai tablet kecil

    if (isSmallPhone) {
        return <SmallPhoneView onReady={onReady} />; // Khusus iPhone kecil, dll.
    } else if (isMobile) {
        return <MobileView onReady={onReady} />; // Umumnya untuk mobile (380px–1023px)
    } else if (isDesktop) {
        return <DesktopView onReady={onReady} />; // Desktop dan layar besar
    } else {
        return <div>Unsupported screen size</div>; // fallback jika resolusi aneh
    }
}

export default ResponsiveView;
