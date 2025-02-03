"use client";
import React, { useState } from "react";
import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link"; // Import Link component for navigation

const initialNotifications = [
    { title: "Your call has been confirmed.", description: "1 hour ago" },
    { title: "You have a new message!", description: "1 hour ago" },
    { title: "Your subscription is expiring soon!", description: "2 hours ago" },
];

const NotificationItem = ({ title, description }) => (
    <div className="grid grid-cols-[auto_1fr] items-start gap-x-3 pb-4 last:pb-0">
        <span className="h-2 w-2 rounded-full bg-sky-500 mt-1" />
        <div>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

const CardDashboard = ({ className, ...props }) => {
    const [notifications, setNotifications] = useState(initialNotifications);

    const markAllAsRead = () => setNotifications([]);

    return (
        <Card className={cn("w-[380px] overflow-hidden", className)} {...props}>
            <CardHeader className="relative">
                {/* Image Container */}
                <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
                    <Image
                        src={"/assets/dashboard/user.png"}
                        alt="Profile Image"
                        layout="fill"
                        objectFit="cover" // Ensures image covers the area
                        className="rounded-t-lg"
                    />
                </div>

                {/* Card Title & Description */}
                <CardTitle className="text-xl mt-4">Set Up your profile</CardTitle>
                <CardDescription>
                    <p className="text-sm text-muted-foreground">
                        Send notifications to your device. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint voluptate adipisci excepturi. Nulla, omnis illum.
                    </p>
                </CardDescription>
            </CardHeader>

            {/* Mark All as Read Button */}
            <CardFooter className="w-full justify-center">
                <Link href="/dashboard/properties"> {/* Replace '/target-page' with your desired URL */}
                    <Button className="w-full">
                        <Check className="mr-2" />
                        Go to Page
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default CardDashboard;
