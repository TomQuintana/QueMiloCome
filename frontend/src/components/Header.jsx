import { Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div>
                <h1 className=' font-black text-9xl text-center text-indigo-500 md:w-1/2 mx-auto'>
                    QueMiloCome
                </h1>
                <Outlet />
            </div>
        </>
    )
}

export default Header
