import { useMediaQuery } from "react-responsive";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import SmallPhoneView from "./SmallPhoneView";

function ResponsiveView() {
	const isSmallPhone = useMediaQuery({ maxWidth: 380 });
	const isMobile = useMediaQuery({ maxWidth: 767 });
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	if (isSmallPhone) return <SmallPhoneView />;
	if (isMobile) return <MobileView />;
	if (isDesktop) return <DesktopView />;
}

export default ResponsiveView;
