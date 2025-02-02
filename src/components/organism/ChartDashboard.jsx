"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
};

export default function ChartDashboard() {
    return (
        <div>
            <Card className="max-w-xl mx-auto shadow-lg border border-muted p-4">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Property Data</CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Uploaded Data
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart width={500} height={300} data={chartData}>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                                className="text-muted-foreground"
                            />
                            <Tooltip
                                content={<ChartTooltipContent hideLabel />}
                                cursor={{ fill: "rgba(0,0,0,0.1)" }}
                            />
                            <Bar dataKey="desktop" fill="hsl(var(--chart-1))" radius={8} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}
