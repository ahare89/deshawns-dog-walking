import { DogsList } from "../dogs/DogsList"

export const ApplicationViews = () => {
    return <Routes>
        <Route path="/" element={
            <>
            

            <Outlet />
            </>
        }>
        </Route>
        <Route path="" element={ <DogsList />} />


    </Routes>
}