import HeaderOnly from "~/components/Layout/HeaderOnly";

import Home from "~/pages/Home";
import Menu from "~/pages/Menu";

const publicRouter = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu, layout: HeaderOnly }
]

const privateRouer = [

]

export { privateRouer, publicRouter };