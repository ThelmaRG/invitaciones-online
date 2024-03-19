import IcoMoon, { IconProps } from "react-icomoon";
import iconSet from "../../public/assets/fonts/selection.json";

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;