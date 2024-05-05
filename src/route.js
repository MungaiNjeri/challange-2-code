import App from "./App"
import BotCollection from "./components/BotCollection"
import BotSpecs from "./components/BotSpecs"
const routes =[
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/:id',
        element:<BotSpecs/>
    },
    
]
export default routes;