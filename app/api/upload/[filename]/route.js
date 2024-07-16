import { NextResponse } from "next/server"
import path from "path"
import fsPromises from "fs/promises";
import fs from "fs"
import mime from "mime-types"

export const GET = async (request, { params }) => {
    const filePath = path.join(process.cwd(), `react/fileUpload/${params.filename}`)
    const mimeType = mime.lookup(filePath)
    const fileStat = await fsPromises.stat(filePath)
    const fileSize = fileStat.size;
    const range = request.headers.get("range")
    const CHUNK_SIZE = 2 * 1024 * 1024

    console.log("mime type:" + mimeType)

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = Math.min(start + CHUNK_SIZE - 1, fileSize - 1)
        const chunkSize = end - start + 1;

        const headers = {
            "Content-Length": chunkSize,
            "Content-Type": mimeType,
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
        }

        const fileStream = fs.createReadStream(filePath, {start, end});

        return new NextResponse(fileStream, {
        status: 206,
        headers,
    })

    } else {
        const headers = {
            "Content-Length": fileSize,
            "Content-Type": mimeType,
        }

        const fileStream = fs.createReadStream(filePath)

    return new NextResponse(fileStream, {
        status: 200,
        headers,
    })
}


    }



    