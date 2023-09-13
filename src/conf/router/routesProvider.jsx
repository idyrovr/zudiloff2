import { Home } from "../../pages/Home/Home"
import { About } from "../../pages/About/About"
import Club from "../../pages/Club"
import Education from "../../components/Education"

export const routesProvider = {
    home: {
        path: "/",
        element: <Home />
    },
    about : {
        path: "/about",
        element: <About />
    },

    club: {
        path: "/club",
        element: <Club />
    },
    education: {
        path: "/education",
        element: <Education />
    }

}