"use client";

import { TrendingUp } from "lucide-react";
import {
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
    Label,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { useMemo } from "react";

const CountUser = () => {
    const chartData = useMemo(
        () => [{ browser: "safari", visitors: 200, fill: "var(--color-safari)" }],
        []
    );

    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
        },
    };

    return (
        <div>
            <Card className="flex flex-col w-full max-w-md mx-auto shadow-lg border border-muted p-1">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl font-semibold">User Data</CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Login Data
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px] w-full"
                    >
                        <RadialBarChart
                            data={chartData}
                            startAngle={90}
                            endAngle={-270}
                            innerRadius={80}
                            outerRadius={110}
                        >
                            <PolarGrid gridType="circle" radialLines={false} stroke="none" />
                            <RadialBar
                                dataKey="visitors"
                                background
                                fill="hsl(var(--chart-2))"
                                cornerRadius={10}
                            />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label
                                    content={({ viewBox }) => {
                                        if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox))
                                            return null;

                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan className="fill-foreground text-4xl font-bold">
                                                    {chartData[0].visitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground text-sm"
                                                >
                                                    User Available
                                                </tspan>
                                            </text>
                                        );
                                    }}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                </CardContent>

            </Card>
        </div>
    );
};

export default CountUser;
