import App from "./App"
import BotCollection from "./components/BotCollection"
import BotSpecs from "./components/BotSpecs"
const routes =[
    {
        path:'/challange-2-code',
        element:<App/>
    },
    {
        path:'/challange-2-code/:id',
        element:<BotSpecs/>
    },
    
]
export default routes;