import { db } from "./lib/prisma"

async function main() {
    // const email = await db.emails.delete({
    //     where: {
    //         id: "cm79vyry70000eq1s6ryq86dp"
    //     }
    // })


    const email = await db.emails.findMany({
        where: {
            subject: "10 Free AI Tools, & Make Money With GPTs Guide🦾"
        },
        select: {
            id: true,
            subject: true,
            body: true,
            createdAt: true,
            updatedAt: true
        }
    })

    // const email = await db.emails.create({
    //     data: {
    //         subject: "10 Free AI Tools, & Make Money With GPTs Guide🦾",
    //         sender: "Champ Decay <champdecay@gmail.com>",
    //         body: "test",
    //         html: "test",
    //         image: "test",
    //         messageId: "test",
    //         tags: "test"
    //     }
    // })

    console.log(email)
}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })