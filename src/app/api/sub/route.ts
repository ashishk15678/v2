import { NextResponse } from "next/server"
import prisma from "@/../db"
import { headers } from "next/headers"

export async function POST(req: any) {
    try {

        const { email, ref } = await req.json()
        if (!email) {
            return NextResponse.json({ ERROR: "Email not provided" }, { status: 300 })
        }
        const sub = await prisma.sub.create({
            data: {
                email,
                ref: ref || "no-ref",
                useragent: headers().get("user-agent") || "useragent",
                ip: headers().get("x-forwarded-for") || "ip"
            }
        })

        console.log(sub)
        return NextResponse.json({ msg: "Created" })
    } catch (e) {
        return NextResponse.json({ ERROR: "Some error occured" }, { status: 500 })
    }
}