"use client"

import { IUser } from "@/types/user"
import { useEffect, useState } from "react"

export default function UserPageClient () {
    const [user, setUser] = useState<IUser[]>([])
    const getData = async () => {
        try {
            const res = await fetch("http://localhost:2000/users")
            const data = await res.json
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData ()
    })
    return (
        <div>

        </div>
    )
}