import ChartDashboard from "@/components/organism/ChartDashboard";
import CountUser from "@/components/organism/CountUser";

const Page = () => {
    return (
        <div>
            {/* <div className="flex w-full justify-start gap-5 p-4">
                <div className="flex-1 max-w-md aspect-square">
                    <ChartDashboard />
                </div>
                <div className="flex-1 max-w-md aspect-square">
                    <CountUser />
                </div>
            </div>
            <div className="flex w-full mt-3">
                <hr className="bg-black h-1 w-full" />
            </div> */}
            <div className="flex w-full flex-col border-2 border-black">
                <h2 className=" text-4xl font-medium text-[#581a95] p-2">Welcome to Zaminwale!</h2>
                <p className=" text-xl p-1">Organize your work and improve your performance with us here!</p>
            </div>
        </div>
    );
};

export default Page;
