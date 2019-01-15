import { NavigationScreenProp } from "react-navigation";

export const isIndexEven = (index: number) => index % 2 == 0;

export interface ComponentNavigationProps { navigation: NavigationScreenProp<any, any> };