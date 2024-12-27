import Navbar from "@/components/organism/Navbar"

const RootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="flex w-full flex-1 flex-col absolute">
                <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto">
                    {children}
                </div>
            </main>
        </>
    )
}

export default RootLayout
