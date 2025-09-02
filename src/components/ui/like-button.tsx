"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function LikeButton() {
    const [liked, setLiked] = useState(false)

    return (
        <Button
            variant="outline"
            size="lg"
            onClick={() => setLiked(!liked)} // 👈 onClick should be here
        >
            <Heart
                className={`h-5 w-5 ${liked ? "text-red-500 fill-red-500" : "text-foreground"}`}
            />
        </Button>
    )
}
