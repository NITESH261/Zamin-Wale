import CardDashboard from "@/components/organism/CardDashboard";
import ChartDashboard from "@/components/organism/ChartDashboard";
import CountUser from "@/components/organism/CountUser";

const Page = () => {
    return (
        <div className="h-[500px] overflow-y-auto scroll-smooth scrollbar-hide ">
            <div className="flex w-full flex-col">
                <h2 className="text-4xl font-medium text-[#581a95] p-2">
                    Welcome to Zaminwale!
                </h2>
                <p className="text-xl p-1">
                    Organize your work and improve your performance with us here!
                </p>
            </div>
            <div className="flex w-full justify-start gap-5 p-4">
                <div className="flex-1 max-w-md aspect-square">
                    <CardDashboard />
                </div>

            </div>
        </div>

    );
};

export default Page;
