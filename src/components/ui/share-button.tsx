'use client'

import {Share2} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function ShareButton(){
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Check this out!",
                    text: "I found something interesting:",
                    url: window.location.href, // current page
                })
            } catch (err) {
                console.error("Share failed:", err)
            }
        } else {
            // fallback if share API isn't supported
            alert("Sharing not supported in this browser.")
        }
    }

    return(
        <>
            <Button variant="outline" size="lg" onClick={()=>handleShare()}>
                <Share2 className="h-5 w-5" />
            </Button>
        </>
    )
}