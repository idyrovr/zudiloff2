import { Suspense } from "react";
import { routesProvider } from "./routesProvider";
import { Routes, Route} from 'react-router-dom'




export const RouterProvider = () => {
    
    return (
        <div className='routerprovider'>
                
            
            <Suspense fallback={<div> Loading . . . </div>} />

            <Routes>
                {
                    
                    Object.values(routesProvider)
                        .map(({ path, element }) => (
                            <Route path={path} element={element} key={path} />
                        ))
                }
            </Routes>
            <Suspense />
        </div>
    );
};